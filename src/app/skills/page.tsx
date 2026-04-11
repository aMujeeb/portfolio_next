'use client';

import { ILanguageTexts } from "../utils/text";
import { useLanguage } from "../context/LanguageContext";
import SkillItem from "../components/skillItem";

type SkillItemType = ILanguageTexts["skills"]["skillCategories"][0];

const Skills = () => {
    const { t } = useLanguage();
    return (
        <div>
            <p className="text-3xl font-bold ps-3 text-amber-400">{t.skills.title}</p>
            <div className="flex flex-col mt-1">
                {t.skills.skillCategories.map((skill: SkillItemType) => (
                    <SkillItem key={skill.id} skill={skill} />
                ))}
            </div>
        </div>
    );
}

export default Skills;