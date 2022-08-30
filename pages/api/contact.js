import nextConnect from 'next-connect';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const handler = nextConnect();

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

handler.post(async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send('Missing fields');
  }

  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Contact Form: ${subject}`,
    text: message,
    html: `
      <p>${message}</p>
      <b>${name}</b>
      </br>
      <em>${email}</em>
    `,
  });

  res.status(201).json({
    message: info.accepted
      ? '✔️ Your message was sent successfully. Thank you!'
      : '❌ There was an error sending your message',
    success: info.accepted,
  });
});

export default handler;
