const FEEDBACK_STORAGE_KEY = "ai_home_design_feedback";

export type MiniappFeedback = {
  id: string;
  content: string;
  contact?: string;
  page: "home" | "batch" | "history" | "profile";
  createdAt: string;
  user?: {
    nickName: string;
    avatarUrl: string;
  };
};

const readFeedback = (): MiniappFeedback[] => {
  try {
    return (wx.getStorageSync(FEEDBACK_STORAGE_KEY) as MiniappFeedback[]) || [];
  } catch (error) {
    return [];
  }
};

export const saveMiniappFeedback = (
  feedback: Omit<MiniappFeedback, "id" | "createdAt">
): MiniappFeedback => {
  const record: MiniappFeedback = {
    ...feedback,
    id: `feedback-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString()
  };
  const nextFeedback = [record, ...readFeedback()].slice(0, 100);

  wx.setStorageSync(FEEDBACK_STORAGE_KEY, nextFeedback);

  return record;
};

export const loadMiniappFeedback = readFeedback;
