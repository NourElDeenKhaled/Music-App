import React from "react";

const EventCard = ({ img, title }) => {
  return (
    <>
      <img src={img} alt="" />
      <div className="event-details">
        <p>{title}</p>
        <button>Buy Ticket</button>
      </div>
    </>
  );
};

export default EventCard;
