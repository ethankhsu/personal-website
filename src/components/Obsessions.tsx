"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const obsessions = [
  {
    category: "Anime",
    accent: "from-violet-500/20 to-purple-900/10",
    borderAccent: "border-violet-500/30",
    labelColor: "text-violet-400",
    items: [
      {
        title: "Frieren",
        subtitle: "Beyond Journey's End",
        image: "/images/obsessions/frieren.jpg",
      },
      {
        title: "My Hero Academia",
        subtitle: "Final Season",
        image: "/images/obsessions/mha.jpg",
      },
      {
        title: "Spy x Family",
        subtitle: "Season 3",
        image: "/images/obsessions/spyxfamily.jpg",
      },
    ],
  },
  {
    category: "Tech",
    accent: "from-princeton-blue/20 to-blue-900/10",
    borderAccent: "border-princeton-blue/30",
    labelColor: "text-blue-400",
    items: [
      {
        title: "Agentic AI",
        subtitle: "Building autonomous systems",
        emoji: "🤖",
      },
      {
        title: "Quantum Computing",
        subtitle: "Exploring the next frontier",
        emoji: "⚛️",
      },
      {
        title: "DeFi Expansion",
        subtitle: "Decentralized finance",
        emoji: "💰",
      },
    ],
  },
  {
    category: "Hobbies",
    accent: "from-accent-orange/15 to-amber-900/10",
    borderAccent: "border-accent-orange/30",
    labelColor: "text-accent-orange",
    items: [
      {
        title: "Video Editing",
        subtitle: "Creating content",
        emoji: "🎬",
      },
      {
        title: "Baseball",
        subtitle: "Varsity pitcher grind",
        emoji: "⚾",
      },
      {
        title: "Golf",
        subtitle: "The perfect transition sport",
        emoji: "⛳",
      },
    ],
  },
  {
    category: "Music Artists",
    accent: "from-emerald-500/15 to-green-900/10",
    borderAccent: "border-emerald-500/30",
    labelColor: "text-emerald-400",
    items: [
      {
        title: "The Kid Laroi",
        subtitle: "My #1 on Spotify, 5 years running",
        image: "/images/obsessions/KIDLAROI.jpg",
      },
      {
        title: "Justin Bieber",
        subtitle: "Basic, I know",
        emoji: "🎵",
      },
      {
        title: "Billie Eilish",
        subtitle: "Most talented artist right now",
        emoji: "🎧",
      },
    ],
  },
];

export default function Obsessions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="obsessions" className="py-32 relative overflow-hidden">
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
            Currently Into
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Current </span>
            <span className="text-princeton-blue">Obsessions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            What I'm watching, learning, and excited about right now.
          </p>
        </motion.div>

        {/* Magazine-style category rows */}
        <div className="space-y-10">
          {obsessions.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.12 }}
              className="flex gap-6 items-stretch"
            >
              {/* Vertical category label */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-10">
                <div
                  className={`text-xs uppercase tracking-[0.25em] font-semibold ${category.labelColor} whitespace-nowrap`}
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {category.category}
                </div>
                <div className={`w-px flex-1 mt-3 bg-gradient-to-b ${category.borderAccent.replace("border-", "from-").replace("/30", "/40")} to-transparent`} />
              </div>

              {/* Items — horizontal scroll on mobile, wrap on desktop */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.12 + itemIndex * 0.07,
                    }}
                    whileHover={{ y: -3 }}
                    className={`glass rounded-2xl overflow-hidden border ${category.borderAccent} transition-all hover:shadow-lg group cursor-default`}
                  >
                    {/* Card interior */}
                    <div className={`bg-gradient-to-br ${category.accent} p-4 flex items-center gap-3`}>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-dark-surface/80 border border-white/10 flex items-center justify-center text-xl flex-shrink-0 overflow-hidden">
                        {"image" in item ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          item.emoji
                        )}
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <h4 className="text-white font-semibold text-sm leading-tight truncate group-hover:text-white transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-xs mt-0.5 truncate leading-snug">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Update Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-600 text-xs mt-14"
        >
          Last updated: March 2026
        </motion.p>
      </div>
    </section>
  );
}
