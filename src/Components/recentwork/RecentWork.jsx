import React from "react";
import { motion } from "framer-motion";
import "./RecentWork.css";

const projects = [
  {
    id: 1,
    image: "/project1.png",
    title: "BuyBridge",
    description:
      "BuyBridge is your all-in-one platform to discover, explore, and connect with curated products and professional communities. Whether you’re browsing trending items, managing your cart, or networking with like-minded professionals, ConnectHub makes it simple, secure, and seamless. ",
    github: "https://github.com/anshikaa05/BuyBridge",
    demo: "https://anshikaa05.github.io/BuyBridge/",
  },
  {
    id: 2,
    image: "/project2.png",
    title: "Personal Portfolio",
    description:
      "Designed and developed a responsive personal portfolio using React (Vite) and Tailwind CSS to highlight my projects and experience. Integrated smooth animations with Framer Motion, implemented reusable components, and optimized for performance and accessibility. Deployed seamlessly on Vercel.",
    github: "https://github.com/anshikaa05/FinalPortfolio",
    demo: "https://final-portfolio-eta-liart.vercel.app/",
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
