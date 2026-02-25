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
        <div className="fixed bottom-4 right-4 z-50">
            <button
                className="bg-charcoal text-white p-3 rounded-full shadow-lg hover:bg-black transition-colors flex items-center justify-center"
                onClick={() => setDarkMode(!darkMode)}
            >
                <span className="material-icons">{darkMode ? "light_mode" : "dark_mode"}</span>
            </button>
        </div>
    );
}
