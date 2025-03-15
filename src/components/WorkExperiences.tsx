"use client";
import { motion } from "framer-motion";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const workExperienceData = [
  {
    title: "Associate Professor & HOD",
    department: "Department of Artificial Intelligence & Data Science",
    institution: "St Joseph's College of Engineering and Technology, Palai",
    description: `As the Principal Investigator of the CERD-funded LASERARMED SURVEILLANCE ENGINE, our team secured a ₹21,000 grant and has published three international Scopus-indexed papers. We also achieved 5th place in the GenAI.Works #BuildwithAI International Hackathon, winning $750 and an NVIDIA graphics card. As an approved research supervisor under APJAKTU with 2 research scholars, I am actively involved in academia and serve on various statutory bodies of SJCET Palai.`,
    image: "./images/sjcet.png",
    date: "January 2024 - Present",
  },
  {
    title: "Associate Professor",
    department: "Department of Electronics & Communication Engineering",
    institution: "Musaliar College of Engineering and Technology, Pathanamthitta",
    description: `As the NBA Program Coordinator, successfully led the ECE department to NBA accreditation (2023-2026). As Dean of Research and an APJAKTU Research Guide, have published in an international Scopus-indexed conference. Secured ₹2,00,000 in seed funding from Kerala Startup Mission's IDEA Fest 2022 and showcased an AI-based offense detection demo at the Ente Keralam program by the Government of Kerala.`,
    image: "/images/mcp.png",
    date: "July 2019 - January 2024",
  },
  {
    title: "Assistant Professor",
    department: "",
    institution: "GISAT Kottayam",
    description: `Served as a PG Coordinator and have attended two international conferences.`,
    image: "/images/gisat.png",
    date: "June 2012 - July 2019",
  },
  {
    title: "Lecturer",
    department: "",
    institution: "Government Polytechnic College Nedumkandam",
    description: `Served as a guest lecturer for 8 months.`,
    image: "/images/gpcn.png",
    date: "8 Months",
  },
  {
    title: "Software Engineer",
    department: "",
    institution: "XUSLIMITS Kollam",
    description: `Worked as a software engineer for 3.5 years.`,
    date: "3.5 Years",
  },
];

export function WorkExperience() {
  return (
    <div id='experience' className="w-full flex flex-col items-center justify-center py-20 text-white">
      <h2 className="text-3xl md:text-5xltext-center font-castoro bg-clip-text text-transparent bg-gradient-to-b from-white to-black mb-12">WORK EXPERIENCES</h2>
      <StickyScroll
        content={workExperienceData.map((experience) => ({
          title: (<span className="font-castoro text-2xl text-[#ff3000]">{experience.title}</span>),
          description: (
            <div className="p-0 font-montaga text-white">
              <h3 className="text-2xl">{experience.institution}</h3>
              <p className="text-lg text-gray-300">{experience.department}</p>
              <p className="mt-2 text-lg font-montaga text-[#ff3000]">( {experience.date} )</p>
              <p className="mt-4 text-base leading-relaxed text-gray-300">{experience.description}</p>
            </div>
          ),
          content: experience.image ? (
            <motion.div
              className="relative w-full h-80 items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={experience.image}
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </motion.div>
          ) : null,
        }))}
      
      />
    </div>
  );
}

