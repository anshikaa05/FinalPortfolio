import React from "react";
import { BsAward } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
  {/* Floating background shapes */}
  <div className="absolute -z-10 top-0 left-0 w-2/3 h-2/3 bg-gradient-to-r from-teal-500/20 to-blue-500/10 rounded-full blur-3xl"></div>
  <div className="absolute -z-10 bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-pink-500/20 to-purple-500/10 rounded-full blur-3xl"></div>

  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-2x 00">
      About <span className="text-teal-400">Me</span>
    </h2>

    <div className="flex flex-col lg:flex-row gap-12">
      {/* Left column: Bio & Education */}
      <div className="lg:w-3/5 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
        >
          <h3 className="text-2xl font-bold mb-4 border-b border-teal-400 inline-block pb-1">Bio</h3>
            <p className="text-gray-200 leading-relaxed">
                 Hello! I’m Anshika Srivastava, a passionate Software Engineer with over 3 years of experience building high-performance and visually engaging web applications. My journey into web development began with curiosity — experimenting with layouts and interactivity made me realize how powerful the web becomes when creativity meets code.
            </p>
            <p className="text-gray-200 leading-relaxed">
            Since then, I’ve focused on crafting modern, user-centric experiences that combine clean design with performance. I’ve worked on enterprise projects and agile teams, developing expertise in React.js, JavaScript (ES6+), Redux Toolkit, and Tailwind CSS while writing clean, maintainable, and scalable code.
           </p>
                <p>
                  Driven by continuous learning and innovation, I strive to create impactful digital products that solve real-world problems and deliver meaningful user experiences.
                </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
        >
          <h3 className="text-2xl font-bold mb-4 border-b border-pink-400 inline-block pb-1">Education</h3>
          <div className="flex items-start gap-4">
            <BsAward className="text-teal-400 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-xl">B.Tech in Information Technology</h4>
              <p className="text-gray-300">ABES Engineering College (2018–2022) | CGPA: 8.7</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right column: Skills */}
      <div className="lg:w-3/4 bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/20 space-y-8">
  {/* Section Heading */}
  <h3 className="text-2xl font-bold mb-8 inline-block border-b-2 border-gradient-to-r from-teal-400 to-blue-400 pb-2 text-white">
    Skills & Expertise
  </h3>

  {/* Frontend Development */}
  <div className="transform hover:scale-[1.02] transition-transform bg-gradient-to-r from-blue-50/20 to-blue-100/10 p-4 rounded-xl shadow-md hover:shadow-xl">
    <h4 className="font-semibold text-lg mb-3 flex items-center text-blue-200">
      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
      Frontend Development
    </h4>
    <div className="flex flex-wrap gap-2.5">
      {["React", "React.js", "TailwindCSS","Redux-Toolkit", "Javascript(ES6+)","TypeScript"].map(skill => (
        <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 shadow hover:shadow-md transition-all">
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Cloud & DevOps */}
  <div className="transform hover:scale-[1.02] transition-transform bg-gradient-to-r from-cyan-50/20 to-cyan-100/10 p-4 rounded-xl shadow-md hover:shadow-xl">
    <h4 className="font-semibold text-lg mb-3 flex items-center text-cyan-200">
      <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
      Cloud & DevOps
    </h4>
    <div className="flex flex-wrap gap-2.5">
      {["CI/CD (GitHub Actions, Bitbucket Pipelines)", "Deployment automation", "Vite", "Agile/Scrum"].map(skill => (
        <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-600 shadow hover:shadow-md transition-all">
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Tools & Methods */}
  {/* <div className="transform hover:scale-[1.02] transition-transform bg-gradient-to-r from-orange-50/20 to-orange-100/10 p-4 rounded-xl shadow-md hover:shadow-xl">
    <h4 className="font-semibold text-lg mb-3 flex items-center text-orange-200">
      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
      Tools & Methods
    </h4>
    <div className="flex flex-wrap gap-2.5">
      {["Git", "SSG", "Formik", "Agile/Scrum", "OOP", "Bitbucket", "Webpack"].map(skill => (
        <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-600 shadow hover:shadow-md transition-all">
          {skill}
        </span>
      ))}
    </div>
  </div> */}

  {/* Backend & APIs */}
  <div className="transform hover:scale-[1.02] transition-transform bg-gradient-to-r from-green-50/20 to-green-100/10 p-4 rounded-xl shadow-md hover:shadow-xl">
    <h4 className="font-semibold text-lg mb-3 flex items-center text-green-200">
      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
      Backend & APIs
    </h4>
    <div className="flex flex-wrap gap-2.5">
      {["Node.js", "REST APIs", "JWT Authentication", "Axios", "Postman"].map(skill => (
        <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 shadow hover:shadow-md transition-all">
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Languages & Database */}
  <div className="transform hover:scale-[1.02] transition-transform bg-gradient-to-r from-purple-50/20 to-purple-100/10 p-4 rounded-xl shadow-md hover:shadow-xl">
    <h4 className="font-semibold text-lg mb-3 flex items-center text-purple-200">
      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
      Languages & Database
    </h4>
    <div className="flex flex-wrap gap-2.5">
      {["C++","Javascript(ES6+)","NoSQL","MySQL", "MongoDB"].map(skill => (
        <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-600 shadow hover:shadow-md transition-all">
          {skill}
        </span>
      ))}
      </div>
    </div>
  </div>
</div>
</div>

</section>
  );
};

export default About;
