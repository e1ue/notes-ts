import { useEffect, useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [container, setContainer] = useState<string>(
    localStorage.getItem("container") || "default"
  );

  const [notes, setNotes] = useState<
    Array<{ id: number; name: string; text: string }>
  >(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [selectedNote, setSelectedNote] = useState<{
    id: number;
    name: string;
    text: string;
  } | null>(null);

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

  const handleNoteClick = (note: {
    id: number;
    name: string;
    text: string;
  }) => {
    setSelectedNote(note);
  };

  const updateNote = (updatedNote: {
    id: number;
    name: string;
    text: string;
  }) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    if (selectedNote?.id === id) {
      setSelectedNote(null)
    }
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
            <NotesList
              notes={notes}
              setNotes={setNotes}
              onNoteClick={handleNoteClick}
              selectedNote={selectedNote}
              onDeleteNote={handleDeleteNote}
            />
          </div>
          <div className="flex flex-col w-full h-full">
            {selectedNote?.id ? (
              <div className="flex flex-col w-full h-full">
                <input
                  type="text"
                  value={selectedNote.name || ""}
                  onChange={(e) => {
                    const updatedNote = {
                      ...selectedNote,
                      name: e.target.value,
                    };
                    setSelectedNote(updatedNote);
                    updateNote(updatedNote);
                  }}
                  className="mb-[10px] p-[15px] border dark:border-white/15 rounded-[15px] dark:bg-white/10 bg-black/5 dark:text-white text-black outline-none"
                  placeholder="Заголовок"
                />
                <textarea
                  value={selectedNote.text || ""}
                  onChange={(e) => {
                    const updatedNote = {
                      ...selectedNote,
                      text: e.target.value,
                    };
                    setSelectedNote(updatedNote);
                    updateNote(updatedNote);
                  }}
                  className="flex-grow p-[15px] custom-scrollbar border dark:border-white/15 rounded-[15px] dark:bg-white/10 bg-black/5 dark:text-white text-black outline-none resize-none"
                  placeholder="Ваши заметки..."
                ></textarea>
              </div>
            ) : (
              <div className="dark:text-white text-black flex-grow p-[15px] border dark:border-white/15 rounded-[15px] dark:bg-white/10 bg-black/5 resize-none flex justify-center items-center">
                <p>Выберите или создайте заметку</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
