import {connectToDb} from './_connector';

export default async (req, res) => {
  const db = await connectToDb();

  if (req.body !== '' && req.body.link !== undefined && req.body.link !== '') {
    const entry = await db.db('links_db').collection('links_collection').insertOne({link: req.body.link});
    res.statusCode = 201;
    return res.json({ short_link: `the-big-short.vercel.app/r/${entry.insertedId}`});
  }

  res.statusCode = 409;
  res.json({error: 'no_link_found', error_description: 'No link found'});
}
