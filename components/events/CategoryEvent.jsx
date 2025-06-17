import React from "react";
import Image from "next/image";
import Link from "next/link";
const CategoryEvent = ({ data, id }) => {
  return (
    <div className="category_events">
      <h1>Events in {id} </h1>
      <div className="content">
        {data.map((event) => (
          <Link
            className="card"
            key={event.id}
            href={`${event.city}/${event.id}`}
          >
            <Image
              width={300}
              height={300}
              alt={event.title}
              src={`${event.image}`}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryEvent;
