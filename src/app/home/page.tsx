'use client';

import Link from "next/link";
import ProjectItem from "../components/projectItem";
import { useLanguage } from "../context/LanguageContext";
import WorkHistoryItem from "../components/workhistoryItem";
import { SKILLS } from "../utils/skills";

const Home = () => {
  const { t } = useLanguage();
  type SkillType = (typeof SKILLS)[keyof typeof SKILLS];

  // Get 5 random skills to display on the home page
  const allSkills = Object.values(SKILLS);
  const randomSkills = allSkills.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className="flex flex-col items-start justify-start min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4 text-amber-400">Welcome to My World</h1>
      <div className="flex flex-row items-center mt-8">
        <p className="text-2xl font-bold text-gray-600">Featured Project</p>
        <Link href="/projects" className="ml-8 px-5 py-2.5 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition duration-300">View All</Link>
      </div>
      <ProjectItem project={t.projects.projectList[0]} />

      <div className="flex flex-row items-center mt-8">
        <p className="text-2xl font-bold text-gray-600">Last Worked Company</p>
        <Link href="/work-history" className="ml-8 px-5 py-2.5 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition duration-300">View All</Link>
      </div>
      <WorkHistoryItem historyItem={t.workHistory.workHistoryList[0]} />

      <div className="flex flex-row items-center mt-8">
        <p className="text-2xl font-bold text-gray-600">Mastered Skills</p>
        <Link href="/skills" className="ml-8 px-5 py-2.5 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition duration-300">View All</Link>
      </div>
      <div className="flex flex-wrap gap-4 mt-6">
        {randomSkills.map((skill: SkillType) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center w-24 h-24 bg-amber-200 border border-amber-300 rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg group p-2"
          >
            <div className="text-2xl">
              {skill.icon.large}
            </div>

            <span className="text-[10px] font-bold uppercase tracking-tighter text-black mt-2 text-center leading-none">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;