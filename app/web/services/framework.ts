import request from "../utils/request";

export const queryFramework = async () => {
  return request<TianGong.FrameworkModel>("/api/v1/framework", {
    method: "GET",
  });
};
