import nc from 'next-connect';
import Organisation from '../../models/Organisation';
import db from '../../utils/db';

const handler = nc();


handler.get(async (req, res) => {
  await db.connect();
  const org = await Organisation.find({name:'Marelli India'});
  await db.disconnect();

  res.send({ FF01_I05_status:org[0].FF01_I05_status,FF01_I04_status:org[0].FF01_I04_status });

});

export default handler;
