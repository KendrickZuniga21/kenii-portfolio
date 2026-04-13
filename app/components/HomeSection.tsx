"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import DownloadIcon from "@mui/icons-material/Download";
import CVModal from "./CVModal";

export default function HomeSection() {
    const [showArrow, setShowArrow] = useState(true);
    const [openCV, setOpenCV] = useState(false);
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
        const yOffset = -80;
        const y =
            el.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    
    useEffect(() => {
        const section = document.getElementById("home");

        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                setShowArrow(entry.isIntersecting);
            });
            },
            {
            threshold: 0.3, 
            rootMargin: "-80px 0px 0px 0px", 
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

  return (
    <section
        id="home"
        className="bg-[#121212] relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
    
        <div className="mb-6">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-gray-700">
                <Image
                src="/kenprofile.jpg"
                alt="Profile"
                width={480}
                height={480}
                className="object-cover"
                loading='eager'
                />
            </div>
        </div>
        <div className="text-center">
            <h1 className="text-4xl font-bold">
                Hi, I'm Kenii
            </h1>

            <div className="mt-3">
                <Chip
                label="Full Stack Developer"
                size="small"
                sx={{
                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                    color: "#c084fc",
                    border: "1px solid #a855f7",
                    fontWeight: 500,
                }}
          />
            </div>
        </div>
        <div className="mt-3">
            <p className="text-lg text-gray-400 max-w-xl mb-6">
                I enjoy turning ideas into well-crafted web applications where logic and design come together.
            </p>
        </div>
        
        <div className="flex gap-4">
            <button
                onClick={() => setOpenCV(true)}
                className="px-4 py-2 bg-white text-black rounded-lg"
            >
                View CV
            </button>
           <a
                href="/Daryll_Kendrick_Zuniga_CV.pdf"
                download
                className="px-4 py-2 bg-white text-black rounded-lg flex items-center gap-2"
            >
                <DownloadIcon fontSize="small" />
                Download CV
            </a>

            <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 border border-purple-500 rounded-lg"
            >
                Contact Me
            </button>
        </div>
        <div
           className={`fixed bottom-6 left-6 z-50 flex flex-col items-center transition duration-300 ${
                showArrow ? "opacity-40" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
                const el = document.getElementById("about");
                el?.scrollIntoView({ behavior: "smooth" });
            }}
            >
            <span className="arrow small"></span>
            <span className="arrow small"></span>
            <span className="arrow small"></span>
        </div>
        <CVModal open={openCV} onClose={() => setOpenCV(false)}/>
    </section>
  );
}