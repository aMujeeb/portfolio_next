'use client';
import { useLanguage } from "../context/LanguageContext";
import { englishTexts } from "../utils/text";
import Link from "next/link";

const AboutMePage = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-amber-300">{t.aboutMe.name}</h1>
                    <p className="mt-4 text-zinc-900 leading-relaxed">
                      {t.aboutMe.description}
                    </p>
      
                    {/* Navigations */}
                    <nav className="mt-12 flex flex-col gap-4">
                      <Link href="/education" className="text-zinc-900 hover:text-amber-500 transition-colors">
                        {t.education.title}
                      </Link>
                      <Link href="/projects" className="text-zinc-900 hover:text-amber-500 transition-colors">
                        {t.projects.title}
                      </Link>
                      <Link href="/skills" className="text-zinc-900 hover:text-amber-500 transition-colors">
                        {t.skills.title}
                      </Link>
                      <Link href="/work-history" className="text-zinc-900 hover:text-amber-500 transition-colors">
                        {t.workHistory.title}
                      </Link>
                    </nav>

                    {/* Language Toggle */}
                    <div className="flex gap-2 p-1 bg-zinc-900 rounded-lg w-fit mt-8 border border-zinc-700">
                      <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-md text-xs transition ${language==='en'}`}>EN</button>
                      <button onClick={() => setLanguage('fr')} className={`px-3 py-1 rounded-md text-xs transition ${language==='fr'}`}>FR</button>
                    </div>
      
    </div>
  );
};

export default AboutMePage;