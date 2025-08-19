import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using multiple APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Weather API", "Charts.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking application with workout plans, progress analytics, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express.js", "MySQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="project" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,) => (
            <div
              key={project.title}
              className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-slate-400 hover:text-slate-300 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;