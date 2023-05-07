"use client";

import { useState, useEffect } from "react";

const WelcomeScreen = () => {
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWelcome(false);
    }, 1000);
  }, []);

  return (
    <section className={`welcomeScreen ${!welcome ? "hidden" : ""}`}></section>
  );
};

export default WelcomeScreen;
