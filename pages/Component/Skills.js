import { motion } from 'framer-motion'
import React from 'react'
const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex justify-center items-center rounded-full font-semibold text-light bg-dark py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-light xs:dark:text-light xs:font-bold'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}

            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-40 w-full text-center md:text-6xl sm:text-4xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen flex justify-center items-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vw] sm:h-[60vw] xs:h-[50vw] lg:bg-circularDarkLg lg:dark:bg-circularDarkLg md:bg-circularDarkMd md:dark:bg-circularDarkMd sm:bg-circularDarkSm sm:dark:bg-circularDarkSm '>
                <motion.div className='flex justify-center items-center rounded-full font-semibold text-light bg-dark p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:p-2 xs:text-sm'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="CSS" x="-20vw" y="2vw" />
                <Skill name="HTML" x="5vw" y="12vw" />
                <Skill name="JavaScript" x="20vw" y="-5vw" />
                <Skill name="ReactJs" x="11vw" y="-15vw" />
                <Skill name="NextJs" x="20vw" y="12vw" />
                <Skill name="MongoDB" x="-5vw" y="-12vw" />
                <Skill name="NodeJs" x="-26vw" y="-14vw" />
                <Skill name="ExpressJs" x="36vw" y="4vw" />
                <Skill name="TailwindCSS" x="-16vw" y="13vw" />
            </div>
        </>
    )
}

export default Skills