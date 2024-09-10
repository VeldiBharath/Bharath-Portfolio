import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="mt-10 text-4xl font-bold">Awards and Honours</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Rookie Award"
            subTitle="Amazon"
            result="INDIA"
            des="Awarded for active development progress and debugging 500+ issues real quick."
          />
          <ResumeCard
            title="Coding Championship"
            subTitle="Scaler"
            result="INDIA"
            des="Winners of 2022 Coding Championship for solving real time problems with effective and efficient implementations in Python."
          />
          <ResumeCard
            title="EDA Videothon"
            subTitle="Scaler"
            result="INDIA"
            des="Secured top 10 in Videothon 2021(Machine Learning) conducted by Scaler Academy for performing extensive Exploratory Data Analysis."
          />
          <ResumeCard
            title="My Big Idea Competition"
            subTitle="VNRVJIET - EDCELL"
            result="INDIA"
            des="Secured first position in MY BIG IDEA COMPETITION 2K18 conducted by ED-CELL for
            presenting an idea to reduce food wastage."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="mt-10 text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Structures and Algorithms"
            subTitle="Scaler"
            result="Scaler Academy"
            des="Master Data Structures and Algorithms (DSA) by solving over 500+ problems. Applied them to real-world scenarios via projects and competitions."
          />
          <ResumeCard
            title="
            The Ultimate ReactJS Course"
            subTitle="Udemy"
            result="Udemy"
            des="Master advanced React development by building 10+ projects, including two large apps. Learn Next.js router, Server Components, state management, 
            custom hooks, React Router, and Redux. Gain job-ready skills in authentication, data sorting, pagination, dark mode, and styling with Tailwind CSS."
          />
          <ResumeCard
            title="
            AWS Cloud Practitioner Certification(CLF-C01)"
            subTitle="Udemy"
            result="Udemy"
            des="Certified AWS Cloud Practitioner with comprehensive knowledge of AWS cloud concepts, services, security, architecture, pricing, and support."
          />
          <ResumeCard
            title="
            Deep learing Specialization"
            subTitle="DeepLearning.AI"
            result="Coursera"
            des="Build and train neural networks, apply CNNs and RNNs, use TensorFlow, HuggingFace for NLP, and optimize DL applications."
          />
          <ResumeCard
            title="
            Generative AI Fundamentals"
            subTitle="Databricks"
            result="Coursera"
            des="Explore Generative AI fundamentals, implement GANs and VAEs, apply transfer learning, and use frameworks like PyTorch."
          />
          <ResumeCard
            title="Natural Language Processing"
            subTitle="Great Learning"
            result="Great Learning Academy"
            des="Introduce Natural Language Processing (NLP) fundamentals, implement tokenization, perform sentiment analysis, 
            and apply transformer models like BERT for advanced text processing tasks."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
