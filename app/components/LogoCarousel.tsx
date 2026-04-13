"use client";

import Image from "next/image";

const logos = [
  "/logos/react.png",
  "/logos/laravel.png",
  "/logos/nodejs.png",
  "/logos/mysql.png",
  "/logos/tailwind.png",
  "/logos/javascript.png",
  "/logos/html.png",
  "/logos/css3.png",
  "/logos/typescript.png",
  "/logos/php.png",
  "/logos/nextjs.svg",
  "/logos/redux.png",
  "/logos/expressjs.png",
  "/logos/jest.png",
  "/logos/postman.png",
  "/logos/git.png",
  "/logos/github.png",
  "/logos/jira.png",
  "/logos/postgre.png",
  "/logos/bitbucket.png",
];

export default function LogoCarousel() {
  return (
   <div className="relative overflow-hidden w-full mt-16">
   <div className="overflow-hidden w-full mt-16 mask-fade">
  <div className="flex w-max gap-16 animate-scroll">
    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
      <div key={index} className="flex-shrink-0">
        <Image
          src={logo}
          alt="tech logo"
          width={60}
          height={60}
          className="opacity-70 hover:opacity-100 transition"
        />
      </div>
    ))}
  </div>
</div>
</div>
  );
}