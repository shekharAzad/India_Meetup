import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

function HomePage(props) {

  return <Fragment>
    
    <Head>
      <title>India Meetup</title>
      <meta
          name="description"
          Content="Browse a huge list of highly active India meetups!"
        />
    </Head>
    <MeetupList meetups={props.meetups} />
    {/* <Scroll /> */}
  </Fragment>
  
}

export async function getStaticProps() {
 
  // fetch data from an API

const client = await MongoClient.connect(
      'mongodb+srv://chandrashekhar:Azad2508@cluster0.sjcyxze.mongodb.net/MeetupsDb?retryWrites=true&w=majority'
    );
    
    const db = client.db();

    const meetupsCollection = db.collection('MeetupsDb');

  const meetups = await meetupsCollection.find().toArray();
  console.log("Meetups",meetups)

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
}

export default HomePage;
