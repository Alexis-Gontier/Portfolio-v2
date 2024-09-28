import Formation from "./Formation";
import { IoBusiness } from "react-icons/io5";

export default function AboutXp() {

    const EXPERIENCES = [
        {
            year: "09/2024 - Actuellement",
            title: "Développeur FullStack - Plume",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores consequatur minima exercitationem dignissimos eum rem doloremque harum perspiciatis ipsam ullam?",
            tech: ["Drupal", "Twig", "SCSS", "PHP"],
        },
        {
            year: "06/2024 - 07/2024",
            title: "Développeur Front - TCP Innovation",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores consequatur minima exercitationem dignissimos eum rem doloremque harum perspiciatis ipsam ullam?",
            tech: ["Joomla", "HTML", "CSS"],
        },
    ];

  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-white text-2xl lg:text-4xl font-semibold flex items-center gap-3">
            <IoBusiness />
            Expériences
        </h2>
        <div className="w-20 h-1 bg-white"></div>

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
  )
}
