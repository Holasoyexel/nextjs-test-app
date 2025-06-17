import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
  const { title, image, description } = data;
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (error) {
      console.log(e, "ERROR");
    }
  };
  return (
    <div>
      {
        <div className="event_single_page">
          <Image width={1000} height={500} alt={title} src={`${image}`} />
          <h2>{title}</h2>
          <p>{description}</p>
          <form onSubmit={onSubmit} className="email_registration">
            <label htmlFor="">Get registered for this event!</label>
            <input
              ref={inputEmail}
              placeholder="Please input your email here "
              type="email"
              id="email"
            />
            <button type="submit">Submit</button>
            <p>{message}</p>
          </form>
        </div>
      }
    </div>
  );
};

export default SingleEvent;
