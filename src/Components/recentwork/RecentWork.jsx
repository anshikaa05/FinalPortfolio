import React from "react";
import { motion } from "framer-motion";
import "./RecentWork.css";

const projects = [
  {
    id: 1,
    image: "/project1.png",
    title: "Minion Translator",
    description:
      "A fun translator app that converts English text into Minion language using a translation API.",
    github: "https://github.com/iam-shreyasthana/minion-translator",
    demo: "https://miniontranslatesite.netlify.app/",
  },
  {
    id: 2,
    image: "/project2.png",
    title: "Emoji Interpreter",
    description:
      "A React app that interprets emoji meanings instantly with smooth user interaction.",
    github: "https://github.com/iam-shreyasthana/emoji-interpreter",
    demo: "https://emoji-interpreter-site.netlify.app/",
  },
  {
    id: 3,
    image: "/project3.png",
    title: "Exceptional Books",
    description:
      "A responsive React app to browse and manage books with seamless UI and local storage.",
    github: "https://github.com/iam-shreyasthana/exceptional-books",
    demo: "https://exceptional-books-site.netlify.app/",
  },
];

const RecentWork = () => {
  return (
    <section id="recentWork" className="recentwork section">
      <h2 className="section__title">Projects</h2>

      <div className="recentwork__container">
        {projects.map(({ id, image, title, description, github, demo }) => (
          <motion.article
            key={id}
            className="recentwork__item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
          >
            <div className="recentwork__image">
              <img src={image} alt={title} />
            </div>

            <div className="recentwork__content">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="recentwork__links">
                <a href={github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href={demo} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default RecentWork;
