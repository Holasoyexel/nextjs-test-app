import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((event) => (
        <Link className="card" key={event.id} href={`/events/${event.id}`}>
          <Image
            width={300}
            height={300}
            alt={event.title}
            src={`${event.image}`}
          />
          <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
