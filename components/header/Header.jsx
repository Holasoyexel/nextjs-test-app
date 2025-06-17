import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="topNavWrapper">
        <div className="topNav">
          <Image
            alt="logo"
            src={"/images/descarga.jpg"}
            width={150}
            height={100}
          ></Image>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about_us">About us</Link>
              </li>
            </ul>
            <img />
          </nav>
        </div>
        <p className="title">Eu laborum</p>
      </div>
    </header>
  );
};

export default Header;
