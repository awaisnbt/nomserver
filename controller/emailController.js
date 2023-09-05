const emailService = require("../service/emailService");
const Message = require("../models/messageModel");

const sendContactEmail = async (req, res) => {
  const { name, number, email, message } = req.body;
  const recipientEmail = "awaisnbt@gmail.com"; // Replace with recipient's email
  const subject = "New Contact Form Submission";
  const text = `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`;
  const html = `<p>Name: ${name}</p><p>Number: ${number}</p><p>Email: ${email}</p><p>Message: ${message}</p>`;

  try {
    // Save the message to database
    const newMessage = new Message({
      name,
      number,
      email,
      message,
    });
    await newMessage.save();

    // Send the email
    await emailService.sendEmail(recipientEmail, subject, text, html);

    res.json({ message: "Email sent successfully"});
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};

module.exports = {
  sendContactEmail,
};
