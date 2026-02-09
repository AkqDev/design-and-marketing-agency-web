import React from "react";
import { motion } from "framer-motion";

// Asset Imports
import ayyan from "../assets/ayyan.png";
import ashraf from "../assets/ashraf.png";
import khalid from "../assets/khalid.png";
import Amina from "../assets/Amina.png";
import akbar from "../assets/akbar.png";
import aman from "../assets/aman.png";
import shamsa from "../assets/shamsa.png";
import arslan from "../assets/arslan.png";
import zulqarnain from "../assets/zulqarnain.png";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bgColor: "#9D0A0A" | "black";
}

// Define members for first row (5 items) and second row (4 items)
const firstRowMembers: TeamMember[] = [
  { name: "Adnan Malick", role: "CEO | Managing Director", image: ayyan, bgColor: "#9D0A0A" },
  { name: "Malik Ashraf Nawaz", role: "Brand Ambassador", image: ashraf, bgColor: "black" },
  { name: "M. Khalid Fareed", role: "Senior Business Strategy Planner", image: khalid, bgColor: "#9D0A0A" },
  { name: "Amina Gulzar", role: "Branding Specialist", image: Amina, bgColor: "black" },
  { name: "Mohammad Akbar Qureshi", role: "Full-Stack Developer", image: akbar, bgColor: "#9D0A0A" },
];

const secondRowMembers: TeamMember[] = [
  { name: "Arslan Tahir", role: "Operational Incharge", image: arslan, bgColor: "black" },
  { name: "Zulqarnain Bashir", role: "Graphics Designer", image: zulqarnain, bgColor: "#9D0A0A" },
  { name: "Aman Ullah Takhleeq", role: "Business Manager", image: aman, bgColor: "black" },
  { name: "Shamsa Andleeb Akhtar", role: "Graphics Designer", image: shamsa, bgColor: "#9D0A0A" },
];

// Animation Variants with proper typing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const
    } 
  },
};

const TeamSection: React.FC = () => {
  return (
    <div className="w-full h-auto md:min-h-screen bg-gray-100 !py-20 rounded-[30px] overflow-hidden">
      <motion.div
        className="!mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 
          className="text-4xl md:text-6xl font-black tracking-tight uppercase italic text-gray-900"
          style={{ textShadow: "2px 4px 10px rgba(0,0,0,0.1)" }}
        >
          Our <span className="text-[#9D0A0A]">Team</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-16 !p-10 bg-gray-100">
        {/* First Row - 5 Members */}
        <motion.div 
          className="flex flex-wrap justify-center gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {firstRowMembers.map((member, index) => (
            <motion.div
              key={`first-${index}`}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative w-64 h-[380px] md:h-[330px] flex flex-col items-center"
            >
              {/* Main Pill Background */}
              <div
                className="absolute inset-0 rounded-[100px] !pt-4 transition-all duration-300"
                style={{ 
                  backgroundColor: member.bgColor,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.3), inset 0px -5px 15px rgba(255,255,255,0.1)"
                }}
              >
                {/* Name & Role Container */}
                <div className="!my-5 text-center !px-6">
                  <h3
                    className="text-xl text-white font-bold font-[poppins] drop-shadow-md"
                    style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm opacity-90 text-white font-[poppins] font-medium leading-tight"
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Image Container */}
              <div className="absolute bottom-3 md:bottom-5 w-full flex justify-center">
                <div className="relative !mb-[-20px]">
                  {/* White Circular Backdrop/Border effect */}
                  <div 
                    className="w-63 h-70 rounded-full p-1 bg-white/10 backdrop-blur-sm shadow-2xl"
                    style={{ boxShadow: "0px 10px 25px rgba(0,0,0,0.4)" }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-transparent">
                      <motion.img
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - 4 Members */}
        <motion.div 
          className="flex flex-wrap justify-center gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {secondRowMembers.map((member, index) => (
            <motion.div
              key={`second-${index}`}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative w-64 h-[380px] md:h-[330px] flex flex-col items-center"
            >
              {/* Main Pill Background */}
              <div
                className="absolute inset-0 rounded-[100px] !pt-4 transition-all duration-300"
                style={{ 
                  backgroundColor: member.bgColor,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.3), inset 0px -5px 15px rgba(255,255,255,0.1)"
                }}
              >
                {/* Name & Role Container */}
                <div className="!my-5 text-center !px-6">
                  <h3
                    className="text-xl text-white font-bold font-[poppins] drop-shadow-md"
                    style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm opacity-90 text-white font-[poppins] font-medium leading-tight"
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Image Container */}
              <div className="absolute bottom-5 w-full flex justify-center">
                <div className="relative !mb-[-20px]">
                  {/* White Circular Backdrop/Border effect */}
                  <div 
                    className="w-63 h-70 rounded-full p-1 bg-white/10 backdrop-blur-sm shadow-2xl"
                    style={{ boxShadow: "0px 10px 25px rgba(0,0,0,0.4)" }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-transparent">
                      <motion.img
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;