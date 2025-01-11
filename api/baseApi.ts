const BASEURL = process.env.NEXT_PUBLIC_API_URL;
const DEFAULT_TIMEOUT = 5000; // Default timeout 5 секунд
import Cookies from "js-cookie";


export class BaseApi {
    baseUrl: string = '/';


    constructor(baseUrl: string, token: string) {
        this.baseUrl = baseUrl;
    }

    private static async request(
        method: string,
        endpoint: string,
        params: any = {},
        timeout: number = DEFAULT_TIMEOUT
    ): Promise<any> {
        endpoint = endpoint.replace(/^\//, '');
        let locale = 'mn'
        if (window && typeof window !== 'undefined') {
            const pathSegments = window.location.pathname.split('/').filter(Boolean);
            const [paramLocale] = pathSegments;
            locale = paramLocale
        }
        const url = `${BASEURL}/${endpoint}`;
        const token = Cookies.get("authToken");

        const options: any = {
            method,
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {})
            },
        };

        const isFileUpload = params instanceof File || params instanceof Blob;

        if (isFileUpload) {
            const formData = new FormData();
            formData.append('file', params);

            for (const [key, value] of Object.entries(params)) {
                if (key !== 'file') {
                    formData.append(key, value);
                }
            }

            options.body = formData;
        } else {
            if (method !== 'GET' && params) {
                options.body = JSON.stringify(params);
                options.headers['Content-Type'] = 'application/json';
            }
        }
        options.headers['Accept-Language'] = locale


        // Timeout handling
        const controller = new AbortController();
        const signal = controller.signal;
        options.signal = signal;

        const timeoutId = setTimeout(() => {
            controller.abort(); // Abort request if timeout is reached
        }, timeout);

        try {
            const finalUrl = method === 'GET' && params
                ? `${url}?${new URLSearchParams(params).toString()}`
                : url;

            const response: Response = await fetch(finalUrl, options);

            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.message) {
                    throw `${errorData.message}`;
                } else {
                    throw `Error: ${response.status} - Unknown error`;
                }
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
            clearTimeout(timeoutId); // Clear the timeout on request completion
        }
    }


    static async _get(endpoint: string, params = {}, timeout?: number): Promise<any> {
        return this.request('GET', endpoint, params, timeout);
    }

    static async _post(endpoint: string, params = {}, timeout?: number): Promise<any> {
        return this.request('POST', endpoint, params, timeout);
    }

    static async _put(endpoint: string, params = {}, timeout?: number): Promise<any> {
        return this.request('PUT', endpoint, params, timeout);
    }

    static async _delete(endpoint: string, params = {}, timeout?: number): Promise<any> {
        return this.request('DELETE', endpoint, params, timeout);
    }
}
