import { useState } from "react";
import { ChevronRight } from "lucide-react";

const experienceData = [
  {
    company: "Capgemini",
    role: "Senior Software Engineer",
    projects: [
      {
        name: "APPR NPR Project",
        duration: "Nov 2023 – Present",
        achievements: [
          "Engineered scalable, high-performance features for a next-gen platform serving 10K+ daily users, boosting overall performance by 35%.",
          "Architected robust state management with Redux Toolkit and Context API, cutting production bugs by 25% and improving app stability.",
          "Drove Agile MVP deliveries by rapidly translating business requirements into performant features, reducing time-to-market by 15%.",
          "Streamlined CI/CD workflows with Jenkins and GitHub Actions, automating build, test, and deployment pipelines to shorten release cycles by 20%.",
          "Utilized GitHub Copilot to accelerate feature development, automate repetitive tasks, and uphold clean, consistent, and maintainable code.",
          "Developed and optimized 30+ reusable, pixel-perfect UI components using React.js and Tailwind CSS, ensuring consistency and responsiveness across devices."
        ],
      },
      {
        name: "APPR Migration Project",
        duration: "Oct 2022 – Nov 2023",
        achievements: [
          "Spearheaded the migration of a high-traffic enterprise platform to React, achieving a 40% boost in performance and a 30% reduction in support tickets through optimized architecture and cleaner UI workflows.",
          "Engineered predictable, scalable global state management using Redux Toolkit and Context API, ensuring seamless data flow and maintainable app behavior.",
          "Built a reusable component library of 25+ production-grade modules, significantly reducing future development effort by 30% and promoting design consistency.",
          "Attained Lighthouse performance and accessibility scores above 90, delivering a faster and more inclusive user experience.",
          "Collaborated effectively with cross-functional global teams in Agile sprints, maintaining 100% on-time delivery across all milestones.",
          "Translated 10+ high-level design (HLD) modules into production-ready React UIs, ensuring zero misinterpretations and perfect alignment with business requirements."
        ],
      },
    ],
  },
];

const Experience = () => {
  const allProjects = experienceData.flatMap((exp) =>
    exp.projects.map((proj) => ({
      ...proj,
      company: exp.company,
      role: exp.role,
    }))
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = allProjects[activeIndex];

  return (
    <section id="experience" className="py-20 px-6 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="numbered-heading text-3xl font-bold mb-10 flex items-center gap-2 text-teal-600">
          <span className="text-primary font-mono text-xl">02.</span> Where I’ve Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-10 text-teal-600">
          {/* Tabs */}
          <div className="relative md:w-1/4">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-l border-gray-700 text-teal-800">
              {allProjects.map((proj, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative px-4 py-3 text-left font-mono transition-all duration-300 w-full text-teal-600 ${
                    activeIndex === index
                      ? "text-primary bg-primary/5 border-l-2 border-primary"
                      : "text-gray-400 hover:text-primary"
                  }`}
                >
                  {proj.name}
                </button>
              ))}
            </div>
          </div>

          {/* Panel */}
          <div
            key={activeIndex}
            className="flex-1 md:pl-8 animate-fadeIn transition-all duration-500"
          >
            <h3 className="text-xl font-semibold mb-2">
              {activeProject.role}{" "}
              <span className="text-primary">@ {activeProject.company}</span>
            </h3>
            <p className="text-gray-400 mb-6">{activeProject.duration}</p>
            <ul className="space-y-3">
              {activeProject.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-300 leading-relaxed group"
                >
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-white transition-colors">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
