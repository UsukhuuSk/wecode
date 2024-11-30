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
        const url = `${BASEURL}/${endpoint}`;
        const token =  Cookies.get("authToken");

        const options: RequestInit = {
            method, 
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { Authorization: `Bearer ${token}` } : {})
            },
        };
        console.log('token is here', token)
        // GET хүсэлтийн хувьд query string болгоно
        const finalUrl = method === 'GET' && params
            ? `${url}?${new URLSearchParams(params).toString()}`
            : url;
        if (method !== 'GET' && params) {
            options.body = JSON.stringify(params);
        }

        // Timeout механизмыг хэрэгжүүлэх
        const controller = new AbortController();
        const signal = controller.signal;
        options.signal = signal;

        const timeoutId = setTimeout(() => {
            controller.abort(); // Хугацаа дуусвал хүсэлтийг цуцална
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
