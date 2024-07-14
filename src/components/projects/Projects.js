import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
  projectTen,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND SHARE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="News Research Tool"
          des=" A LLM Application made of Word Embeddings, Vector Database, Semantic search, LangChain, OpenAI and Streamlit."
          src={projectOne}
          gitlink="https://github.com/VeldiBharath/News-Research-Tool-for-Equity-Research-Analysts/tree/main"
          nogit={false}
        />
        <ProjectsCard
          title="Road Accident Data Analysis"
          des=" End-to-end data analysis projects using Power BI, DAX (Data Analysis Expressions), Excel, Power Query, SQL."
          src={projectTwo}
          gitlink={
            "https://github.com/VeldiBharath/Road-Accident-Data-Analysis-using-POWERBI"
          }
          nogit={false}
        />
        <ProjectsCard
          title="Netflix Clone using Bubble.IO"
          des="Created a video streaming platform without writing a line of code, using Bubble's visual web editor."
          src={projectThree}
          gitlink={
            "https://github.com/VeldiBharath/Netflix-Clone-using-Bubble.IO"
          }
          nogit={false}
        />
        <ProjectsCard
          title="Home Credit Risk Prediction"
          des=" A kaggle competition involving Machine Learning and Deep Learning algorithms."
          src={projectFour}
          gitlink={"https://github.com/VeldiBharath/Home-credit-default-risk"}
          nogit={false}
        />
        <ProjectsCard
          title="TMDB Movie Recommendation System"
          des=" Developed a TMDB movie recommendation system using content, collaborative and hybrid filtering techniques."
          src={projectFive}
          gitlink={"https://github.com/VeldiBharath/MovieRecommendationRender"}
          nogit={false}
        />
        <ProjectsCard
          title="E-Commerce: Student Smart Rentals"
          des="The Rental & Services
          Management System project seeks to streamline the moving-in process for
          both in-state and overseas students."
          src={projectSix}
          gitlink={"https://github.com/VeldiBharath/Student-Smart-Rentals"}
          nogit={false}
        />
        <ProjectsCard
          title="Chatbot for Covid Information"
          des="Developed a Covid information chatbot using LLM, RASA, and LangChain for real-time assistance."
          src={projectSeven}
          nogit={true}
        />
        <ProjectsCard
          title="Amazon Employee Team Management"
          des="Developed a Team dashboard utilizing Data Management with AWS Services and SQL, Visualization and Reporting with QuickSight."
          src={projectEight}
          nogit={true}
        />
        <ProjectsCard
          title="Poisonous Mushroom Detection"
          des="Developed a mushroom classification system using traditional ML models and Deep Learning techniques like CNNs."
          src={projectNine}
          gitlink={
            "https://github.com/VeldiBharath/AdvancedMushroomClassification"
          }
          nogit={false}
        />
        <ProjectsCard
          title="E-Commerce Sports Application"
          des="Led the development of a MEAN Stack Sports application with enhanced user engagement after the platform was live, catering to 500+ active users in college."
          src={projectTen}
          gitlink={"https://github.com/VeldiBharath/EsportzApplication"}
          nogit={false}
        />
      </div>
    </section>
  );
};

export default Projects;
