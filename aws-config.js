import AWS from "aws-sdk";

const client = new AWS.SecretsManager({
  region: "ap-southeast-2",
});

export async function getSecret() {
  const { SecretString } = await client
    .getSecretValue({
      SecretId: "SENDGRID_API_KEY",
    })
    .promise();

  return SecretString;
}
