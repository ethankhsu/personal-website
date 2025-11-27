"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const obsessions = [
  {
    category: "Anime",
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
    items: [
      {
        title: "Agentic AI",
        subtitle: "Building autonomous systems",
        emoji: "🤖",
      },
      {
        title: "Quantum Computing",
        subtitle: "Exploring the next frontier of computation",
        emoji: "⚛️",
      },
      {
        title: "DeFi Expansion",
        subtitle: "Decentralized finance innovation",
        emoji: "💰",
      },
    ],
  },
  {
    category: "Hobbies",
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
        subtitle: "The perfect transition sport after baseball",
        emoji: "⛳",
      },
    ],
  },
  {
    category: "Music Artists",
    items: [
      {
        title: "The Kid Laroi",
        subtitle: "My #1 artist on Spotify the last 5 years",
        image: "/images/obsessions/KIDLAROI.jpg",
      },
      {
        title: "Justin Bieber",
        subtitle: "Basic, I know",
        emoji: "🎵",
      },
      {
        title: "Billie Eilish",
        subtitle: "The most talented artist right now",
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

        {/* Obsessions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {obsessions.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-gray-700" />
                {category.category}
              </h3>

              {/* Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + itemIndex * 0.1,
                    }}
                    whileHover={{ x: 5 }}
                    className="glass rounded-xl p-4 flex items-center gap-4 cursor-default hover:border-white/20 transition-all"
                  >
                    {/* Icon - Image or Emoji */}
                    <div
                      className="w-14 h-14 rounded-xl bg-dark-surface border border-white/10 flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden"
                    >
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

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium truncate">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm truncate">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="text-gray-600"
                      whileHover={{ x: 3 }}
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
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
          className="text-center text-gray-500 text-sm mt-12"
        >
          Last updated: November 2025
        </motion.p>
      </div>
    </section>
  );
}
