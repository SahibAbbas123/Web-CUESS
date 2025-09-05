import nodemailer from "nodemailer";
import { ENV } from "./env";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ENV.GMAIL_USER,
    pass: ENV.GMAIL_APP_PASSWORD
  }
});

export async function sendMembershipEmail(
  params: { name: string; email: string }
) {
  const { name, email } = params;

  await transporter.sendMail({
    from: `"CUESS" <${ENV.GMAIL_USER}>`,
    to: email,
    subject: "Thanks for applying to CUESS 🎉",
    html: `
      <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial">
        <h2>Hi ${name},</h2>
        <p>Thanks for applying to <strong>CUESS</strong>! We’ll review your application and get back to you soon.</p>
        <p>— CUESS Team</p>
      </div>
    `
  });
}
// TEMP: call once to check SMTP creds
export async function verifyEmailTransport() {
  try {
    const ok = await transporter.verify();
    console.log("SMTP verify:", ok ? "OK" : "FAILED");
  } catch (e) {
    console.error("SMTP verify error:", e);
  }
}