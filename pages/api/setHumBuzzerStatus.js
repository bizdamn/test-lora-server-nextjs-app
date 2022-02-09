import nc from 'next-connect';
import Organisation from '../../models/Organisation';
import db from '../../utils/db';

const handler = nc();


handler.post(async (req, res) => {
  await db.connect();
  const org = await Organisation.updateOne({
    name:'Marelli India', $set: { FF01_I05_status: req.body.buzzerStatus}
  });
  await db.disconnect();
  res.send({ message: 'User Updated Successfully' });

});

export default handler;
