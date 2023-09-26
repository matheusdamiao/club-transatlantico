import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import HeroSectionHome from "../components/heroSectionHome";
import ClubSectionHome from "../components/clubSectionHome";
import AboutSectionHome from "../components/aboutSectionHome";
import FormSection from "../components/formSection";
import SocialSection from "../components/socialSection";
import FooterSection from "../components/footerSection";

const IndexPage: React.FC<PageProps> = () => {
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
