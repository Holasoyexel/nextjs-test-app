import Link from "next/link";
import Image from "next/image";

import React from "react";

const HomePage = ({ data }) => (
  <div className="home_body">
    {data?.map((event) => (
      <Link className="card" key={event.id} href={`events/${event.id}`}>
        <div className="image">
          <Image
            width={300}
            height={300}
            alt={event.title}
            src={`${event.image}`}
          />
        </div>
        <div className="content">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default HomePage;
