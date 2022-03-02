const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: 'dekhlo30@gmail.com',
        pass: process.env.SMTP_PASSWORD,
    },
    // service: process.env.SMPT_SERVICE,
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: 'Rachit Khurana <dekhlo30@gmail.com>',
    // from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
