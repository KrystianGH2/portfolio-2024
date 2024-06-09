import React from 'react';
import Image from 'next/image';
import fed2 from '../../../src/image/fed2.jpg'; 
import { TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";
import { SiGmail } from "react-icons/si";

export default function Hero() {
    interface SocialLink {
        id: string;
        icon: JSX.Element;
        link: string;
    }
    
    const socialLinks: SocialLink[] = [
        {
            id: "1",
            icon: <TiSocialGithubCircular className='text-5xl text-white hover:text-[var(--main-cta-color)] transition-all delay-75'/>,
            link: 'https://github.com/KrystianGH2'
        },
        {
            id: "2",
            icon: <TiSocialLinkedinCircular  className='text-5xl  text-white  hover:text-[var(--main-cta-color)] transition-all delay-75'/>,
            link: 'https://www.linkedin.com/in/krystian-cruz/'
        },
        {
            id: "3",
            icon: <SiGmail  className='text-4xl text-white mt-[6px] p-2 border-4 rounded-full hover:border-[var(--main-cta-color)]  hover:text-[var(--main-cta-color)] transition-all delay-75'/>,
            link: 'mailto:kgcdronio@gmail.com'
        }
    ];

    return (
        <>
            <div className="hero min-h-screen relative w-full">
                <div className="absolute inset-0">
                    <Image 
                        src={fed2} 
                        alt="coding background image overlay" 
                        layout="fill" 
                        objectFit="cover" 
                        className="object-cover"
                    />
                </div>
                <div className="hero-overlay bg-opacity-90 absolute inset-0"></div>
                <div className="hero-content text-center text-neutral-content relative heroAnimation w-full flex flex-col justify-center items-center">
                    <div className="max-w-7xl w-full flex flex-col justify-center items-center pb-24 gap-6">
                        <h1 className="mb-5 md:text-5xl text-3xl font-bold">
                            Hi!👋 I`m Krystian Cruz <br />A <span className='text-[var(--main-cta-color)]'>Front-end Developer</span>
                        </h1>
                        <p className="mb-5 w-full max-w-[700px]">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className="flex gap-6">
                            {socialLinks.map((link) => (
                                <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer" className='hover:text-[var(--main-cta-color)]'>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
