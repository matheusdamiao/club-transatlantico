import * as React from "react";
import { Script, type HeadFC, type PageProps } from "gatsby";
import HeroSectionHome from "../components/heroSectionHome";
import ClubSectionHome from "../components/clubSectionHome";
import AboutSectionHome from "../components/aboutSectionHome";
import FormSection from "../components/formSection";
import SocialSection from "../components/socialSection";
import FooterSection from "../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <HeroSectionHome />
      <ClubSectionHome />
      <AboutSectionHome />
      <FormSection />
      <SocialSection />
      <FooterSection />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
