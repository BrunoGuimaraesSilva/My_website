import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/database';

export default async function getLog(_: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await query(`SELECT * FROM log`);
    return res.json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}