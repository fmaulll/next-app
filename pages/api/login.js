export default async function handler(req, res) {
  try {
    const { email, password } = req.body;

    if (email === "") return res.send(400);
    if (password === "") return res.send(400);
    console.log(email, password)
    res.status(200).json({ email, password });
  } catch (error) {
    console.log(error);
  }
}
