'use client';
import EducationItem from "../components/educationItem";
import { useLanguage } from "../context/LanguageContext";

const Education = () =>  {
    const { t } = useLanguage();

    return (
        <div className="p-2 flex flex-col justify-start gap-4">
            <p className="text-3xl font-bold text-amber-400">{t.education.title}</p>
            <p className="text-xl font-bold text-amber-600">{t.education.viewFullEducationHistory}</p>
            {t.education.educationHistory.map((educationItem: any) => (
                <EducationItem key={educationItem.id} educationItem={educationItem} />
            ))}
        </div>
    );
}

export default Education;