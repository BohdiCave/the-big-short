import {ObjectID} from 'mongodb';
import {connectToDb} from './_connector';

export default async (req, res) => {
  const db = await connectToDb();
  const entry = await db.db('links_db').collection('links_collection').findOne({
    _id: new ObjectID(req.query.id as string)
  });
  if (entry !== null) {
    return res.redirect(301, entry.link);
  }
  return res.redirect(301, '/');
}