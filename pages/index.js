import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
// import React, { useEffect, useState } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://graduation.apps.binus.ac.id/wp-content/uploads/graduation/photo_profile/1026/2201751783.jpg?t=1666635220",
//     address: "Address 1, 12345 City 1",
//     description: "This os a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://graduation.apps.binus.ac.id/wp-content/uploads/graduation/photo_profile/1026/2201751783.jpg?t=1666635220",
//     address: "Address 2, 12345 City 2",
//     description: "This is a second meetup!",
//   },
//   {
//     id: "m3",
//     title: "A Third Meetup",
//     image:
//       "https://graduation.apps.binus.ac.id/wp-content/uploads/graduation/photo_profile/1026/2201751783.jpg?t=1666635220",
//     address: "Address 3, 12345 City 3",
//     description: "This is a third meetup!",
//   },
// ];

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups]=useState([]);

  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, [])
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name='description'
          content='browse hugh list of hughly active meetups!'
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const req = context.req
//   const res = context.res;
//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   };
// }

export const getStaticProps = async () => {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://root:Tg7SQg3Vw6hJZfvg@cluster0.qet7136.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
