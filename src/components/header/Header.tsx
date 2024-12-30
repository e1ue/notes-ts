import { ClipboardDocumentListIcon, CodeBracketIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

interface HeaderProps {
  onThemeChange: (theme: string) => void;
}

export default function Header({ onThemeChange }: HeaderProps) {

    const [theme, setTheme] =useState<string>("dark");

    const toggleTheme = (selectedTheme: string) => {
        setTheme(selectedTheme);
        onThemeChange(selectedTheme);
    };

    return (
        <div className="max-w-screen-sm mx-auto py-[25px] flex-wrap flex justify-center space-x-[15px]">

            <button className="flex items-center space-x-[5px] px-[20px] py-[10px] border max-w-min rounded-[10px] select-none
                            hover:border-black/35 hover:bg-black/5 dark:hover:border-white/75 dark:hover:bg-white/10
                            border-black/25 dark:border-white/50">
                <ClipboardDocumentListIcon width={20} height={20} className="dark:text-white text-black"/>
                <p className="font-[Gilroy] font-medium dark:text-white text-black">notes.ts</p>
            </button>

            <div className="flex items-center space-x-[5px] px-[7.5px] border max-w-min rounded-[10px] select-none
                            hover:border-black/35 dark:hover:border-white/75
                            border-black/25 dark:border-white/50">
                <button className="py-[5px] px-[5px] rounded-[5px] dark:hover:bg-white/10 hover:bg-black/5">
                    <svg className="dark:stroke-white stroke-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/></svg>
                </button>
                <button className="py-[5px] px-[5px] rounded-[5px] dark:hover:bg-white/10 hover:bg-black/5">
                    <svg className="dark:stroke-white stroke-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
                </button>
                <button className="py-[5px] px-[5px] rounded-[5px] dark:hover:bg-white/10 hover:bg-black/5">
                    <svg className="dark:stroke-white stroke-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7.5 3v18"/><path d="M12 3v18"/><path d="M16.5 3v18"/></svg>
                </button>
            </div>

            <div className="flex items-center space-x-[5px] px-[7.5px] border max-w-min rounded-[10px] select-none
                            hover:border-black/35 dark:hover:border-white/75
                            border-black/25 dark:border-white/50">
                <button className={`py-[5px] px-[5px] rounded-[5px] dark:hover:bg-white/10 hover:bg-black/5 ${theme === "light" ? "dark:bg-white/10 bg-black/5" : ""}`}
                        onClick={() => toggleTheme("light")}>
                    <SunIcon width={20} height={20} className="dark:text-white text-black"/>
                </button>
                <button className={`py-[5px] px-[5px] rounded-[5px] dark:hover:bg-white/10 hover:bg-black/5 ${theme === "dark" ? "dark:bg-white/10 bg-black/5" : ""}`}
                        onClick={() => toggleTheme("dark")}>
                    <MoonIcon width={20} height={20} className="dark:text-white text-black"/>
                </button>
            </div>

            <button className="flex items-center space-x-[5px] px-[20px] py-[10px] border max-w-min rounded-[10px] select-none
                            hover:border-black/35 hover:bg-black/5 dark:hover:border-white/75 dark:hover:bg-white/10
                            border-black/25 dark:border-white/50">
                <CodeBracketIcon width={20} height={20} className="dark:text-white text-black"/>
                <p className="font-[Gilroy] font-medium dark:text-white text-black">elue</p>
            </button>

        </div>
    )
}