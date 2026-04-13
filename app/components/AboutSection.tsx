import LogoCarousel from "./LogoCarousel";
import TechItem from "./TechItem";
import InfoCard from "./InfoCard";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import CodeOffIcon from '@mui/icons-material/CodeOff';


export default function AboutSection() {
  
  return (
    <section id="about" className="bg-[#121212] min-h-screen scroll-mt-20 px-6 pt-10 pb-20">
       <div className="mb-16">
          <LogoCarousel />
        </div>

   
      <div className="max-w-6xl mx-auto">

     
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">ABOUT</h1>
          <div className="w-12 h-1 bg-purple-400 mx-auto mt-2"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

         
          <div className="max-w-md">
            <p className="text-sm text-gray-500 mb-2">INTRODUCTION</p>

            <h2 className="text-2xl font-semibold mb-4">
              👋 Nice to meet you, <span className="text-purple-400">Kenii</span> here!
            </h2>

            <p className="italic text-gray-400 mb-4">
              Turning ideas into real, functional web applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I am a full stack developer specializing in React and Laravel,
              with experience building web-based solutions and integrating APIs.
            </p>
          <div className="flex flex-col gap-6">

          <p className="text-xs text-gray-500 uppercase mt-2 mb-2">Main Skills</p>

          <InfoCard
            title="React Frontend"
            description="Building robust, scalable web applications powered by modern frameworks such as React and Next.js."
            icon={<CodeIcon />}
          />

          <InfoCard
            title="Laravel Backend"
            description="Designing and implementing backend architectures in Laravel, including RESTful APIs, database management, and system optimization."
            icon={<CodeOffIcon />}
          />

          <p className="text-xs text-gray-500 uppercase mt-1">
            Education
          </p>

          <InfoCard
            title="Bachelor of Science in Computer Engineering"
            subtitle="2015-2021"
            description="Pamantasan ng Lungsod ng Maynila"
            icon={<SchoolIcon />}
          />
        </div>  

   
          </div>

         
          <div>
            <p className="text-sm text-gray-500 mb-6 text-center md:text-left">
              TECHNOLOGIES
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 justify-items-center">
              <TechItem src="/logos/js.png" name="JavaScript" />
              <TechItem src="/logos/typescript.png" name="TypeScript" />
              <TechItem src="/logos/react.png" name="React" />
              <TechItem src="/logos/nextjs.svg" name="Next.js" />
              <TechItem src="/logos/nodejs.png" name="Node.js" />
              <TechItem src="/logos/laravel.png" name="Laravel" />
              <TechItem src="/logos/mysql.png" name="MySQL" />
              <TechItem src="/logos/tailwind.png" name="Tailwind" />
              <TechItem src="/logos/git.png" name="Git" />
              <TechItem src="/logos/github.png" name="GitHub" />
              <TechItem src="/logos/jira.png" name="Jira" />
              <TechItem src="/logos/redux.png" name="Redux" />
              <TechItem src="/logos/postman.png" name="Postman" />
              <TechItem src="/logos/php.png" name="PHP" />
              <TechItem src="/logos/expressjs.png" name="ExpressJs" />
              <TechItem src="/logos/css3.png" name="CSS" />
              <TechItem src="/logos/html.png" name="HTML" />
              <TechItem src="/logos/jest.png" name="Jest" />
              <TechItem src="/logos/postgre.png" name="PostgreSQL" />
              <TechItem src="/logos/bitbucket.png" name="Bitbucket" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}