import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.send("HOLA soy la API" + process.env.FIREBASE_CONNECTION);
}
