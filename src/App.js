import React from "react";
import Nav from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

export default function App() {
  // <Hero />
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Nav />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
