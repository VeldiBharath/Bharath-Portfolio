import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="mt-5 text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Research Software Developer"
            subTitle="Indiana University Bloomington - (Jul 2024 - Present)"
            result="USA"
            des="Develop advanced statistical methods to enhance fMRI data analysis accuracy and reliability. Implement user-friendly software for functional brain feature extraction."
          />
          <ResumeCard
            title="Research Software Developer"
            subTitle="Indiana University Bloomington - (Jul 2024 - Present)"
            result="USA"
            des=" Program frontend and backend for behavioral data collection and conduct detailed data analysis to derive insights and support research findings."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Amazon SCOT Team- (Jul 2022 - Aug 2023)"
            result="INDIA"
            des="I’ve been part of developing applications to analyse, find, filter and store logs easily, troubleshooting risks in software, developing dashboards for team management."
          />
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Amazon Vendor Payment System Team (Jan 2022 - Jul 2022)"
            result="INDIA"
            des="Led seamless migration to power-efficient instances, enhanced system integration, resolved critical issues, contributed to services enhancement, reduced incident response time, 
            and implemented CI/CD pipelines for improved software delivery."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="mt-5 text-4xl font-bold">Trainer Experience</h2>
        </div>

        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="ACM-VNRVJIET (2020 - 2021)"
            result="INDIA"
            des="As a web development instructor, I taught essential front-end and back-end technologies, advanced frameworks, and best practices, empowering a global community to build robust web applications."
          />
          <ResumeCard
            title="ML/DL Lead Instructor"
            subTitle="ACM-VNRVJIET (2021 - 2022)"
            result="INDIA"
            des="As a machine learning instructor at ACM, I taught essential algorithms and advanced deep learning concepts, fostering collaboration and technology awareness in a global community. or areas of culture."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
