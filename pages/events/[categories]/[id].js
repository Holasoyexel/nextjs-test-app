import React from "react";
import SingleEvent from "@/components/events/SingleEvent";

const EventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  const allPaths = allEvents.map((event) => {
    return {
      params: { categories: event.city.toString(), id: event.id.toString() },
    };
  });

  return { paths: allPaths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params?.id;
  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.find((event) => event.id === id);
  console.log(context);
  return { props: { data } };
}
