import { NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");

export async function POST(req, res) {
  const sendgridApiKey = process.env.SENDGRID_API_KEY;
  if (!sendgridApiKey) {
    return res
      .status(500)
      .json({ error: "SendGrid API key is not configured" });
  }
  sgMail.setApiKey(sendgridApiKey);

  const data = await req.json();

  const { username, email, message } = data;

  const msg = {
    to: "samahenderson24@gmail.com",
    from: "samahenderson24@gmail.com",
    subject: `Someone has emailed you from Solid Shapes`,
    text: `Hello, you have a message from ${username}

    ${message}

    You can reach them at: ${email}`,
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });

  return NextResponse.json({ submitted: true });
}
