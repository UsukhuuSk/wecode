// import Cookies from "js-cookie";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchOptions<T = any> {
  endpoint: string;
  params?: string;
  method?: HttpMethod;
  body?: T;
  headers?: Record<string, string>;
}
const BASEURL = process.env.NEXT_PUBLIC_API_URL;

export const jsonRequest = async <TResponse, TBody = any>({
  endpoint,
  method = "GET",
  body,
  headers = {},
}: FetchOptions<TBody>): Promise<TResponse> => {
  // Set up fetch options
  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  // If the method is not GET, include the body
  if (method !== "GET" && body) {
    fetchOptions.body = JSON.stringify(body);
  }

  // Make the fetch call
  const response = await fetch(BASEURL + `${endpoint}`, fetchOptions);

  if (!response.ok) {
    const error = await response.text();
    // throw new Error(`Fetch error: ${response.status} - ${error}`);
    return JSON.parse(error) as TResponse;
  } else {
    return (await response.json()) as TResponse;
  }
};
export const jsonRequestWithToken = async <TResponse, TBody = any>({
  endpoint,
  method = "GET",
  body,
  headers = {},
}: FetchOptions<TBody>): Promise<TResponse> => {
  //   const token = Cookies.get("auth-token");
  // Set up fetch options
  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
      ...headers,
    },
  };

  // If the method is not GET, include the body
  if (method !== "GET" && body) {
    fetchOptions.body = JSON.stringify(body);
  }

  // Make the fetch call
  const response = await fetch(BASEURL + `${endpoint}`, fetchOptions);

  if (!response.ok) {
    const error = await response.text();
    // throw new Error(`Fetch error: ${response.status} - ${error}`);
    return JSON.parse(error) as TResponse;
  } else {
    return (await response.json()) as TResponse;
  }
};
