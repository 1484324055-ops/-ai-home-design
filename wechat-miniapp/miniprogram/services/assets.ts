import { request } from "./api";
import { ENABLE_REMOTE_ASSETS } from "./config";
import { AssetLibrary, fallbackLibrary } from "../utils/data";

interface AssetsResponse {
  library?: AssetLibrary;
  message?: string;
}

export const loadAssetLibrary = async () => {
  if (!ENABLE_REMOTE_ASSETS) {
    return {
      library: fallbackLibrary,
      message: "",
      source: "local"
    };
  }

  try {
    const response = await request<AssetsResponse>({ path: "/api/assets" });
    return {
      library: response.library || fallbackLibrary,
      message: response.message || "",
      source: response.library ? "remote" : "fallback"
    };
  } catch (error) {
    console.error("Load miniapp assets failed:", error);
    return {
      library: fallbackLibrary,
      message: "暂时无法连接线上资产库，当前使用小程序内置示例资产。",
      source: "fallback"
    };
  }
};
