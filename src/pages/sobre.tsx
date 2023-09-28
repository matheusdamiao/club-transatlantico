import * as React from "react";
import { PageProps } from "gatsby";
import HeroSectionHome from "../components/heroSectionHome";
import ClubSectionHome from "../components/clubSectionHome";
import AboutSectionHome from "../components/aboutSectionHome";
import FormSection from "../components/formSection";
import SocialSection from "../components/socialSection";
import FooterSection from "../components/footerSection";
import HeroSectionAbout from "../components/heroSectionAbout";
import HistorySectionAbout from "../components/historySectionAbout";
import ValuesSectionAbout from "../components/valuesSectionAbout";

const Sobre: React.FC<PageProps> = () => {
  return (
    <main>
      <HeroSectionAbout />
      <HistorySectionAbout />
      <ValuesSectionAbout />
      <FormSection />
      <SocialSection />
      <FooterSection />
    </main>
  );
};

export default Sobre;
