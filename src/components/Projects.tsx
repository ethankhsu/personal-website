"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "YouTube Sports Network Analysis",
    description:
      "Large-scale network analysis of YouTube sports content ecosystem, identifying influential clusters and bridge channels using graph theory.",
    longDescription:
      "Analyzed over 2 million records from the YouTube API to construct a weighted graph of sports content relationships. Identified key clusters around FIFA, ESPN, and other major sports networks, revealing content bridges and influence patterns.",
    image: "/images/project-youtube.jpg",
    tags: ["Python", "Gephi", "YouTube API", "NetworkX", "Graph Theory"],
    metrics: ["2M+ records", "Weighted Graph Analysis", "Cluster Identification"],
    github: "https://www.linkedin.com/in/ethankhsu/overlay/1749182287143/single-media-viewer/?profileId=ACoAAEfPA-YBAQgFESHaBhWrO8Xj5w1dHaHIgTQ",
    demo: null,
    featured: true,
    color: "from-red-500 to-orange-500",
    period: "Feb - May 2025",
  },
  {
    id: 2,
    title: "Princeton Senior Thesis",
    description:
      "Reliable Sketching For Least Squares Under Label Noise - Research on robust randomized numerical linear algebra methods.",
    longDescription:
      "Senior thesis research focusing on developing reliable sketching techniques for solving overdetermined least squares problems in the presence of label noise. Exploring randomized numerical linear algebra approaches to improve robustness.",
    image: "/images/project-thesis.jpg",
    tags: ["Python", "NumPy", "Linear Algebra", "Machine Learning", "Research"],
    metrics: ["Senior Thesis", "ORFE Department", "Coming Soon"],
    github: null,
    demo: null,
    featured: true,
    color: "from-princeton-blue to-blue-500",
    period: "2025-2026",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-princeton-blue font-medium uppercase tracking-wider text-sm">
            Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            <span className="text-white">Things I've </span>
            <span className="text-princeton-blue">Built</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              <motion.div
                className="glass rounded-2xl overflow-hidden h-full cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Placeholder */}
                <div
                  className="relative h-48 bg-princeton-blue/30 overflow-hidden"
                >
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
                      Featured
                    </div>
                  )}

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <span className="text-white font-medium">View Details</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-princeton-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-500 mb-3">{project.period}</p>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <span
                        key={metric}
                        className="px-2 py-1 rounded-md bg-princeton-blue/10 text-princeton-blue text-xs font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500"
                      >
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-gray-600">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ethankhsu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>View more on GitHub</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: typeof projects[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="h-48 bg-princeton-blue/30 relative">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-500 mb-4">{project.period}</p>

          <p className="text-gray-300 mb-6">{project.longDescription}</p>

          {/* Metrics */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
              Key Metrics
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="px-3 py-1.5 rounded-lg bg-princeton-blue/10 text-princeton-blue text-sm font-medium"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-princeton-blue text-white hover:bg-princeton-blue/80 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
