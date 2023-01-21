export const About = () => {
  return (
    <div className="py-20 px-10 mx-auto flex flex-col items-center content-center space-y-10 w-1/2">
      <h2 className="font-semibold font-raleway text-slate-900 text-5xl">
        About
      </h2>
      <p className="font-light font-inter text-slate-500 text-xl">
        Currently a Consultant at{" "}
        <a
          className="text-purple-500 hover:underline"
          href="https://alembic.com.au/"
        >
          Alembic
        </a>{" "}
        working with Elixir, Phoenix LiveView and Typescript. Coder Academy
        alumni, artist/illustrator and dinosaur enthusiast.
      </p>

      <p className="font-light font-inter text-slate-500 text-xl">
        I&apos;m actively working to learn more about web design to round out my
        skills and make the switch from development to design. In March,
        I&apos;ll be undertaking the{" "}
        <a
          className="text-purple-500 hover:underline"
          href="https://dribbble.com/courses/product-design"
        >
          Dribbble Certified Product Design course
        </a>{" "}
        in order to better understand the entire design process, from research
        to end result.
      </p>
    </div>
  );
};
