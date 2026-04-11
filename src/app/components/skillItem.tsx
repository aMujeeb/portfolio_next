import { ILanguageTexts } from "../utils/text";
import { SKILLS } from "../utils/skills";

// This gets the type of a single skill from the SKILLS object, like the 'react' or 'html' object.
type SkillType = (typeof SKILLS)[keyof typeof SKILLS];

type SkillCategoryType = ILanguageTexts["skills"]["skillCategories"][0];

const SkillItem = ({ skill }: { skill: SkillCategoryType }) => {
    // Filter the skills to get only the ones that match the current category ID
    const categorySkills = Object.values(SKILLS).filter(
        (s: SkillType) => s.type === skill.id
    );

    return (
        <div className="bg-white shadow-md mt-2 rounded-lg p-4">
            <p className="text-xl font-bold font-salsa text-gray-700">
                {skill.name}
            </p>
            {/* Use dangerouslySetInnerHTML to render the HTML from the description */}
            <p
                className="text-3xs font-salsa text-gray-700 mt-2"
                dangerouslySetInnerHTML={{ __html: skill.description }}
            />
            {/* Render the list of skills for this category */}
            <div className="flex flex-wrap gap-2 mt-4">
                {categorySkills.map((s) => (
                    <div
                        key={s.name}
                        className="flex flex-col items-center justify-center w-18 h-18 bg-amber-200 border border-amber-300 rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg group"
                    >
                        <div className="text-lg">
                            {s.icon.normal}
                        </div>

                        <span className="text-[8px] font-bold uppercase tracking-tighter text-black mt-2 text-center leading-none">
                            {s.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillItem;