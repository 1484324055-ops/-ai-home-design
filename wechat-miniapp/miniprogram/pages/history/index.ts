import {
  deleteLocalHistory,
  formatHistoryTime,
  getLocalHistories,
  setPendingHistory
} from "../../utils/history";
import type { LocalHistoryRecord } from "../../utils/history";

type HistoryViewRecord = LocalHistoryRecord & {
  displayTime: string;
};

Page({
  data: {
    histories: [] as HistoryViewRecord[]
  },

  onShow() {
    this.refreshHistories();
  },

  refreshHistories() {
    const histories = getLocalHistories().map((record) => ({
      ...record,
      displayTime: formatHistoryTime(record.createdAt)
    }));

    this.setData({ histories });
  },

  copyRecord(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    const record = (this.data.histories as HistoryViewRecord[]).find((item) => item.id === id);

    if (!record) {
      return;
    }

    wx.setClipboardData({
      data: record.chinese,
      success: () => {
        wx.showToast({
          title: "已复制",
          icon: "success"
        });
      }
    });
  },

  loadRecord(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    const record = (this.data.histories as HistoryViewRecord[]).find((item) => item.id === id);

    if (!record) {
      return;
    }

    setPendingHistory(record);
    wx.navigateBack({
      fail: () => wx.redirectTo({ url: "/pages/index/index" })
    });
  },

  deleteRecord(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    const record = (this.data.histories as HistoryViewRecord[]).find((item) => item.id === id);

    if (!record) {
      return;
    }

    wx.showModal({
      title: "删除历史方案",
      content: `确定删除“${record.title}”吗？`,
      confirmText: "删除",
      confirmColor: "#ef4444",
      success: (result) => {
        if (!result.confirm) {
          return;
        }

        deleteLocalHistory(id);
        this.refreshHistories();
        wx.showToast({
          title: "已删除",
          icon: "success"
        });
      }
    });
  },

  goHome() {
    wx.navigateBack({
      fail: () => wx.redirectTo({ url: "/pages/index/index" })
    });
  }
});
