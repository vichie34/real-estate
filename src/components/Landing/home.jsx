import React from "react";
import Hero from "./hero";
import Logocarosel from "./logocarosel";
import Listings from "./listings";
import WhyTrust from "./blog";
import PersonalBrand from "./personalbrand";
import PartnerDevelopers from "./partners";
import MarketInsights from "./marketsurvey";
import HowItWorks from "./howitworks";
import Pricing from "./pricingcard";
import Footer from "./footer";

const LandingPageHeader = () => {
  return (
    <div>
      <Hero />
      <Logocarosel />
      <Listings />
    </div>
  );
};

const LandingPageContent = () => {
  return (
    <div>
      <WhyTrust />
      <PersonalBrand />
      <PartnerDevelopers />
      <MarketInsights />
      <HowItWorks />
      <Pricing />
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <LandingPageHeader />
      <LandingPageContent />
      <Footer />
    </div>
  );
}

