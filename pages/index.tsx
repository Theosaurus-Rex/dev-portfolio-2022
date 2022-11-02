import type { NextPage } from "next";
import Script from "next/script";

import { About } from "../components/about";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";

const Home: NextPage = () => {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>

      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default Home;
