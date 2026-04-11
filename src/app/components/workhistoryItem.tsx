import { ILanguageTexts } from "../utils/text";

type WorkHistoryItemType = ILanguageTexts["workHistory"]["workHistoryList"][0];

const WorkHistoryItem = ({ historyItem }: { historyItem: WorkHistoryItemType }) => {
    return (
        <div className="grid grid-cols-[30%_70%] divider-x divide-white/10">
            {/* Company details */}
            <div className="flex flex-col">
                <h2 className="text-xl font-bold text-amber-800 font-salsa">{historyItem.companyName}</h2>
                <h3 className="text-3xs font-bold text-amber-600 font-salsa">{historyItem.jobTitle}</h3>
                <div className="flex flex-row">
                    <p className="text-2xs text-amber-400">{historyItem.startDate} - {historyItem.endDate}</p>
                </div>
            </div>
            {/* Job Description */}
            <div className="flex flex-col border border-gray-50 rounded-lg p-2 bg-gray-10 content-start">
                <h2 className="text-3xs text-amber-800 font-sans">{historyItem.companyDescription}</h2>
                <div className="w-24 h-px bg-red-500 mt-2" />
                <h2 className="text-3xs text-green-800 font-sans mt-3">Responsibilities :</h2>
                <ul className="list-disc list-inside ml-4 mt-1 text-3xs text-amber-800 font-sans">
                    {historyItem.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                {historyItem.technologies?.length > 0 && (
                    <div className="mt-3">
                        <h2 className="text-3xs text-green-800 font-sans">Technologies:</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {historyItem.technologies.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className="flex items-center gap-1.5 px-3 py-1 bg-amber-200 border border-amber-300 rounded-full text-[10px] font-medium text-black shadow-sm transition-hover hover:bg-amber-300"
                                >
                                    {tech.icon.normal}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default WorkHistoryItem;