import { useState, useEffect } from "react";
import { getGifts } from "../utils";

const FirstChallenge = () => {
  const gifts = getGifts();

  return (
    <div>
      <h1> First Challenge </h1>
      <ul>
        {Object.entries(gifts).map(([key, value]) => (
          <li key={key}> {key} {value} </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstChallenge;
