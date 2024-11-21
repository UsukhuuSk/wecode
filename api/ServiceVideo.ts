import { jsonRequest } from "./utils";
const constant = "/9/ref_videos";
export const getVideo = async ({ id }: any) => {
  try {
    const response = await jsonRequest({
      endpoint: `${constant}/${id}`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};