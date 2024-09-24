import { motion } from "framer-motion";
import React from "react";

const Web2Data = [
  {
    id: 1,
    name: "CSS",
    x: "-20vw",
    y: "2vw",
  },
  {
    id: 2,
    name: "HTML",
    x: "5vw",
    y: "12vw",
  },
  {
    id: 3,
    name: "JavaScript",
    x: "20vw",
    y: "-5vw",
  },
  {
    id: 4,
    name: "ReactJs",
    x: "11vw",
    y: "-15vw",
  },
  {
    id: 5,
    name: "NextJs",
    x: "20vw",
    y: "12vw",
  },
  {
    id: 6,
    name: "MongoDB",
    x: "-5vw",
    y: "-12vw",
  },
  {
    id: 7,
    name: "NodeJs",
    x: "-26vw",
    y: "-14vw",
  },
  {
    id: 8,
    name: "ExpressJs",
    x: "36vw",
    y: "4vw",
  },
  {
    id: 9,
    name: "TailwindCSS",
    x: "-16vw",
    y: "13vw",
  },
  {
    id: 10,
    name: "Typescript",
    x: "27vw",
    y: "-13vw",
  },
  {
    id: 11,
    name: "NestJs",
    x: "-28vw",
    y: "-4vw",
  },
  {
    id: 12,
    name: "Redis",
    x: "-35vw",
    y: "4vw",
  },
];
const Web3Data = [
  {
    id: 1,
    name: "Web3.js",
    x: "-20vw",
    y: "2vw",
  },
  {
    id: 2,
    name: "Ether.js",
    x: "5vw",
    y: "12vw",
  },
  {
    id: 3,
    name: "Wagmi",
    x: "20vw",
    y: "-5vw",
  },
  {
    id: 4,
    name: "Rust",
    x: "11vw",
    y: "-15vw",
  },
  {
    id: 5,
    name: "Solana",
    x: "20vw",
    y: "12vw",
  },
  {
    id: 6,
    name: "Hyperledger",
    x: "-5vw",
    y: "-12vw",
  },
  {
    id: 7,
    name: "Hardhat",
    x: "-26vw",
    y: "-14vw",
  },
  {
    id: 8,
    name: "DeFi",
    x: "36vw",
    y: "4vw",
  },
  {
    id: 9,
    name: "Nft",
    x: "-16vw",
    y: "13vw",
  },
  {
    id: 10,
    name: "Solidity",
    x: "27vw",
    y: "-13vw",
  },
  {
    id: 11,
    name: "Dex",
    x: "-28vw",
    y: "-4vw",
  },
  {
    id: 12,
    name: "Truffle",
    x: "-35vw",
    y: "4vw",
  },
];

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex justify-center items-center rounded-full font-semibold  text-light bg-dark py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-light xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-40 w-full text-center md:text-6xl sm:text-4xl md:mt-32">
        Web <span className="text-primary dark:text-priaryDark cursor-pointer">2.0</span>  Skills
      </h2>
      <div className="w-full h-screen flex justify-center items-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vw] sm:h-[60vw] xs:h-[50vw] lg:bg-circularDarkLg lg:dark:bg-circularDarkLg md:bg-circularDarkMd md:dark:bg-circularDarkMd sm:bg-circularDarkSm sm:dark:bg-circularDarkSm ">
        <motion.div
          className="flex justify-center items-center rounded-full font-semibold text-light bg-dark p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:p-2 xs:text-sm"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {Web2Data &&
          Web2Data?.map((skill) => {
            return (
              <Skill
                key={skill.id}
                name={skill.name}
                x={skill.x}
                y={skill.y}
              />
            );
          })}
      </div>
    </>
  );
};
const Web3Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-40 w-full text-center md:text-6xl sm:text-4xl md:mt-32">
        Web <span className="text-primary dark:text-priaryDark cursor-pointer">3.0</span> Skills
      </h2>
      <div className="w-full h-screen flex justify-center items-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vw] sm:h-[60vw] xs:h-[50vw] lg:bg-circularDarkLg lg:dark:bg-circularDarkLg md:bg-circularDarkMd md:dark:bg-circularDarkMd sm:bg-circularDarkSm sm:dark:bg-circularDarkSm ">
        <motion.div
          className="flex justify-center items-center rounded-full font-semibold text-light bg-dark p-4 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:p-2 xs:text-sm"
          whileHover={{ scale: 1.05 }}
        >
          Blockchain
        </motion.div>
        {Web3Data &&
          Web3Data?.map((skill) => {
            return (
              <Skill
                key={skill.id}
                name={skill.name}
                x={skill.x}
                y={skill.y}
              />
            );
          })}
      </div>
    </>
  );
};

export {
    Web3Skills,
    Skills
};
