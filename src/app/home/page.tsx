'use client';

import Link from "next/link";
import ProjectItem from "../components/project";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-start justify-start min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4 text-amber-400">Welcome to My World</h1>
      <div className="flex flex-row items-center mt-8">
        <p className="text-3xl font-bold text-gray-600">Featured Project</p>
        <Link href="/projects" className="ml-8 px-5 py-2.5 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition duration-300">View All</Link>
      </div>
      <ProjectItem project={t.projects.projectList[0]} />
    </div>
  );
};

export default Home;