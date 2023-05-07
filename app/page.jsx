import { Inter } from "next/font/google";
import styles from "./home.module.css";
import Hero from "./Components/home/Hero";
import EventSpice from "./Components/home/EventSpice/EventSpice";
import TransitionQuote from "./Components/home/TransitionQuote";
import Features from "./Components/home/Features";
import Classes from "./Components/home/Classes";
import Founders from "./Components/home/Founders";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="position-relative">
      <Hero />
      <Founders />
      <EventSpice />
      {/* Menu and Customizable */}
      <div className={styles.half_pill__down}></div>
      <TransitionQuote />
      <Features />
      <Classes />
      {/* From the owner */}
    </main>
  );
}
