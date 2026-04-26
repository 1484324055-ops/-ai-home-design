import { API_BASE_URL } from "./config";

interface RequestOptions {
  path: string;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  data?: WechatMiniprogram.IAnyObject;
}

export const request = <T>({ path, method = "GET", data }: RequestOptions) =>
  new Promise<T>((resolve, reject) => {
    wx.request({
      url: `${API_BASE_URL}${path}`,
      method,
      data,
      header: {
        "content-type": "application/json"
      },
      success: (response) => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(response.data as T);
          return;
        }

        reject(new Error(`Request failed: ${response.statusCode}`));
      },
      fail: reject
    });
  });
