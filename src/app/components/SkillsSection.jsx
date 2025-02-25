"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Python",
  },
  {
    id: 2,
    title: "JavaScript",
  },
  {
    id: 3,
    title: "TypeScript",
  },
  {
    id: 4,
    title: "HTML5",
  },
  {
    id: 5,
    title: "CSS3",
  },
  {
    id: 6,
    title: "React",
  },
  {
    id: 7,
    title: "Node.js",
  },
  {
    id: 8,
    title: "Git",
  },
  {
    id: 9,
    title: "Tailwind",
  },
  {
    id: 10,
    title: "Express",
  },
  {
    id: 11,
    title: "Swagger",
  },
  {
    id: 12,
    title: "MSSQL",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <ul className="text-white flex flex-wrap flex-row justify-center items-center gap-2 py-6">
        {projectsData.map((project, index) => (
          <div key={project.id} className="text-white border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer">
            {project.title}
          </div>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
