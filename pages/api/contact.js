import nextConnect from 'next-connect';

const handler = nextConnect();

handler.post(async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send('Missing fields');
  }

  res.status(201).json({ message: 'Success' });
});

export default handler;
