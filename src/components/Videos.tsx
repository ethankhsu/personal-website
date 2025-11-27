"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const videos = [
  {
    id: 1,
    title: "HOW PEOPLE VIEW YOU",
    description: "Insightful commentary on the authenticity of self-presentation",
    embedId: "guz7hc8RlfI",
    category: "Commentary",
  },
  {
    id: 2,
    title: "The Smash Ultimate Story: The Beginning",
    description: "Favorite documentary on my favorite video game scene of all time",
    embedId: "6r_YIdFxx_s",
    category: "Gaming",
  },
  {
    id: 3,
    title: "1000 Players Simulate Civilization: Rich & Poor",
    description: "My favorite and most engaging minecraft video I have watched",
    embedId: "ef568d0CrRY",
    category: "Gaming",
  },
  {
    id: 4,
    title: "A Bot that Scams People",
    description: "Great engineering youtube that always inspires me to create and engineer things",
    embedId: "LwOITqr_fz4",
    category: "Tech",
  },
];

const getYouTubeThumbnail = (embedId: string) =>
  `https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`;

export default function Videos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextVideo = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section id="videos" className="py-32 relative">
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
            Media
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Favorite </span>
            <span className="text-princeton-blue">Videos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Favorite content/videos that make me laugh/inspired/happy currently.
          </p>
        </motion.div>

        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Main Featured Video */}
          <div className="glass rounded-2xl overflow-hidden mb-6">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Video Embed Area */}
              <div
                className="relative aspect-video md:aspect-auto cursor-pointer group"
                onClick={() => setActiveVideo(videos[activeIndex])}
              >
                {/* YouTube thumbnail */}
                <img
                  src={getYouTubeThumbnail(videos[activeIndex].embedId)}
                  alt={videos[activeIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-princeton-blue/80 transition-colors"
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

              </div>

              {/* Video Info */}
              <div className="p-8 flex flex-col justify-center">
                <span className="text-princeton-blue text-sm font-medium uppercase tracking-wider">
                  {videos[activeIndex].category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                  {videos[activeIndex].title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {videos[activeIndex].description}
                </p>

                <motion.button
                  onClick={() => setActiveVideo(videos[activeIndex])}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-princeton-blue text-white rounded-xl font-medium w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Now
                </motion.button>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-between">
            {/* Video Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 flex-1">
              {videos.map((video, index) => (
                <motion.button
                  key={video.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden transition-all ${
                    index === activeIndex
                      ? "ring-2 ring-princeton-blue"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* YouTube thumbnail */}
                  <img
                    src={getYouTubeThumbnail(video.embedId)}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex gap-2 ml-4">
              <motion.button
                onClick={prevVideo}
                className="p-2 rounded-lg glass text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous video"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
              <motion.button
                onClick={nextVideo}
                className="p-2 rounded-lg glass text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next video"
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
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Video container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close video"
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

            {/* YouTube embed */}
            <div className="aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.embedId}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video info */}
            <div className="mt-4">
              <h3 className="text-white text-xl font-medium">
                {activeVideo.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {activeVideo.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
