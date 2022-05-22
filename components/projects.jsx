import Image from "next/image";
import deepImagePic from '/public/img/deep_image.png'

const projects = [
  {
    title: "Deep Image AI Generator",
    description:
      "An artificial-intelligence image generator that creates a photograph based on a text prompt.",
    stack: ["JavaScript", "Tailwind"],
    live_link: "https://deep-image.netlify.app/",
    code_link: "https://github.com/Theosaurus-Rex/text-to-image-hackathon",
    img: deepImagePic,
    img_alt: "DeepAI project screenshot"
  },
];

export const Projects = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {projects.map((project) => (
        <li
          key={project.title}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <Image src={project.img} alt={project.img_alt} layout='responsive'/>
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {project.title}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Description</dt>
              <dd className="text-gray-500 text-sm">{project.description}</dd>
              <dt className="sr-only">Tech Stack</dt>
              <dd className="mt-3 space-x-1">
                {project.stack.map((tech) => 
                  <span key={tech} className="px-2 py-1 text-medium-purple-800 text-xs font-medium bg-medium-purple-200 rounded-full">
                    {tech}
                  </span>
                )}
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={project.live_link}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <span className="ml-3">View Live</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={project.code_link}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <span className="ml-3">View Code</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
