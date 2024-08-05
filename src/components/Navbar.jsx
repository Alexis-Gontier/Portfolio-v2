import { FaGithub } from "react-icons/fa";

export default function Navbar() {

  const LINKS = [
    {
      lien: "#about",
      text: "A Propos"
    },
    {
      lien: "#project",
      text: "Projets"
    },
    {
      lien: "#contact",
      text: "Contact"
    },
  ]

  return (
    <header className="z-50 fixed top-0 left-0 w-full p-3 bg-bg-nav backdrop-blur-sm flex justify-around items-center border-b-2 border-border-colors shadow-xl shadow-shadow-nav">
      <a
        href="/"
        className="text-white text-2xl font-bold"
      >
        alexisGontier
      </a>

      <nav className="flex justify-center items-center gap-5">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.lien}
            className="text-gray font-medium hover:text-[#8E4EC6] hover:translate-y-[-2px] transition duration-300 ease-out"
          >
            {link.text}
          </a>
        ))}
        <div className="w-px h-6 bg-[#B2B3BD]"></div>
        <a
          href="https://github.com/Alexis-Gontier/Portfolio-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:bg-[#8040B7]/30 p-2 rounded-full transition duration-300 ease-out"
        >
          <FaGithub />
        </a>
      </nav>
    </header>
  )
}
