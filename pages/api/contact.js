import nextConnect from 'next-connect';
import nodemailer from 'nodemailer';

const handler = nextConnect();

handler.post(async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send('Missing fields');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
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
