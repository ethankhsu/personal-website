"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    company: "Amazon (AWS)",
    logo: "/images/amazon-aws-logo.jpg",
    useImage: true,
    role: "AI/ML Software Engineer Intern",
    period: "June - August 2025",
    location: "Santa Clara, CA",
    color: "from-orange-500 to-yellow-500",
    achievements: [
      "Filed patent for novel auto-parallelism tool for distributing LLMs on SageMaker Hyperpod",
      "Benchmarked data, tensor, and pipeline parallelism strategies to identify bottlenecks",
      "Integrated heuristics engine for optimal distribution recommendations",
      "Developed using Kiro IDE for AI-assisted development workflows",
    ],
    technologies: ["Python", "SageMaker", "LLMs", "Distributed Systems", "AWS"],
  },
  {
    id: 2,
    company: "Powerful Piano",
    logo: "🎹",
    useImage: false,
    role: "Software Engineer Intern",
    period: "June - August 2024",
    location: "San Francisco Bay Area",
    color: "from-purple-500 to-pink-500",
    achievements: [
      "Built Unity 2D runner game in C# with scalable authentication using OpenAPI and Azure AD",
      "Deployed WebGL demo that increased downloads by 300%",
      "Implemented MIDI integration and audio synthesis features",
      "Collaborated with cross-functional team on game mechanics design",
    ],
    technologies: ["Unity", "C#", "WebGL", "Azure AD", "OpenAPI", "MIDI"],
  },
  {
    id: 3,
    company: "Kenja K.K.",
    logo: "/images/kenja-logo.jpg",
    useImage: true,
    role: "Technical Product Manager Intern",
    period: "June - July 2023",
    location: "Tokyo, Japan",
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "Built regression model using Python and Google Apps Script, cutting timelines by 200%",
      "Implemented Selenium-based automated testing framework",
      "Reduced QA issues by 30% through comprehensive test coverage",
      "Bridged technical and business requirements in bilingual environment",
    ],
    technologies: ["Python", "Google Apps Script", "Selenium", "Regression Analysis"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="experience" className="py-32 relative">
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
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Where I've </span>
            <span className="text-princeton-blue">Worked</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building impactful solutions across AI, gaming, and enterprise software.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative ${
                expandedCard === exp.id ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className="glass rounded-2xl p-6 h-full cursor-pointer transition-all duration-300 hover:border-white/20"
                onClick={() =>
                  setExpandedCard(expandedCard === exp.id ? null : exp.id)
                }
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-princeton-blue opacity-0 group-hover:opacity-100 transition-opacity"
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {exp.useImage ? (
                      <div className="w-14 h-14 rounded-xl overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-14 h-14 rounded-xl bg-dark-surface border border-white/10 flex items-center justify-center text-2xl`}
                      >
                        {exp.logo}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-princeton-blue font-medium text-sm">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  {/* Expand icon */}
                  <motion.div
                    animate={{ rotate: expandedCard === exp.id ? 180 : 0 }}
                    className="text-gray-500"
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {exp.location}
                  </span>
                </div>

                {/* Achievements - Always show first, expand for more */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements
                    .slice(0, expandedCard === exp.id ? undefined : 2)
                    .map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={expandedCard === exp.id ? { opacity: 0 } : {}}
                        animate={{ opacity: 1 }}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <span className="text-princeton-blue mt-1">▹</span>
                        {achievement}
                      </motion.li>
                    ))}
                </ul>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedCard === exp.id ? 1 : 0,
                    height: expandedCard === exp.id ? "auto" : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Expand hint */}
                {expandedCard !== exp.id && (
                  <p className="text-xs text-gray-500 mt-2">
                    Click to see more details
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
