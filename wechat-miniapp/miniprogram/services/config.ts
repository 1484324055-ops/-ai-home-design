export const API_BASE_URL = "https://ai-home-design-wine.vercel.app";

// Reference images are hosted by the existing Vercel site, so they do not increase
// the WeChat mini program package size.
export const ENABLE_REMOTE_ASSETS = true;
export const REFERENCE_IMAGE_BASE_URL = `${API_BASE_URL}/reference-images`;
