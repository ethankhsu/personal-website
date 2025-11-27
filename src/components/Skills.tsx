"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const skillCategories = [
  {
    name: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95, description: "Primary language for AI/ML work" },
      { name: "JavaScript", level: 85, description: "Web development & Node.js" },
      { name: "C++", level: 80, description: "Quantitative systems & performance" },
      { name: "Java", level: 75, description: "Data structures & algorithms" },
      { name: "C#", level: 75, description: "Unity game development" },
      { name: "SQL", level: 70, description: "Database queries & analytics" },
      { name: "R", level: 65, description: "Statistical analysis" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: "🛠️",
    skills: [
      { name: "PyTorch", level: 90, description: "Deep learning models" },
      { name: "NVIDIA NeMo", level: 85, description: "LLM training & deployment" },
      { name: "React.js", level: 80, description: "Frontend development" },
      { name: "Unity", level: 75, description: "Game development" },
      { name: "NumPy/Pandas", level: 90, description: "Data manipulation" },
      { name: "NetworkX", level: 80, description: "Graph analysis" },
      { name: "OpenAPI", level: 70, description: "API specifications" },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "⚙️",
    skills: [
      { name: "AWS SageMaker", level: 85, description: "ML model deployment" },
      { name: "Git", level: 90, description: "Version control" },
      { name: "Docker", level: 75, description: "Containerization" },
      { name: "VS Code", level: 95, description: "Primary IDE" },
      { name: "Claude Code", level: 90, description: "AI-assisted development" },
      { name: "Azure", level: 70, description: "Cloud services" },
      { name: "Selenium", level: 70, description: "Automated testing" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-princeton-blue font-medium uppercase tracking-wider text-sm">
            Skills & Tools
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">My </span>
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I work with to build intelligent systems and impactful products.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === index
                  ? "bg-princeton-blue text-white"
                  : "glass text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="glass rounded-xl p-5 h-full hover:border-princeton-blue/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">{skill.name}</h4>
                  <span className="text-sm text-princeton-blue font-mono">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-princeton-blue to-accent-orange rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                  />
                </div>

                {/* Tooltip */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm text-gray-400"
                  >
                    {skill.description}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            Also familiar with
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "LoRA",
              "Gephi",
              "WebGL",
              "Matplotlib",
              "VIM",
              "MCPs",
              "IntelliJ",
              "Eclipse",
              "Google Apps Script",
              "Black-Scholes",
              "Monte Carlo",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full bg-white/5 text-gray-400 text-sm hover:bg-white/10 hover:text-white transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
