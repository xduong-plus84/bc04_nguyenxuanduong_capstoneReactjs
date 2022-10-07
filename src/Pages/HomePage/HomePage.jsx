import React from "react";
import HomePage_Carousel from "./HomePage_Carousel";
import HomePage_MovieList from "./HomePage_MovieList";
import HomePage_TabRap from "./HomePage_TabRap";

export default function HomePage() {
  return (
    <div>
      <HomePage_Carousel />
      <HomePage_MovieList />
      <HomePage_TabRap />
    </div>
  );
}
