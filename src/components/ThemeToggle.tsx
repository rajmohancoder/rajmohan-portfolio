"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                className="bg-charcoal dark:bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 cursor-pointer transition-all duration-300 flex items-center justify-center group"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle Theme"
            >
                <span className="material-icons text-white group-hover:rotate-12 transition-transform duration-300">
                    {darkMode ? "light_mode" : "dark_mode"}
                </span>
            </button>
        </div>
    );
}
