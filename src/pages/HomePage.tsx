import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import SliderSection from "../components/SliderSection/SliderSection";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import InfoSection from "../components/InfoSection/InfoSection";
import CardList from "../components/CardList/CardList";
import ConnectSection from "../components/ConnectSection/ConnectSection";
import CtaSection from "../components/CtaSection/CtaSection";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <SliderSection />
    <QuoteSection />
    <InfoSection />


    <h2>
      <Link to="/cards" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
        Карточки
      </Link>
    </h2>

    <ConnectSection />
    <CtaSection />
  </>
);

export default HomePage;