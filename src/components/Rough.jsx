import { useState } from "react";
import React from "react";
import "../index.css";

const Rough = () => {
  return (
    <>
      <h1 className="bg-blue-400 p-8 font-serif text-6xl text-center mb-2.5">
        MovieFlex
      </h1>
      <div className="flex flex-wrap justify-around m-auto w-[80%] ">
        <Card title="Suzume" />
        <Card title="Weathering With You" />
        <Card title="A Silent Voice" />
        <Card title="Your Name" />
        <Card title="Suzume" />
        <Card title="Wethering With You" />
        <Card title="A Silent Voice" />
        <Card title="Your Name" />
        <Card title="Suzume" />
        <Card title="Wethering With You" />
      </div>
    </>
  );
};

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="p-4 w-[18rem] flex flex-col gap-2 rounded-lg mb-2.5 shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <div className="w-auto h-32 mt-4 bg-blue-400 rounded"></div> {/* image */}
      <h2 className="text-center font-bold">{title}</h2>
      <h3>Rating</h3>
      <h3>Description</h3>
      <h3>Director</h3>
      <button
        className="border-0 bg-blue-600 p-1 text-white hover:bg-blue-800 rounded cursor-pointer"
        onClick={() => setHasLiked(!hasLiked)}
      >
        {hasLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Rough;
