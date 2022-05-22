import type { NextPage } from "next";
import { About } from "../components/about";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
    </>
  );
};

export default Home;
