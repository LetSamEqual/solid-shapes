import { NextResponse } from "next/server";
import { getSecret } from "../../../../aws-config";

export async function getServerSideProps() {
  const secret = await getSecret();
  const secretValue = JSON.parse(secret)[process.env.SENDGRID_API_KEY];

  return {
    props: {
      secretValue,
    },
  };
}

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(secretValue);

export async function POST(req, res) {
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
