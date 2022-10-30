// /api/new-meetup/
// /POST /api/new-meetup

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://root:Tg7SQg3Vw6hJZfvg@cluster0.qet7136.mongodb.net/?retryWrites=true&w=majority"
      
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup insterted!" });
  }
};

export default handler;
