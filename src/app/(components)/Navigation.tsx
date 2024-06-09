"use client"
import { useState, useEffect } from 'react';
import { CgMenuLeftAlt } from "react-icons/cg";
import { PiBriefcase } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

export default function Navigation() {
    const [menu, setMenu] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 786) {
                setMenu(true);
            } else {
                setMenu(false);
            }
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        if (menu) {
            setClosing(true);
            setTimeout(() => {
                setMenu(false);
                setClosing(false);
            }, 1000); // Match the duration of the CSS animation
        } else {
            setMenu(true);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Projects', id: 'projects' },
        { name: 'About', id: 'about' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <>
            <main className='flex m-auto justify-center w-full overflow-hidden'>
                <nav className='flex flex-row w-full overflow-hidden md:max-w-7xl md:relative z-10 justify-between items-center md:flex-row md:items-start md:justify-between ulAnimationOpacity md:border-b border-gray-800'>
                    <h1 className='text-white w-72 md:block px-4 font-mono text-3xl font-bold first-letter:text-3xl'><span className='text-[var(--main-cta-color)]'>{`<`}</span>KGC<span className='text-[var(--main-cta-color)]'>{`/>`}</span></h1>
                    <ul className={`flex flex-col absolute top-0 left-0 w-full h-screen bg-black justify-center items-center text-white gap-6 md:space-x-8 md:h-[50px] md:pt-1 md:items-start md:relative md:flex-row md:bg-transparent overflow-hidden ${!menu ? 'ulHidden' : 'ulFlex'} ${closing ? 'ulAnimationClose' : 'ulAnimationOpacity'}`}>
                        {navLinks.map((link) => (
                            <li key={link.id} className='text-xl font-regular hover:text-[var(--main-cta-color)] hover:cursor-pointer transition-all delay-75'>
                                {link.name}
                            </li>
                        ))}
                    </ul>
                    <button className='w-full max-w-[150px] bg-white text-black flex justify-around border p-[6px] items-center space-x-1 rounded'>
                        <span className='pt-[1px]'>View Resume</span>
                        <PiBriefcase className='text-2xl' />
                    </button>
                    {
                        !menu ? (
                            <button className='p-4 md:hidden z-50 hover:text-[var(--main-cta-color)]' onClick={toggleMenu}>
                                <CgMenuLeftAlt className='text-4xl font-bold cursor-pointer' />
                            </button>
                        ) : (
                            <button className='p-4 md:hidden z-50 hover:text-[var(--main-cta-color)]' onClick={toggleMenu}>
                                <IoClose className='text-4xl font-bold cursor-pointer' />
                            </button>
                        )
                    }
                </nav>
            </main>
        </>
    );
}
