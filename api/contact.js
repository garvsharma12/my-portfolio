/* eslint-env node */
/* global process */
// Vercel Serverless Function: Send contact form email via Resend
// Requires env: RESEND_API_KEY (server-side), optional CONTACT_TO_EMAIL

import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message, subject, to } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const resend = new Resend(resendApiKey);

    const recipient = process.env.CONTACT_TO_EMAIL || to || 'garv.sharma1202@gmail.com';
    const safeSubject = subject || `New portfolio message from ${name}`;

    const text = `New portfolio message\n\nFrom: ${name} <${email}>\n\n${message}`;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: recipient,
      reply_to: email,
      subject: safeSubject,
      text,
    });

    if (error) {
      return res.status(500).json({ error: error.message || 'Failed to send email' });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Unexpected error' });
  }
}
