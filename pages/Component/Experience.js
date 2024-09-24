import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcons from "./LiIcons";

const experienceData = [
  {
    id: 1,
    designation: "Software Engineer",
    company: "@Netixsol",
    companyUrl: "https://www.netixsol.com/",
    desc: "As a Junior Software Engineer, I have extensive experience working on projects related to Web3 and Blockchain. My role involved solving complex problems for Web3-based web applications, contributing to both front-end and back-end development, and integrating back-end services with smart contracts.",
    years: "10/2023 - present",
    city: "Faisalabad",
  },
  {
    id: 2,
    designation: "Associate Software Engineer",
    company: "@FEAT Technologies",
    companyUrl: "https://www.linkedin.com/company/feat-technologies-private-limited/?originalSubdomain=pk",
    desc: "Developed and implemented a software solution for the food industry based on HACCP (Hazard Analysis & Critical Control Point) principles. The project included designing a comprehensive flowchart and Entity-Relationship (ER) diagram and developing a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application to automate and digitize food chain processes.",
    years: "1/2023 - 10/2023",
    city: "Faisalabad",
  },
  {
    id: 3,
    designation: "Junior Software Engineer",
    company: "@Devixsol",
    companyUrl: "https://www.devixsol.com/",
    desc: "Developed both front-end and back-end, integrated them to provide a seamless user experience. The platform allows companies to register, receive credits based on pricing plans, post job openings, and administer online tests to candidates.",
    years: "5/2022 - 12/2022",
    city: "Faisalabad",
  },
];

const Detail = ({ designation, city, years, company, desc, companyUrl }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex justify-between flex-col items-start md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-white">
          {designation}{" "}
          <a
            href={companyUrl}
            target="_blank"
            className="text-primary dark:text-priaryDark cursor-pointer"
          >
            {company}
          </a>{" "}
        </h3>
        <span className="text-lg sm:text-base xs:text-sm text-dark/75  dark:text-light/75">
          {years} | {city && `${city}`}
        </span>
        <div className="flex items-center">
          <span className="text-lg sm:text-base xs:text-sm font-medium text-dark  dark:text-light">
            {desc}
          </span>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-64 lg:mt-36 xs:mt-24 sm:mb-64">
      <div className="flex items-center justify-center">
        <h2 className="font-bold text-8xl m-32 text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>
      </div>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 h-full bg-dark dark:bg-light origin-top top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-6 xs:ml-8">
          {experienceData &&
            experienceData?.map((exp) => {
              return (
                <Detail
                  key={exp.id}
                  designation={exp.designation}
                  desc={exp.desc}
                  years={exp.years}
                  company={exp.company}
                  city={exp.city}
                  companyUrl={exp.companyUrl}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
