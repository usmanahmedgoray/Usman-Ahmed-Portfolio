import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcons from "./LiIcons";
import { certificateData } from "@/utils/utils";

const Detail = ({
  title,
  issueDate,
  certificateCompany,
  desc,
  certificateURL,
}) => {
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
          {title}{" "}
          <a
            href={certificateURL}
            target="_blank"
            className="text-primary dark:text-priaryDark cursor-pointer"
          >
            {certificateCompany}
          </a>{" "}
        </h3>
        <span className="text-lg sm:text-base xs:text-sm text-dark/75  dark:text-light/75">
          {issueDate}
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

const Certificate = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-64 lg:mt-36 xs:mt-24 sm:mb-64">
      <div className="flex items-center justify-center">
        <h2 className="font-bold text-8xl m-32 text-center md:text-6xl xs:text-4xl md:mb-16">
          Certificate & Awards
        </h2>
      </div>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 h-full bg-dark dark:bg-light origin-top top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-6 xs:ml-8">
          {certificateData &&
            certificateData?.map((cer) => {
              return (
                <Detail
                  key={cer.id}
                  title={cer.title}
                  desc={cer.desc}
                  issueDate={cer.issueDate}
                  certificateCompany={cer.certificateCompany}
                  certificateURL={cer.certificateURL}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
