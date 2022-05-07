import Link from "next/link";
export const Hero = () => {
    return (
      <>
        <p className="text-purple-heart-500 font-medium text-sm font-inter">Hi, I&apos;m Theo Harris</p>
        <h1 className="text-gray-900 font-semibold text-6xl font-raleway">Web Developer and Visual Artist from Sydney, Australia.</h1>
        <p className="text-xl text-gray-500 font-inter">
          Passionate about working in the intersection of visual communication
          and the web. I believe in creating digital experiences that are both
          delightful and accessible.
        </p>
        <Link href="" className="font-inter">See My Work</Link>
      </>
    );
  }
