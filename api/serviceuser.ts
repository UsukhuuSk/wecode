import { jsonRequest } from "./utils";
const constant = "/9/service_user";

export const usersList = async ({ params }: any) => {
  try {
    const response = await jsonRequest({
      //   endpoint: `/list${constant}?${stringify(params)}`,
      endpoint: `/list${constant}?${params}`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
export const getBlogDetail = async ({
  id,
  params,
}: {
  id: string;
  params: any;
}) => {
  try {
    const response = await jsonRequest({
      //   endpoint: `/list${constant}?${stringify(params)}`,
      endpoint: `/9/service_news/${id}?${params}`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const blogList = async () => {
  try {
    const response = await jsonRequest({
      endpoint: `/list/9/service_news`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.error("Error fetching blog:", error);
  }
};
// export const getFile = async (id: any) => {
//   try {
//     const response = await jsonRequest({
//       endpoint: `/file/${id}`,
//       method: "GET",
//     });
//     return response;
//   } catch (error) {
//     console.error("Error fetching file:", error);
//   }
// };

export const getFile = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/file/${id}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error("Error fetching file:", error);
    return null;
  }
};
