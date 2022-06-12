import type { NextPage } from "next";
import { About } from "../components/about";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";

const Home: NextPage = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default Home;
