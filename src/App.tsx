import { useEffect, useState } from "react";
import Header from "./components/header/Header";

function App() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const handleHeaderData = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`min-h-screen w-full ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <Header onThemeChange={handleHeaderData} />
      <p className="text-black dark:text-white">Текущая тема: {theme}</p>
    </div>
  );
}

export default App;