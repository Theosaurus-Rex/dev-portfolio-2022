import Image from "next/image";
export const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col space-y-8 shadow-md">
      <Image
        src={project.img}
        alt="Placeholder"
        layout="fill"
      />
      <p>{project.stack}</p>
      <a href="">{project.title}</a>
      <p>{project.description}</p>
    </div>
  );
};
