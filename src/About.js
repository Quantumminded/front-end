import React from "react";

// IMPORT COMPONENT

import TeamSection from "./Components/About/TeamSection";
import AboutUsSection from "./Components/About/AboutUsSection";

function About() {
  return (
    <div className="bg-b2">
      <AboutUsSection />
      <TeamSection />
    </div>
  );
}

export default About;
