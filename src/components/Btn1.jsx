export default function Btn1({ Link, children }) {
    return (
      <a href={Link} target="_blank" className="text-white text-base bg-btn-purple hover:bg-[#8E4EC6]/80 px-6 py-3 rounded-lg flex justify-center items-center gap-2">
        {children}
      </a>
    );
}