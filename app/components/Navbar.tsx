"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });
  const [isScrolling, setIsScrolling] = useState(false);

  const navRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    setIsScrolling(true);

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Unlock after scroll finishes
    setTimeout(() => {
      setIsScrolling(false);
    }, 500); // adjust if needed
  }
};

  // Move indicator
 useEffect(() => {
  const timeout = setTimeout(() => {
    const current = navRefs.current[active];
    if (current) {
      setIndicatorStyle({
        left: current.offsetLeft,
        width: current.offsetWidth,
      });
    }
  }, 50);

  return () => clearTimeout(timeout);
}, [active]);

  // Intersection observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) {
          setActive(visibleSection);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between border-b border-white/5 px-8 py-4 bg-[#0f0f0f]/80 backdrop-blur z-50">
      <h1 className="text-xl font-bold">
        Daryll Kendrick <span className="text-purple-400">Zuñiga</span>
      </h1>

      <div className="relative flex items-center gap-6 text-sm">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              ref={(el) => (navRefs.current[item.id] = el)}
              onClick={() => {
                setActive(item.id);
                handleScroll(item.id);
              }}
              className={`pb-1 ${
                isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          );
        })}

        {/* Sliding underline */}
        <span
          className="absolute bottom-0 h-[2px] bg-purple-400 transition-all duration-300"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>
    </nav>
  );
}