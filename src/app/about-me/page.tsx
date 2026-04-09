'use client';
import { useLanguage } from "../context/LanguageContext";
import SocialBar from "./socialbar";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import NavigationPlain from "./navigation";

const AboutMePage = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_100px] gap-8 items-start">
        <div>
          <h1 className="font-salsa text-4xl font-bold mb-4 text-amber-300">{t.aboutMe.name}</h1>
          <h4 className="font-salsa text-1xl font-bold mb-4 text-amber-500">{t.aboutMe.title}</h4>
          <p className="mt-4 text-zinc-900 leading-relaxed">
            {t.aboutMe.description}
          </p>
        </div>
        {/* Navigations */}
        <div className="flex justify-end">
          <NavigationPlain />
        </div>

      </div>
      <SocialBar />

      <a href="" target="_blank" className="inline-block font-salsa text-2xl font-bold mt-8 px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-600 transition-colors">
        {t.aboutMe.downloadResume}
      </a>

      <div className="flex flex-row mt-4">
        <a href="mailto:test@example.com" target="_blank" className="icon">
          <HiOutlineMail size={48} className="text-zinc-900 hover:text-amber-500 transition-colors" />
        </a>

        <a href="tel:+1234567890" target="_blank" className="icon ml-4 mt-2">
          <FiPhoneForwarded size={32} className="text-zinc-900 hover:text-amber-500 transition-colors" />
        </a>
      </div>

      {/* Language Toggle */}
      <p className="flex gap-2 p-1 bg-zinc-900 rounded-lg w-fit mt-8 border border-zinc-700">
        <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-md text-xs transition-colors ${language === 'en' ? 'bg-amber-500 text-black' : 'text-white'}`}>EN</button>
        <button onClick={() => setLanguage('fr')} className={`px-3 py-1 rounded-md text-xs transition-colors ${language === 'fr' ? 'bg-amber-500 text-black' : 'text-white'}`}>FR</button>
      </p>

    </div>
  );
};

export default AboutMePage;