const BASEURL = process.env.NEXT_PUBLIC_API_URL;
import { cookies } from 'next/headers'

export class ServerApi {
    static async _get(endpoint: string, params = {}): Promise<any> {
        const timeout = 5000;
        const url = `${BASEURL}/${endpoint}`;
        const cookieStore = await cookies()
        const tokenObj = cookieStore.get('authToken')
        let token = tokenObj ? tokenObj.value : undefined
        const method = 'GET'

        const options: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { Authorization: `Bearer ${token}` } : {})
            },
        };
        const finalUrl = method === 'GET' && params
            ? `${url}?${new URLSearchParams(params).toString()}`
            : url;
        if (method !== 'GET' && params) {
            options.body = JSON.stringify(params);
        }

        const controller = new AbortController();
        const signal = controller.signal;
        options.signal = signal;

        const timeoutId = setTimeout(() => {
            controller.abort();
        }, timeout);

        try {
            const response = await fetch(finalUrl, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error: any) {
            if (error.name === 'AbortError') {
                console.error(`Request to ${endpoint} timed out after ${timeout}ms`);
            } else {
                console.error(`Error during ${method} request to ${endpoint}:`, error);
            }
            throw error;
        } finally {
            clearTimeout(timeoutId); // Timeout санах ойг цэвэрлэх
        }

    }

    static async _checkExam(params = {}): Promise<any> {
        const data = await this._get(`exam`, params)
        return data;
    }

    static async _getExam(params = {}): Promise<any> {
        const data = await this._get(`/one/9/service_course_exams`, params)
        return data;
    }

    static async _checkCourse(courseId: any, params = {}): Promise<any> {
        const cookieStore = await cookies()
        const tokenObj = cookieStore.get('authToken')
        let token = tokenObj ? tokenObj.value : undefined
        const data = await this._get(`9/courses/${courseId}`, params)
        if (token) {
            const enroll = await this._get(`course/9/enroll/check`, { courseId })
            return {
                ...data,
                enrolled: enroll.enrolled
            }
        }
        else {
            return data;
        }
    }
}
