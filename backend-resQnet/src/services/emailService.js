// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   secure: process.env.MAIL_SECURE === "true",
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

// async function sendEmail(to, subject, html, otp) {
//   const text = `Your resQnet verification code is ${otp}. It expires in ${process.env.OTP_EXPIRES || 300} seconds.`;
//   await transporter.sendMail({
//     from: process.env.MAIL_FROM,
//     to,
//     subject,
//     text,
//     html,
//   });
// }

// module.exports = { sendEmail };




const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(to, subject, html, otp) {
  const text = `Your ResQNet verification code is ${otp}. It expires in ${process.env.OTP_EXPIRES || 300} seconds.`;

  await resend.emails.send({
    from: process.env.MAIL_FROM,
    to: [to],
    subject: subject,
    html: html,
    text: text,
  });
}

module.exports = { sendEmail };