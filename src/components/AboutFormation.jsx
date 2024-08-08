import { BsFillMortarboardFill } from "react-icons/bs";
import Formation from "./Formation";

export default function AboutFormation() {

    const FORMATIONS = [
        {
            year: "2023 - 2026",
            title: "Bachelor Développement Web",
            text: "Formation approfondie en développement web. Cette formation couvre les fondamentaux du développement web, ainsi que des techniques avancées pour créer des applications web modernes et performantes.",
            tech: ["Dev Front", "Dev Back"],
        },
    ];

  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-white text-2xl lg:text-4xl font-semibold flex items-center gap-3">
            <BsFillMortarboardFill />
            Formations
        </h2>
        <div className="w-20 h-1 bg-white"></div>

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
  )
}
