"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from '@mui/material/Button';

const EMAIL = "zuniga.daryll@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#121212] min-h-screen scroll-mt-20 px-6 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">CONTACT</h1>
          <div className="w-12 h-1 bg-purple-400 mx-auto mt-2"></div>
        </div>
        <p className="text-gray-400 mb-2">
          Feel free to reach out if you'd like to work together or have any questions.
        </p>
        <p className="text-gray-500 mb-6">
          Open to full-time roles, freelance work, and collaborations.
        </p>
        <a
          href={`mailto:zuniga.daryll@gmail.com`}
          onClick={handleEmailClick}
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
        >
          {copied ? "Email Copied! ✓" : "Send Me an Email"}
        </a>
        {/* <button
          component="a"
          href="mailto:zuniga.daryll@gmail.com?subject=Let%27s%20Work%20Together"
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
        >
          Send Me an Email
        </button> */}
        <p className="mt-4 text-sm text-gray-500">or email me directly at</p>
        <p className="text-purple-400">{EMAIL}</p>
        <div className="flex justify-center gap-4 mt-6">
         <a 
            href="https://github.com/KendrickZuniga21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group transition active:scale-95"
          >
            <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-purple-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/daryll-kendrick-zuniga-bab38b17a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group transition active:scale-95"
          >
            <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-purple-400" />
          </a>
        </div>
      </div>
    </section>
  );
}