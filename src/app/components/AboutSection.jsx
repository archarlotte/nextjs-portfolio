"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack web developer with over three years of experience in building scalable
            and high-performance web applications. I have experience working with JavaScript, TypeScript, React,
            Redux, Node.js, Express, PostgreSQL, HTML, CSS, and Git, with a strong ability to work across both
            frontend and backend systems. I have a passion for creating seamless user experiences and writing clean,
            maintainable code. I’m experienced in integrating complex backend services with dynamic frontend components
            and have worked in Agile environments, actively contributing to sprint planning, collaboration, and timely
             project delivery. Always eager to learn, I continuously seek opportunities to refine my skills and contribute to innovative, impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
