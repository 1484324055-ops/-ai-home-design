import nodemailer from "nodemailer";

interface FeedbackEmailPayload {
  username: string;
  content: string;
  contact?: string | null;
  source?: string | null;
  createdAt: Date;
}

const getTransportConfig = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.FEEDBACK_NOTIFY_EMAIL;

  if (!host || !port || !user || !pass || !from || !to) {
    return null;
  }

  return { host, port, user, pass, from, to };
};

export const sendFeedbackNotificationEmail = async (payload: FeedbackEmailPayload) => {
  const config = getTransportConfig();

  if (!config) {
    return { delivered: false, skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  const submittedAt = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(payload.createdAt);

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    subject: `AI Home Design 新反馈 - ${payload.username}`,
    text: [
      `用户：${payload.username}`,
      `提交时间：${submittedAt}`,
      `来源：${payload.source || "homepage"}`,
      `联系方式：${payload.contact || "未填写"}`,
      "",
      "反馈内容：",
      payload.content,
    ].join("\n"),
  });

  return { delivered: true, skipped: false };
};
