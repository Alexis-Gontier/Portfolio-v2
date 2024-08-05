import HeroRecherche from "./HeroRecherche";
import Btn1 from "./Btn1";
import Btn2 from "./Btn2";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
        <h2 className="text-white text-2xl md:text-4xl font-semibold text-center">
            Je m&apos;appelle <span className="text-violet">Alexis</span>
        </h2>
        <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center">
            Etudiant Développeur Web
        </h1>
        <h2 className="text-gray text-normal md:text-xl font-medium text-center">
            Et je suis actuellement à l&apos;école Hetic en Bachelor Développement Web
        </h2>
        <HeroRecherche isVisible={true}>
            En recherche d&apos;alternance
        </HeroRecherche>
        <div className="flex justify-center items-center gap-3">
            <Btn1 Link={"https://www.linkedin.com/in/alexis-gontier/"}>
                <FaLinkedin />
                LinkedIn
            </Btn1>
            <Btn2 Link={"https://github.com/Alexis-Gontier"}>
                <FaGithub />
                Github
            </Btn2>
        </div>
    </div>
  );
}
