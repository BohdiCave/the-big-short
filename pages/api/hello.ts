// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {connectToDb} from './_connector';

export default async (req, res) => {
  await connectToDb();
  res.status(200).json({ name: 'John Doe' })
}
