import React from "react";

function About() {
  return (
    <div className="h-screen">
      <div className="bg-black900 h-50 relative"></div>
      <img
        src="/evelyn.jpeg"
        alt="Evelyn"
        className="h-65 w-65 object-contain rounded-full absolute top-50 right-90 border-4 border-white"
      />
      <div className="ml-50 mt-20">
        <h2 className="text-black900 font-extrabold font-manrope text-3xl mb-6">
          Evelyn Martins
        </h2>
        <p className="text-black800 text-sm font-manrope w-100">
          Hello!👋 I am a Development student, and I am currently diving deeper
          into the world of front-end development. I am always looking to learn
          new technologies and improve my skills. I worked on this project using
          React, TypeScript, and Tailwind CSS. I am excited to continue learning
          and contributing to innovative projects!
        </p>
        <div className="flex flex-col gap-4 mt-10">
          <p className="text-black900 font-bold">
            Email:{" "}
            <span className="text-black800 font-normal">
              evelyn.santosmartins11@gmail.com
            </span>
          </p>
          <p className="text-black900 font-bold">
            GitHub:{" "}
            <a
              href="https://github.com/evelyn-martins" target="_blank"
              className="text-black800 font-normal hover:underline"
            >
              https://github.com/evelyn-martins
            </a>
          </p>
          <p className="text-black900 font-bold">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/evelyn-santos-martins/" target="_blank"
              className="text-black800 font-normal hover:underline"
            >
              https://www.linkedin.com/in/evelyn-santos-martins/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
