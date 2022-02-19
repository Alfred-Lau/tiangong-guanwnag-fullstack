import request from "../utils/request";

export const queryFramework = async () => {
  return request("/api/v1/framework", {
    method: "GET",
  });
};
