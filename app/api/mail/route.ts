import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });
    const mailOption = {
      //demomailtrap.com default domain but can only send to email you sign in on mailtrap
      //to use custom domain and send to other email need to verify domain on mailtrap
      from: "info@demomailtrap.com",
      to: process.env.SEND_TO_EMAIL,
      subject: body.subject,
      html: `
      <p>
    ${body.message}
      </p>
      
      `,
    };
    await transporter.sendMail(mailOption);

    return NextResponse.json(body);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 501 });
  }
};
