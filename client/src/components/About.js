import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hello. My name is Miguel Moreno, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                Experienced software developer proficient in crafting responsive
                and scalable web applications. Possesses a robust understanding
                of both UI/UX principles and practices, coupled with a
                comprehensive grasp of backend development aspects. Committed to
                delivering exceptional digital experiences through seamless
                integration of design and functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
