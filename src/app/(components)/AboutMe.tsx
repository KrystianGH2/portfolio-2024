import React from "react";

export default function AboutMe() {
  return (
    <>
      <main
        id="about"
        className="flex flex-col justify-center items-center w-full py-20 bg-black my-28 p-4 md:p-2"
      >
        <h1 className="text-3xl font-bold text-center text-white py-10">
          About Me
        </h1>
        <section className="flex flex-col  items-center gap-10 justify-center w-full max-w-7xl px-2 md:justify-around md:items-start md:flex-row md:gap-0">
          <div className="max-w-[250px] flex flex-1">
            <img
              src="https://avatars.githubusercontent.com/u/112473660?v=4"
              alt="Github User image"
              className="rounded-full w-[250px] flex flex-1 "
            />
          </div>
          <div className="flex flex-col justify-center pt-2 items-start w-full  md:max-w-2xl text-center md:text-start">
            <p className="tracking-wide py-4 text-gray-400 hover:text-gray-300">
              I`m Krystian, a recent graduate from Noroff Vocational College
              with a solid foundation in HTML, CSS, and JavaScript. I`m
              passionate about modern web technologies and continuously
              expanding my skills as a front-end developer.
            </p>

            <p className="tracking-wide py-4 md:pr-14 text-gray-400 hover:text-gray-300">
              I`ve completed a few projects and am eager to add more in the near
              future as I grow my knowledge and expertise.
            </p>
          </div>
        </section>

        <section className="flex pb-14 flex-col-reverse justify-center items-center w-full max-w-7xl px-1 md:flex-row md:justify-around">
          <div className="flex flex-col justify-start items-start  w-full  md:max-w-xl ">
            <h2 className="flex flex-col justify-start items-start text-3xl font-bold text-center text-white py-10">
              <small className="text-xs font-normal tracking-wider text-gray-400">
                Skills
              </small>
              Technical Skills
            </h2>

            <p className="tracking-wide pb-4 text-gray-400  hover:text-gray-300">
              I have a solid foundation in HTML, CSS, and JavaScript.
              Additionally, I have experience using frameworks such as React and
              Next.js.
            </p>

            <p className="tracking-wide py-4 text-gray-400 hover:text-gray-300">
              I`ve also incorporated a bit of TypeScript into my projects. While
              I`m still learning, I am committed to mastering these technologies
              to further enhance my expertise.
            </p>
          </div>

          <div className="max-w-[390px] flex items-center">
            <img
              src="https://i.imgur.com/jIkD7FE.png"
              alt="Github User image"
              className="rounded w-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}
