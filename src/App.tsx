import { useEffect, useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [container, setContainer] = useState<string>(
    localStorage.getItem("container") || "default"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const handleThemeData = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleConteinerData = (newConteiner: string) => {
    setContainer(newConteiner);
    localStorage.setItem("container", newConteiner);
  };

  return (
    <div
      className={`font-[Gilroy] h-screen w-full transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-in-out ${
          container === "default"
            ? "max-w-screen-2xl"
            : container === "min"
            ? "max-w-screen-xl"
            : "max-w-full"
        }`}
      >
        <Header
          onThemeChange={handleThemeData}
          onConteinerChange={handleConteinerData}
        />
        <div className="p-[25px] h-[calc(100vh-100px)] flex justify-between space-x-[10px]">
          <div
            className={`overflow-y-auto custom-scrollbar pr-[7.5px] ${
              container === "default"
                ? "w-[40%]"
                : container === "min"
                ? "w-[50%]"
                : "w-[35%]"
            }`}
          >
            <NotesList />
          </div>
          <div className="flex flex-col w-full h-full">
            <input
              type="text"
              className="mb-[10px] p-[10px] border dark:border-white/15 rounded-[15px] dark:bg-white/10 bg-black/5 dark:text-white text-black outline-none"
              placeholder="Заголовок"
            />
            <textarea
              className="flex-grow p-[10px] custom-scrollbar border dark:border-white/15 rounded-[15px] dark:bg-white/10 bg-black/5 dark:text-white text-black outline-none resize-none"
              placeholder="Ваши заметки..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
