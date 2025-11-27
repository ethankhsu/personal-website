"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

const photos = [
  {
    id: 1,
    src: "/images/baseball.jpg",
    alt: "Pitching at Miami",
    caption: "Season opener at Miami",
    category: "Baseball",
  },
  {
    id: 2,
    src: "/images/sf.jpg",
    alt: "Hawk Hill San Francisco",
    caption: "Hawk Hill, San Francisco",
    category: "Travel",
  },
  {
    id: 3,
    src: "/images/tokyo.jpg",
    alt: "Temple in Japan",
    caption: "Karate Kid moment in Japan",
    category: "Travel",
  },
  {
    id: 4,
    src: "/images/earthfromplane.jpg",
    alt: "Earth from plane",
    caption: "View from above Florida",
    category: "Travel",
  },
  {
    id: 5,
    src: "/images/taipei101.jpg",
    alt: "Taipei 101",
    caption: "New Year's 2025 in Taipei",
    category: "Travel",
  },
  {
    id: 6,
    src: "/images/moon.jpg",
    alt: "Moon at Hawk Hill",
    caption: "Pointing at the moon, Hawk Hill",
    category: "Travel",
  },
];

export default function Photos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="photos" className="py-32 relative overflow-hidden">
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
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Favorite </span>
            <span className="text-princeton-blue">Photos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Moments captured from campus life, travels, and everything in between.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Photo container */}
              <div className="relative h-full min-h-[200px] rounded-xl overflow-hidden">
                {/* Actual image */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white text-xs z-10">
                  {photo.category}
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex items-end p-4"
                >
                  <div>
                    <p className="text-white font-medium">{photo.caption}</p>
                    <p className="text-gray-300 text-sm">Click to view</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <svg
                  className="w-8 h-8"
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

              {/* Actual photo */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-medium">
                  {selectedPhoto.caption}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {selectedPhoto.category}
                </p>
              </div>

              {/* Navigation hint */}
              <p className="text-gray-500 text-sm text-center mt-4">
                Press ESC or click outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
