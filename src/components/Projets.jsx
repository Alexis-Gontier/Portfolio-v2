import { useState } from "react";
import ProjetsCard from "./ProjetsCard";
import { GiClick } from "react-icons/gi";

export default function Projets() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const CONTENT = [
    {
      capture: "/projets/projet-portfolio.png",
      icon: "/projets/vite-logo.png",
      title: "Portfolio",
      date: "2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum quae illum asperiores, quis perferendis quidem alias.",
      techno: ["Vite.js", "Tailwind CSS", "Gsap"],
      liked: true,
      githubLink: "https://github.com/Alexis-Gontier/Portfolio-v2",
      liveLink: "https://algont-ier.com"
    },
    {
      capture: "/projets/projet-old-portfolio.png",
      icon: "/projets/html-logo.png",
      title: "Ancien Portfolio",
      date: "2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum quae illum asperiores, quis perferendis quidem alias.",
      techno: ["HTML", "CSS", "JavaScript"],
      liked: true,
      githubLink: "https://github.com/Alexis-Gontier/old-portfolio",
      liveLink: ""
    },
    {
      capture: "/projets/projet-portfolio.png",
      icon: "/projets/vite-logo.png",
      title: "Portfolio",
      date: "2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum quae illum asperiores, quis perferendis quidem alias.",
      techno: ["Vite.js", "Tailwind CSS"],
      liked: false,
      githubLink: "https://github.com/Alexis-Gontier/portfolio",
      liveLink: "https://alexis-gontier.com"
    },
    {
      capture: "/projets/projet-old-portfolio.png",
      icon: "/projets/html-logo.png",
      title: "Ancien Portfolio",
      date: "2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum quae illum asperiores, quis perferendis quidem alias.",
      techno: ["HTML", "CSS", "JavaScript"],
      liked: true,
      githubLink: "https://github.com/Alexis-Gontier/old-portfolio",
      liveLink: ""
    },
  ];

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div className="flex flex-col justify-start items-center gap-16">
        <div className="flex flex-wrap justify-center items-start gap-10">
            {CONTENT.map((project, index) => (
                <ProjetsCard
                    key={index}
                    capture={project.capture}
                    icon={project.icon}
                    title={project.title}
                    date={project.date}
                    text={project.text}
                    techno={project.techno}
                    liked={project.liked || showAllProjects}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                />
            ))}
        </div>
        <button
            onClick={handleToggleProjects}
            className="text-white text-base bg-btn-purple hover:bg-[#8E4EC6]/80 px-6 py-3 rounded-lg flex justify-center items-center gap-2"
        >
            {showAllProjects ? "Réduire" : "Voir plus de projets"}
            <GiClick />
        </button>
    </div>
  );
}
