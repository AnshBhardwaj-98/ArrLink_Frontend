import { ExternalLink, ArrowRight } from "lucide-react";
import GridBackground from "./GridBackground";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  // Add your project objects here in the future
  // Example format:
  {
    id: "project-1",
    title: "Project Name",
    category: "Category",
    description: "Project description",
    image: "/path/to/image.jpg",
    link: "https://app.imagine.bo",
  },
];

const ProjectsSection = () => {
  if (projects.length === 0) {
    return null; // Hide section if no projects added yet
  }

  return (
    <section id="projects" className="relative py-6 px-4 bg-surface-lowest overflow-hidden">
      {/* Refined background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-surface to-surface-lowest opacity-70" />
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl text-on-surface font-display font-bold mb-1">
            Featured Portfolio
          </h2>
          <div className="w-8 h-0.5 bg-primary" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-surface-container border border-border/5 hover:border-primary/30 transition-all duration-700"
            >
              {/* Image Container */}
              <div className="relative h-32 md:h-40 overflow-hidden bg-surface-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Container */}
              <div className="p-4">
                {/* Category Badge */}
                <div className="inline-block px-1.5 py-0.5 rounded-lg bg-primary/10 border border-primary/30 mb-2">
                  <p className="text-xs tracking-widest uppercase font-bold text-primary">
                    {project.category}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-base text-on-surface font-display font-bold mb-1 group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-on-surface/70 leading-relaxed text-xs md:text-sm font-sans font-normal mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* CTA Footer */}
                <div className="flex items-center gap-1.5 text-primary group-hover:gap-2 transition-all duration-500">
                  <span className="text-xs font-bold tracking-widest uppercase">
                    View Project
                  </span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-500 font-bold text-xs tracking-widest uppercase"
          >
            Explore More Projects
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
