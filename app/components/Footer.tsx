export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">

    
        <h2 className="text-lg font-semibold text-white">
          Daryll Kendrick Zuniga
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Full Stack Developer building modern web experiences
        </p>

      
        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400">
          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>

       
        <div className="w-full h-px bg-white/10 my-6"></div>

       
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Daryll Kendrick Zuniga. All rights reserved.
        </p>

      </div>
    </footer>
  );
}