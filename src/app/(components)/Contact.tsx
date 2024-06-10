import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  interface SocialLink {
    id: string;
    icon: JSX.Element;
    link: string;
  }

  const socialLinks: SocialLink[] = [
    {
      id: "1",
      icon: (
        <TiSocialGithubCircular className="text-5xl text-white hover:text-[var(--main-cta-color)] transition-all delay-75" />
      ),
      link: "https://github.com/KrystianGH2",
    },
    {
      id: "2",
      icon: (
        <TiSocialLinkedinCircular className="text-5xl  text-white  hover:text-[var(--main-cta-color)] transition-all delay-75" />
      ),
      link: "https://www.linkedin.com/in/krystian-cruz/",
    },
    {
      id: "3",
      icon: (
        <SiGmail className="text-4xl text-white mt-[6px] p-2 border-4 rounded-full hover:border-[var(--main-cta-color)]  hover:text-[var(--main-cta-color)] transition-all delay-75" />
      ),
      link: "mailto:kgcdronio@gmail.com",
    },
  ];
  return (
    <>
      <main
        id="contact"
        className="flex flex-col justify-center items-center w-full pb-20"
      >
        <section className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:p-20 justify-center items-center w-full max-w-7xl bg-black py-10">
            <div className="flex flex-col md:justify-center md:items-start items-center">
              <div className="flex flex-col justify-center items-center w-full h-full pb-10 md:justify-start md:items-start">
                <h1 className="text-3xl font-bold text-center text-white md:pb-4">
                  Contact Me
                </h1>
                <p className="text-center tracking-wide text-gray-400 p-2 max-w-[400px] md:max-w-[500px] md:text-left md:p-0">
                  If you have any questions or would like to work together,
                  please reach out to me.
                </p>
              </div>
              <div className="flex gap-6 pb-10">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--main-cta-color)]"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="pb-8 md:hidden">or</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full max-w-[450px] py-16 border border-gray-500 p-4 rounded-md">
              <form className=" m-auto flex flex-col gap-4 w-full  ">
                <label htmlFor="name">Full name</label>
                <input className="rounded h-10" id="name" type="text" />
                <label htmlFor="email">Email</label>
                <input className="rounded h-10" id="email" type="text" />
                <label htmlFor="textarea">Message</label>
                <textarea
                  className="rounded h-[150px]"
                  name="textarea"
                  id="textarea"
                ></textarea>
              </form>
              <button className=" bg-white text-black w-[100px] rounded-md h-10 mt-4 transition-all hover:bg-[var(--main-cta-color)]">
                Submit
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
