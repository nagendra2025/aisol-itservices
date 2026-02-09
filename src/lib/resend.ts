import { Resend } from "resend";
import { validateEnv } from "./env";

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (!resendClient) {
    const env = validateEnv();
    resendClient = new Resend(env.RESEND_API_KEY);
  }
  return resendClient;
}

interface ContactEmailData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  serviceInterest?: string;
}

interface CareersEmailData {
  name: string;
  email: string;
  message: string;
  linkedinUrl?: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const resend = getResendClient();
  const env = validateEnv();

  const serviceInfo = data.serviceInterest
    ? `\nService Interest: ${data.serviceInterest}`
    : "";
  const companyInfo = data.company ? `\nCompany: ${data.company}` : "";
  const phoneInfo = data.phone ? `\nPhone: ${data.phone}` : "";

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    ${companyInfo ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
    <p><strong>Email:</strong> ${data.email}</p>
    ${phoneInfo ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
    ${serviceInfo ? `<p><strong>Service Interest:</strong> ${data.serviceInterest}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `;

  const textContent = `
New Contact Form Submission

Name: ${data.name}
${companyInfo ? `Company: ${data.company}\n` : ""}Email: ${data.email}
${phoneInfo ? `Phone: ${data.phone}\n` : ""}${serviceInfo ? `Service Interest: ${data.serviceInterest}\n` : ""}
Message:
${data.message}
  `;

  return await resend.emails.send({
    from: env.FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `New Contact Form: ${data.name}`,
    html: htmlContent,
    text: textContent,
  });
}

export async function sendCareersEmail(data: CareersEmailData) {
  const resend = getResendClient();
  const env = validateEnv();

  const linkedinInfo = data.linkedinUrl
    ? `\nLinkedIn: <a href="${data.linkedinUrl}">${data.linkedinUrl}</a>`
    : "";

  const htmlContent = `
    <h2>New Careers Interest Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${linkedinInfo ? `<p><strong>LinkedIn:</strong> <a href="${data.linkedinUrl}">${data.linkedinUrl}</a></p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `;

  const textContent = `
New Careers Interest Submission

Name: ${data.name}
Email: ${data.email}
${linkedinInfo ? `LinkedIn: ${data.linkedinUrl}\n` : ""}
Message:
${data.message}
  `;

  return await resend.emails.send({
    from: env.FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `New Careers Interest: ${data.name}`,
    html: htmlContent,
    text: textContent,
  });
}





