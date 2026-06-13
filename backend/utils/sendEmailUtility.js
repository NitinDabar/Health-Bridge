import nodemailer from "nodemailer";

const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
  console.log(EmailTo, EmailText, EmailSubject);
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let mail = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: EmailTo,
      subject: EmailSubject,
      text: "Hello world?",
      html: EmailText,
    });
    console.log("send mail success");
  } catch (error) {
    console.log(error);
  }
};
export default SendEmailUtility;
