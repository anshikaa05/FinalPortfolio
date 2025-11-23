  import React from "react";
  import { motion } from "framer-motion";
  import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

  const Home = () => {
    const paragraph =
      "A passionate Frontend Developer with over 3 years of experience building scalable and performant web applications using React , Redux Toolkit and Tailwind CSS . I love working with web.";

    const words = paragraph.split(" ");

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    };

    const wordAnim = {
      hidden: { opacity: 0, y: 8 },
      show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    };

    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* Main content row */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* 🔹 Left: Profile Photo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 flex justify-center md:justify-start md:-ml-7"
          >
            <div className="relative w-56 h-56 md:w-80 md:h-80">
              <div className="absolute -inset-2 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-full opacity-70 blur-md animate-pulse"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm rounded-full p-2 border border-white/20 dark:border-white/10 shadow-xl">
                <div className="h-full w-full rounded-full overflow-hidden border-4 border-white/30 shadow-inner">
                  <img
                    src="/me.jpg"
                    alt="Anshika Srivastava"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 🔹 Right: Text content */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="max-w-2xl text-center md:text-right"
          >
            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 backdrop-blur-sm border border-primary/30 mb-6 shadow-sm">
              <div className="h-2.5 w-2.5 rounded-full bg-teal-800 animate-pulse"></div>
              <p className="text-sm font-medium text-teal-800">
                Available for hire
              </p>
            </div>

            {/* Name + Role */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-teal-400">Anshika Srivastava</span>
              <span className="block mt-3 text-2xl md:text-3xl">
                Software Development Engineer
              </span>
            </h1>

            {/* Animated paragraph */}
            <motion.p
              variants={container}
              initial="hidden"
              animate="show"
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordAnim}
                  className={`inline-block ${
                    ["React", "Redux", "Tailwind"].includes(word)
                      ? "text-teal-400 font-medium"
                      : ""
                  }`}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-2 justify-center md:justify-end mt-8 mb-10 "
            >
              {[
                ["React.js", "bg-blue-100 text-blue-700"],
                ["Javascript(ES6+)", "bg-gray-100 text-gray-700"],
                ["Redux-Toolkit", "bg-blue-100 text-blue-700"],
                
                ["TypeScript", "bg-blue-50 text-blue-600"],
                ["HTML/CSS", "bg-gray-100 text-gray-700"],
                ["TailwindCSS", "bg-teal-50 text-teal-600"],
              ].map(([skill, classes]) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-xs font-medium shadow-sm ${classes}`}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-5 justify-center md:justify-center "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.8 }}
            >
              <a
                href="https://drive.google.com/drive/folders/1R2KE2zzGctim7wUlfETyEX9c5XCNYI2W"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-teal-100 to-teal-500 text-teal-800 hover:shadow-lg transition-all duration-300 h-10 px-4 py-2 shadow-md">
                  View Resume →
                </button>
              </a>

              <a href="#contact">
                <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium border border-teal-400 text-teal-300 hover:bg-teal-900/20 transition-colors h-10 px-4 py-2 shadow-sm">
                  Let’s Connect
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* 🔹 Bottom Social Links */}
        <div className="absolute bottom-10 w-full max-w-6xl mx-auto px-6 flex items-center gap-5 justify-center md:justify-start">
          <a
                        href="https://github.com/anshikaa05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2  text-teal-200 hover:text-teal-600 transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/anshika-srivastava-3417831b0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-teal-200 hover:text-teal-600 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <BsLinkedin className="w-5 h-5" />
                      </a>
          <div className="h-8 w-px bg-white/20 mx-2" ></div>
          <a
            href="mailto:anshika.working2023@gmail.com"
            target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-teal-200 hover:text-teal-600 transition-colors"
                        aria-label="anshika.working2023@gmail.com"
          >
            anshika.working2023@gmail.com
          </a>
        </div>
      </section>
    );
  };

  export default Home;
