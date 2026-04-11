'use client';

import WorkHistoryItem from "../components/workhistoryItem";
import { useLanguage } from "../context/LanguageContext";
import { ILanguageTexts } from "../utils/text";

type WorkHistoryItemType = ILanguageTexts["workHistory"]["workHistoryList"][0];

const WorkHistory = () =>  {
     const { t } = useLanguage();
    return (
       <div className="flex flex-col gap-4">
            {t.workHistory.workHistoryList.map((historyItem: WorkHistoryItemType) => (
                <WorkHistoryItem key={historyItem.id} historyItem={historyItem} />
            ))}
        </div>
    );
}

export default WorkHistory;