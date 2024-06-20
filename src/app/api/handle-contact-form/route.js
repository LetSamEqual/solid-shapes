import { NextResponse } from "next/server";
const aws = require("aws-sdk");

// const { Parameters } = await (new aws.SSM())
//   .getParameters({
//     Names: ["SENDGRID_API_KEY"].map(secretName => process.env[secretName]),
//     WithDecryption: true,
//   })
//   .promise();

// Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
