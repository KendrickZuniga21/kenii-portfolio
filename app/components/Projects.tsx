import { Card, CardContent, Typography, CardActions, Button, Chip } from "@mui/material";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#121212] min-h-screen scroll-mt-20 px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        
      
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">PROJECTS</h1>
          <div className="w-12 h-1 bg-purple-400 mx-auto mt-2"></div>
        </div>

      
        <Card
         sx={{
            background: "linear-gradient(135deg, #1a1a1a, #202020)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 10px 30px rgba(168,85,247,0.25)", 
            borderColor: "rgba(168,85,247,0.4)",
            },
        }}
        >
          <CardContent>
            <Typography variant="h6"  
               sx={{
                color: "#c084fc", 
                fontWeight: 600,
                mb: 1,
            }}>
              Personal Portfolio Website
            </Typography>

            <Typography variant="body2" sx={{ color: "#9ca3af", mb: 2 }}>
              A modern, responsive portfolio built using Next.js and Tailwind CSS 
              to showcase my frontend development skills. Designed with a focus on 
              clean UI, smooth navigation, and performance.
            </Typography>

            <div className="flex flex-wrap gap-2 mb-4">
              {["Next.js", "React", "Tailwind CSS", "Typescript"].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(168,85,247,0.1)",
                    color: "#c084fc",
                  }}
                />
              ))}
            </div>
          </CardContent>

          <CardActions sx={{ px: 2, pb: 2 }}>
            <Button
              size="small"
              href="#"
              target="_blank"
              sx={{
                color: "#ffffff",
                textTransform: "none",
                fontWeight: 500,
                "&:hover": {
                  color: "#c084fc",
                  textDecoration: "underline",
                },
              }}
            >
              Live Site
            </Button>
            <Button
              size="small"
              href="https://github.com/KendrickZuniga21/kenii-portfolio"
              target="_blank"
              sx={{
                color: "#ffffff",
                textTransform: "none",
                fontWeight: 500,
                "&:hover": {
                  color: "#c084fc",
                  textDecoration: "underline",
                },
              }}
                          >
              GitHub Repo
            </Button>
          </CardActions>
        </Card>

     
        <p className="text-gray-500 text-center mt-12">
          More projects are currently in development — including full-stack applications 
          and API integrations. Stay tuned.
        </p>

      </div>
    </section>
  );
}