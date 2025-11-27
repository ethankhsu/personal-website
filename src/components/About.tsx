"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const timeline = [
  {
    year: "2022",
    title: "Started at Princeton University",
    description: "Began BSE in Operations Research & Financial Engineering",
    icon: "🎓",
  },
  {
    year: "2023",
    title: "Kenja K.K. Internship",
    description: "Technical Product Manager in Tokyo, Japan",
    icon: "🗼",
  },
  {
    year: "2024",
    title: "Powerful Piano Internship",
    description: "Software Engineer building Unity games in SF Bay",
    icon: "🎹",
  },
  {
    year: "2025",
    title: "Amazon AWS Internship",
    description: "AI/ML Software Engineer in Santa Clara",
    icon: "☁️",
  },
  {
    year: "2026",
    title: "Expected Graduation",
    description: "BSE in ORFE, Minor in Computer Science",
    icon: "🎉",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
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
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">The </span>
            <span className="text-princeton-blue">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A blend of engineering, creativity, and passion for innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Profile Card */}
            <div className="glass rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-6">
                {/* Profile Photo */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Ethan Hsu"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ethan Hsu
                  </h3>
                  <p className="text-princeton-blue font-medium">
                    Princeton University '26
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    BSE in ORFE • CS Minor
                  </p>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a senior at <span className="text-white font-medium">Princeton University</span> studying
                Operations Research & Financial Engineering with a minor in Computer Science.
                Originally from the <span className="text-white font-medium">Bay Area, California</span>,
                my passion lies at the intersection of{" "}
                <span className="text-princeton-blue font-medium">artificial intelligence</span>,{" "}
                <span className="text-accent-orange font-medium">machine learning</span>, and
                building products that matter.
              </p>
              <p>
                When I'm not coding, you'll find me on the baseball mound as a{" "}
                <span className="text-white font-medium">varsity pitcher</span> for Princeton,
                traveling to new places, or binge-watching the latest anime series.
              </p>
              <p>
                I believe in the power of technology to solve complex problems and create
                meaningful experiences. Currently exploring the frontiers of LLMs,
                agentic AI, and quantitative systems.
              </p>
            </div>

          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-princeton-blue/50" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-dark-surface border-2 border-princeton-blue/50 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="glass rounded-xl p-5 hover:border-princeton-blue/30 transition-colors">
                    <span className="text-princeton-blue font-mono text-sm">
                      {item.year}
                    </span>
                    <h4 className="text-white font-semibold mt-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
