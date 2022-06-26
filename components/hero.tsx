import Link from "next/link";
import Image from "next/image";
export const Hero = () => {
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="col-start-1 col-span-1 flex flex-col space-y-4">
        <p className="text-medium-purple-600 text-sm font-inter border-4 border-slate-50 w-fit rounded-xl px-2">
          Hi, I&apos;m Theo Harris
        </p>
        <h1 className="text-slate-900 font-semibold text-6xl font-raleway">
          Web Developer and Visual Artist from Sydney, Australia.
        </h1>
        <p className="text-xl text-slate-500 font-light font-inter">
          Passionate about working in the intersection of visual communication
          and the web. I believe in creating digital experiences that are both
          delightful and accessible.
        </p>
        <a
          href=""
          className="font-inter bg-medium-purple-600 hover:bg-medium-purple-700 text-white px-4 py-2 rounded-md w-fit"
        >
          See My Work
        </a>
      </div>
      <div className="col-start-2 col-span-1 w-full drop-shadow-2xl">
        <Image
          src={"/img/placeholder_hero.png"}
          alt={"Cartoon character with a VR headset and controllers"}
          layout="responsive"
          height="80"
          width="100"
        />
      </div>
    </div>
  );
};
