import Competences from './Competences'
import Formation from "./Formation";

import Btn1 from './Btn1'
import Btn2 from './Btn2'

import { BsFillMortarboardFill } from "react-icons/bs";
import { IoBusiness } from "react-icons/io5";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaTools } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiFirebase } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { BsStack } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

export default function About() {

    const COMPETENCES = [
        {logo: <FaHtml5 />, name: "HTML"},
        {logo: <FaCss3Alt />, name: "CSS"},
        {logo: <FaJs />, name: "JavaScript"},
        {logo: <FaReact />, name: "React"},
        {logo: <SiVite />, name: "Vite.js"},
        {logo: <RiNextjsFill />, name: "Next.js"},
        {logo: <SiTailwindcss />, name: "Tailwind CSS"},
        {logo: <SiFirebase />, name: "Firebase"},
    ];

    const OUTILS = [
        {logo: <FaGitAlt />, name: "Git"},
        {logo: <FaGithub />, name: "Github"},
        {logo: <VscVscode />, name: "VS Code"},
        {logo: <FaFigma  />, name: "Figma"},
    ];

    const FORMATIONS = [
        {
            year: "2020 - 2023",
            title: "Formation en Développement Web",
            text: "Formation approfondie en développement web avec une spécialisation en Python, Svelte et Tree.js.",
            tech: ["Python", "Svelte", "Tree.js"],
        },
        {
            year: "2020 - 2023",
            title: "Formation en Développement Web",
            text: "Formation approfondie en développement web avec une spécialisation en Python, Svelte et Tree.js.",
            tech: ["Python", "Svelte", "Tree.js"],
        },
        {
            year: "2020 - 2023",
            title: "Formation en Développement Web",
            text: "Formation approfondie en développement web avec une spécialisation en Python, Svelte et Tree.js.",
            tech: ["Python", "Svelte", "Tree.js"],
        },
    ];

    const EXPERIENCES = [
        {
            year: "2020 - 2023",
            title: "Formation en Développement Web",
            text: "Formation approfondie en développement web avec une spécialisation en Python, Svelte et Tree.js.",
            tech: ["Python", "Svelte", "Tree.js"],
        },
        {
            year: "2020 - 2023",
            title: "Formation en Développement Web",
            text: "Formation approfondie en développement web avec une spécialisation en Python, Svelte et Tree.js.",
            tech: ["Python", "Svelte", "Tree.js"],
        },
        {
            year: "2020 - 2023",
            title: "Formation en Développement Web",
            text: "Formation approfondie en développement web avec une spécialisation en Python, Svelte et Tree.js.",
            tech: ["Python", "Svelte", "Tree.js"],
        },
    ];

  return (
    <>
        <div>
            <div className='flex flex-col justify-between items-center md:items-end gap-2 md:flex-row'>
                <div className='w-2/3 flex flex-col'>
                    <h2 className="text-white text-2xl md:text-5xl font-semibold mt-20 mb-4 flex justify-start items-center gap-3 w-3/4 md:w-full mx-auto">
                        <IoPersonSharp />
                        A Propos
                    </h2>
                    <div className='w-3/4 md:w-full mx-auto'>
                        <div className="w-20 h-1 bg-white mb-8"></div>
                    </div>
                    <p className='text-xl text-semibold mb-8'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae voluptatum hic quo ad in nisi asperiores voluptatibus tenetur, at minima incidunt expedita numquam enim aut excepturi beatae aperiam obcaecati ea.
                    </p>
                    <div className='flex gap-4'>
                        <Btn2 Link="r">
                            Downlaod CV
                        </Btn2>
                        <Btn1 Link="r">
                            Voir CV
                        </Btn1>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className="w-72 h-72 bg-slate-700 rounded-xl"></div>
                </div>
            </div>
        </div>


        <div>
            <h2 className="text-white text-2xl md:text-4xl font-semibold mt-20 mb-4 flex justify-start items-center gap-3 w-3/4 md:w-full mx-auto">
                <BsStack />
                Techologies préférés
            </h2>
            <div className='w-3/4 md:w-full mx-auto'>
                <div className="w-20 h-1 bg-white mb-8"></div>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-5">
                {COMPETENCES.map((competences, index) => (
                    <Competences
                        key={index}
                        logo={competences.logo}
                        name={competences.name}
                    />
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-white text-2xl md:text-4xl font-semibold mt-20 mb-4 flex justify-start items-center gap-3 w-3/4 md:w-full mx-auto">
                <FaTools />
                Outils
            </h2>
            <div className='w-3/4 md:w-full mx-auto'>
                <div className="w-20 h-1 bg-white mb-8"></div>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-5">
                {OUTILS.map((outils, index) => (
                    <Competences
                        key={index}
                        logo={outils.logo}
                        name={outils.name}
                    />
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-white text-2xl md:text-4xl font-semibold mt-20 mb-4 flex justify-start items-center gap-3 w-3/4 md:w-full mx-auto">
                <BsFillMortarboardFill />
                Formations
            </h2>
            <div className='w-3/4 md:w-full mx-auto'>
                <div className="w-20 h-1 bg-white mb-8"></div>
            </div>
            {FORMATIONS.map((formation, index) => (
                <Formation
                    key={index}
                    year={formation.year}
                    title={formation.title}
                    text={formation.text}
                    tech={formation.tech}
                />
            ))}
        </div>
        <div>
            <h2 className="text-white text-2xl md:text-4xl font-semibold mt-20 mb-4 flex justify-start items-center gap-3 w-3/4 md:w-full mx-auto">
                <IoBusiness />
                Expériences
            </h2>
            <div className='w-3/4 md:w-full mx-auto'>
                <div className="w-20 h-1 bg-white mb-8"></div>
            </div>
            {EXPERIENCES.map((experiences, index) => (
                <Formation
                    key={index}
                    year={experiences.year}
                    title={experiences.title}
                    text={experiences.text}
                    tech={experiences.tech}
                />
            ))}
        </div>
    </>
  );
}
