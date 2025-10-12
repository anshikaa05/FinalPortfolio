import React from "react";
import { BsAward } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden  text-white">
      {/* Background blobs */}
      <div className="absolute -z-10 top-1/2 left-0 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="section-heading text-center mb-16 text-4xl font-bold">
          About <span className="gradient-text">Me</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Bio + Education */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary/30 pb-2">
                Bio
              </h3>
              <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
                <p>
                  Anshika Srivastava is a passionate Software Engineer with over 3 years of experience specializing in front-end development.
                </p>
                <p>
                  With a strong foundation in modern web technologies and a keen eye for detail, I strive to create seamless, user-friendly applications that solve real-world problems.
                </p>
                <p>
                  I'm always eager to learn new technologies and methodologies, constantly pushing the boundaries of what I can accomplish.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mt-12 mb-6 inline-block border-b-2 border-primary/30 pb-2">
                Education
              </h3>
              <div className="rounded-lg border bg-card text-card-foreground glass-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-1.5 bg-gradient-to-r from-primary to-accent"></div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full mt-1">
                      <BsAward className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">
                        B.Tech in Information Technology
                      </h4>
                      <p className="font-bold mt-1">
                        ABES Engineering College (2018–2022)
                      </p>
                      <p className="font-bold text-l">
                        CGPA:8.8
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Expertise */}
          <div className="lg:w-1/2 bg-secondary/5 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-secondary/10 space-y-8">
            <h3 className="text-2xl font-bold mb-8 inline-block border-b-2 border-accent/30 pb-2">
              Skills & Expertise
            </h3>

            {/* Skill Groups */}
            <div className="space-y-6">
              {/* Frontend */}
              <div className="transform hover:scale-[1.01] transition-transform">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Frontend Development
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["React", "React.js", "TailwindCSS","Redux-Toolkit", "Javascript(ES6+)","TypeScript","Styled Components","React Query","Context API","React Hooks", "HTML/CSS"].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 shadow hover:shadow-md transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              

            

              {/* Cloud & DevOps */}
              <div className="transform hover:scale-[1.01] transition-transform">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  Cloud & DevOps
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["CI/CD (GitHub Actions, Bitbucket Pipelines)", "Deployment automation", " Vite", "Agile/Scrum"].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-600 shadow hover:shadow-md transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Methods */}
              <div className="transform hover:scale-[1.01] transition-transform">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
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
              </div>
              {/*Backend */}
              <div className="transform hover:scale-[1.01] transition-transform">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Backend and APIs
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["Node.js", "REST APIs", "JWT Authentication", " Axios", "Postman"].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 shadow hover:shadow-md transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
                {/* Database */}
              <div className="transform hover:scale-[1.01] transition-transform">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Database Technologies
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["MySQL", "MongoDB"].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-600 shadow hover:shadow-md transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
