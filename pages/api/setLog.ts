import { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../lib/database";
import moment from "moment";
import publicIp from "public-ip";

export default async function setLog(_: NextApiRequest, res: NextApiResponse) {
  try {
    const now = moment().format("YYYY-MM-DD");
    const ip = await publicIp.v4();
    const result = await query(
      `INSERT INTO website.log (ip, horario) VALUES ('${ip}', '${now}')`
    );
    return res.json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
