// "use client";

import ProjectSlider from "@/components/Portfolio/ProjectSlider";

const page = async () => {
  return (
    <div className="max-w-screen-xl my-10 mx-auto justify-center grid gap-4 grid-cols-1 lg:grid-cols-3 md:gap-6 xl:gap-8 px-10 lg:px-0 ">
      <div className="max-w-sm mx-auto">
        <ProjectSlider />
      </div>
      <div className="w-full col-span-2">
        <h1 className="text-4xl font-semibold">Project name</h1>
        <ul className="my-5 flex flex-wrap gap-10 text-xl font-medium">
          <li className="bg-basicColor px-3 p-2 rounded-3xl">JavaScript</li>
          <li className="bg-basicColor px-3 p-2 rounded-3xl">ReactJS</li>
          <li className="bg-basicColor px-3 p-2 rounded-3xl">MongoDB</li>
          <li className="bg-basicColor px-3 p-2 rounded-3xl">ExpressJS</li>
        </ul>
        <p className="my-10 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta temporibus ex hic eveniet, sed repellat adipisci vel ab aspernatur
          recusandae aut enim ipsam rem non tenetur? Inventore quia reprehenderit vel assumenda iusto, ducimus maxime minus quam magni non soluta
          esse. Hic dicta eius rem vitae labore. Repudiandae totam necessitatibus id quam ipsum autem a minus mollitia, molestiae saepe. Iusto
          doloribus veniam amet cumque obcaecati quos iure inventore, incidunt labore impedit quis recusandae dolor veritatis nostrum, itaque ex,
          aspernatur tenetur. Dicta, eos explicabo vel voluptate ducimus porro culpa! Ab consectetur ratione sequi, commodi eius mollitia maiores
          provident vero magni corporis.
        </p>
      </div>
    </div>
  );
};

export default page;
