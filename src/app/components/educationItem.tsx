'use client';

import { ILanguageTexts } from "../utils/text";

type EducationItemType = ILanguageTexts["education"]["educationHistory"][0];

const EducationItem = ({ educationItem }: { educationItem: EducationItemType }) => {

    return (
        <div className="grid grid-cols-[45%_55%] divider-x divide-white/10">
            <div>
                <div className="font-bold font-salsa text-black mt-1">{educationItem.date}</div>
                <div className="mt-1 text-black">{educationItem.program}</div>
                <div className="text-blue-600 mt-1">{educationItem.school}</div>
            </div>
            <div className="flex flex-col content-start">
                <div className="font-italic font-serif text-black mt-1">{educationItem.description}</div>
                {educationItem.workload?.length > 0 && (
                    <div className="mt-3">
                        <h2 className="text-3xs text-green-800 font-sans">Relevant Courses:</h2>
                        <ul className="list-disc list-inside ml-4 mt-1 text-3xs text-amber-800 font-sans">
                            {educationItem.workload.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EducationItem;   