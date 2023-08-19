require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: process.env.EMAIL, // Replace with your Gmail address
    pass: process.env.PASS, // Replace with your Gmail password (or an app-specific password)
  },
});

// Route to handle sending emails
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body);

  const mailOptions = {
    from: `name: ${name}`, // The address shown in the recipient's inbox
    to: 'miguelamoreno1414@gmail.com',   // Your email address where you want to receive the email
    text: `Message: ${message}`,
    replyTo: email,                 // The sender's email address for reply
  };


  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});