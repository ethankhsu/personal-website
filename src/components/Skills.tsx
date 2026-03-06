"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

type Tier = "expert" | "proficient" | "familiar";

const tierConfig: Record<Tier, { label: string; description: string; chipClass: string; dot: string }> = {
  expert: {
    label: "Expert",
    description: "Shipped to production",
    chipClass: "text-blue-300 border-princeton-blue/50 bg-princeton-blue/15 hover:bg-princeton-blue/25",
    dot: "bg-princeton-blue",
  },
  proficient: {
    label: "Proficient",
    description: "Used in real projects",
    chipClass: "text-gray-200 border-white/20 bg-white/8 hover:bg-white/12",
    dot: "bg-blue-400",
  },
  familiar: {
    label: "Familiar",
    description: "Can pick up quickly",
    chipClass: "text-gray-500 border-white/10 bg-white/3 hover:bg-white/8 hover:text-gray-400",
    dot: "bg-gray-600",
  },
};

const skillCategories = [
  {
    name: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", tier: "expert" as Tier, description: "Primary language for AI/ML work" },
      { name: "JavaScript", tier: "expert" as Tier, description: "Web development & Node.js" },
      { name: "C++", tier: "proficient" as Tier, description: "Quantitative systems & performance" },
      { name: "Java", tier: "proficient" as Tier, description: "Data structures & algorithms" },
      { name: "C#", tier: "proficient" as Tier, description: "Unity game development" },
      { name: "SQL", tier: "proficient" as Tier, description: "Database queries & analytics" },
      { name: "R", tier: "familiar" as Tier, description: "Statistical analysis" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: "🛠️",
    skills: [
      { name: "PyTorch", tier: "expert" as Tier, description: "Deep learning models" },
      { name: "NumPy / Pandas", tier: "expert" as Tier, description: "Data manipulation & analysis" },
      { name: "NVIDIA NeMo", tier: "proficient" as Tier, description: "LLM training & deployment" },
      { name: "React.js", tier: "proficient" as Tier, description: "Frontend development" },
      { name: "NetworkX", tier: "proficient" as Tier, description: "Graph analysis" },
      { name: "Unity", tier: "familiar" as Tier, description: "Game development" },
      { name: "OpenAPI", tier: "familiar" as Tier, description: "API specifications" },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "⚙️",
    skills: [
      { name: "Git", tier: "expert" as Tier, description: "Version control" },
      { name: "AWS SageMaker", tier: "expert" as Tier, description: "ML model deployment" },
      { name: "Claude Code", tier: "expert" as Tier, description: "AI-assisted development" },
      { name: "Docker", tier: "proficient" as Tier, description: "Containerization" },
      { name: "VS Code", tier: "proficient" as Tier, description: "Primary IDE" },
      { name: "Azure", tier: "familiar" as Tier, description: "Cloud services" },
      { name: "Selenium", tier: "familiar" as Tier, description: "Automated testing" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const currentSkills = skillCategories[activeCategory].skills;
  const tiers: Tier[] = ["expert", "proficient", "familiar"];

  return (
    <section id="skills" className="py-32 relative">
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

        {/* Tiered Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {tiers.map((tier, tierIndex) => {
            const config = tierConfig[tier];
            const tierSkills = currentSkills.filter((s) => s.tier === tier);
            if (tierSkills.length === 0) return null;

            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                {/* Tier Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${config.dot}`} />
                  <span className="text-white font-semibold text-sm">{config.label}</span>
                  <span className="text-gray-600 text-xs ml-auto hidden lg:block">
                    {config.description}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {tierSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <motion.span
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-sm font-medium cursor-default transition-all ${config.chipClass}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.span>

                      {/* Tooltip */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-dark-surface border border-white/10 rounded-lg text-xs text-gray-300 whitespace-nowrap z-10 pointer-events-none shadow-xl"
                        >
                          {skill.description}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-white/10" />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Also Familiar With */}
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
