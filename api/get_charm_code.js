// api/get_charm_code.js

export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("Missing code");
  }

  console.log("Received code:", code);

  // You can later exchange this code for a token here

  res.status(200).send("Authorization code received. You can close this tab.");
}
