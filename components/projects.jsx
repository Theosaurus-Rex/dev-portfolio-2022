import Image from "next/image";
import deepImagePic from "/public/img/deep_image.png";
import retroRocketPic from "/public/img/retro_rocket.png";
import reactRoguePic from "/public/img/react_rogue.png";
import jooglePic from "/public/img/joogle.png";

const projects = [
  {
    title: "Deep Image AI Generator",
    description:
      "An artificial-intelligence image generator that creates a photograph based on a text prompt.",
    stack: ["JavaScript", "Tailwind"],
    live_link: "https://deep-image.netlify.app/",
    code_link: "https://github.com/Theosaurus-Rex/text-to-image-hackathon",
    img: deepImagePic,
    img_alt: "DeepAI project screenshot",
  },
  {
    title: "Retro Rocket",
    description:
      "A two-sided marketplace for collectors of retro and vintage toys and games.",
    stack: ["Ruby", "Ruby on Rails", "PostgresQL", "Tailwind"],
    live_link: "https://retro-rocket.herokuapp.com/",
    code_link: "https://github.com/Theosaurus-Rex/retro_rocket",
    img: retroRocketPic,
    img_alt: "Retro Rocket project screenshot",
  },
  {
    title: "React Rogue",
    description: "An homage to classic roguelike games, built in React.",
    stack: ["JavaScript", "React"],
    live_link: "https://react-rogue.netlify.app/",
    code_link: "https://github.com/Theosaurus-Rex/react-rogue",
    img: reactRoguePic,
    img_alt: "React Rogue project screenshot",
  },
  {
    title: "Joogle Search Engine",
    description: "Think Google search, but made for dads with terrible humor.",
    stack: ["JavaScript", "React"],
    live_link: "https://joogle-search.netlify.app/",
    code_link: "https://github.com/Theosaurus-Rex/dad-jokes-react",
    img: jooglePic,
    img_alt: "React Rogue project screenshot",
  },
];

export const Projects = () => {
  return (
    <div id="my-work" className="flex flex-col items-center">
      <div className="bg-[#F9F5FF] w-full">
        <h2 className="font-semibold font-raleway text-medium-purple-900 text-5xl py-16 text-center">
          Work
        </h2>
      </div>
      <div className="bg-project-gallery-pattern bg-no-repeat bg-top bg-cover">
        <ul
          role="list"
          className="px-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <li
              key={project.title}
              className="col-span-1 flex flex-col text-left bg-white rounded-lg shadow divide-y divide-slate-200"
            >
              <div className="flex-1 flex flex-col p-8">
                <Image
                  src={project.img}
                  alt={project.img_alt}
                  layout="responsive"
                />
                <h3 className="mt-6 text-slate-900 text-2xl font-medium hover:underline hover:text-medium-purple-600">
                  <a href={project.code_link}>{project.title}</a>
                </h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dt className="sr-only">Description</dt>
                  <dd className="text-slate-500 text-base">
                    {project.description}
                  </dd>
                  <dt className="sr-only">Tech Stack</dt>
                  <dd className="mt-3 space-x-1 flex flex-wrap">
                    {project.stack.map((tech) => (
                      <div
                        key={tech}
                        className="my-1 px-2 py-1 text-medium-purple-800 text-xs font-medium bg-medium-purple-200 rounded-full w-fit"
                      >
                        {tech}
                      </div>
                    ))}
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
