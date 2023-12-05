// import { MongoClient } from 'mongodb';

// // /api/new-meetup
// // POST /api/new-meetup

// async function handler(req, res) {
//   if (req.method === 'POST') {
//     const data = req.body;

//     const client = await MongoClient.connect(
//       'mongodb+srv://chandrashekhar:Azad2508@cluster0.sjcyxze.mongodb.net/MeetupsDb?retryWrites=true&w=majority'
//     );
    
//     const db = client.db();

//     const meetupsCollection = db.collection('MeetupsDb');

//     const result = await meetupsCollection.insertOne(data);

//     console.log('rresultdata',result);

//     client.close();

//     res.status(201).json({ message: 'LoginData inserted!' });
//   }
// }

// export default handler;
