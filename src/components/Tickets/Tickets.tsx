import React from "react";
import styles from "./tickets.module.css";

type TicketsType = {
  tickets: Array<any>;
};

const Tickets: React.FC<TicketsType> = ({ tickets }) => {
  return (
    <div className={styles.wrapper}>
      {tickets.map((ticket) => {
        return (
          <div key={ticket.id} className={styles.ticket}>
            <p>{`Renginys: ${ticket.title}`} </p>
            <p>{`Kaina: ${ticket.ticketPrice}`} </p>
            {/* Fix the typo here */}
            <p>{`Vieta: ${ticket.toLocation}`} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Tickets;
