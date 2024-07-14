import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MS in Computer Science"
            subTitle="Indiana University Bloomington (2023 - 2025)"
            result="3.96/4"
            des="Mastering the field of Computer Science with a technical, highly marketable M.S. in Computer Science from IU with rewarding courses like Applied Machine Learning, 
            Applied Algorithms, Software Engineering, Database Management Systems, System and Network Protocol Security, Human Computer Interaction, Computer Networks."
          />
          <ResumeCard
            title="Bachelors of Technology in Information Technology"
            subTitle="VNRVJIET (2018 - 2022)"
            result="9.3/10"
            des="Acquainted with knowledge to contribute theoretical, mathematical and scientific foundations which are flag stones on which 
            Information Technologies are built, and engage in perennial learning by anticipating changing trends in Information Technology."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
