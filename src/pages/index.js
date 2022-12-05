import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
