import { jsonRequest } from "./utils";
const constant = "/9/service_user";
import { stringify } from "querystring";

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
