import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./utils";
import { HiChatAlt2, HiOutlineAcademicCap, HiOutlineClock, HiOutlineHome } from "react-icons/hi";
import { HiOutlineArchiveBoxXMark, HiOutlineBuildingOffice, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";


const NavigationPlain = () => {
    const pathname = usePathname();
    const { t } = useLanguage();

    const [isAiChatOpen, setIsAiChatOpen] = useState(false);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = () => {
        // Prevent sending empty messages
        if (!inputMessage.trim()) return;

        // Here you would handle the message sending logic, e.g., to an API
        console.log("Message to send:", inputMessage);

        // Clear the input field
        setInputMessage("");
    };

    return (
        <div className="relative">
            <nav className="mt-12 flex flex-col justify-start gap-4 p-2 rounded-2xl bg-zinc-100 border border-white/10 backdrop-blur-sm">
                <Link href="/home" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/home" })}>
                    <HiOutlineHome size={36} className="inline-block mr-1" />
                </Link>
                <Link href="/education" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/education" })}>
                    <HiOutlineAcademicCap size={36} className="inline-block mr-1" />
                </Link>
                <Link href="/projects" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/projects" })}>
                    <HiOutlineBuildingOffice size={36} className="inline-block mr-1" />
                </Link>
                <Link href="/skills" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/skills" })}>
                    <HiOutlineArchiveBoxXMark size={36} className="inline-block mr-1" />
                </Link>
                <Link href="/work-history" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/work-history" })}>
                    <HiOutlineClock size={36} className="inline-block mr-1" />
                </Link>
                <button onClick={() => setIsAiChatOpen(!isAiChatOpen)} className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": isAiChatOpen })}>
                    <HiChatAlt2 size={36} className="inline-block mr-1" />
                </button>
            </nav>
            {isAiChatOpen && (
                <div className="absolute bottom-0 right-full mr-4 bg-white p-4 rounded-lg shadow-2xl w-96 z-50">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-lg text-zinc-900">{t.ai.chatWithAi}</h3>
                        <button onClick={() => setIsAiChatOpen(false)} className="text-zinc-500 hover:text-zinc-900">
                            <HiXMark size={24} />
                        </button>
                    </div>
                    <div className="h-64 overflow-y-auto mb-4 p-2 bg-zinc-50 rounded">
                        {/* Placeholder for chat messages */}
                        <p className="text-sm text-zinc-500">.....</p>
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder={t.ai.textPlaceholder}
                            className="w-full p-2 border text-zinc-900 border-zinc-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <button onClick={handleSendMessage} className="bg-amber-400 text-white px-4 rounded-r-md hover:bg-amber-500">Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavigationPlain;