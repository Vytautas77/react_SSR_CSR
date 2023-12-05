import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Tickets from "@/components/Tickets/Tickets";
import React, { useEffect } from "react";

type IndexType = {
  tickets: Array<any>;
};

const Index: React.FC<IndexType> = ({ tickets }) => {
  return (
    <div>
      <Header />
      <Tickets tickets={tickets} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3001/tickets");
    const tickets = await response.json();

    return {
      props: {
        tickets: tickets.tickets,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        tickets: [],
      },
    };
  }
}

export default Index;
