import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./utils";
import { HiOutlineAcademicCap, HiOutlineClock, HiOutlineHome } from "react-icons/hi";
import { HiOutlineArchiveBoxXMark, HiOutlineBuildingOffice } from "react-icons/hi2";


const NavigationPlain = () => {
    const pathname = usePathname();

    return (
        <nav className="mt-12 flex flex-col justify-start gap-4 p-2 rounded-2xl bg-zinc-100 border border-white/10 backdrop-blur-sm">
            <Link href="/home" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/home" })}>
                <HiOutlineHome size={36} className="inline-block mr-1"/>
            </Link>
            <Link href="/education" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/education" })}>
                <HiOutlineAcademicCap size={36} className="inline-block mr-1"/>
            </Link>
            <Link href="/projects" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/projects" })}>
                <HiOutlineBuildingOffice size={36} className="inline-block mr-1"/>
            </Link>
            <Link href="/skills" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/skills" })}>
                <HiOutlineArchiveBoxXMark size={36} className="inline-block mr-1"/>
            </Link>
            <Link href="/work-history" className={cn("text-zinc-900 hover:text-amber-500 transition-colors", { "text-amber-500": pathname === "/work-history" })}>
                <HiOutlineClock size={36} className="inline-block mr-1"/>
            </Link>
        </nav>
    );
}

export default NavigationPlain;