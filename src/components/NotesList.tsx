import { PlusCircleIcon, TrashIcon } from "@heroicons/react/16/solid";

export default function NotesList({
  notes,
  setNotes,
  onNoteClick,
  selectedNote,
  onDeleteNote,
}: {
  notes: Array<{ id: number; name: string; text: string }>;
  setNotes: React.Dispatch<
    React.SetStateAction<Array<{ id: number; name: string; text: string }>>
  >;
  onNoteClick: (note: { id: number; name: string; text: string }) => void;
  selectedNote: { id: number; name: string; text: string } | null;
  onDeleteNote: (id: number) => void;
}) {

  const addNote = () => {
    const newNote = {
      id: Math.max(...notes.map((note) => note.id), 0) + 1,
      name: "",
      text: "",
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-[10px]">
        {notes.map((note) => (
          <button
            key={note.id}
            onClick={() => onNoteClick(note)}
            className={`dark:text-white text-black text-start dark:bg-white/10 bg-black/5 p-[25px] rounded-[15px] flex justify-between items-center
                     hover:dark:bg-white/15 hover:bg-black/10 border dark:border-white/15 ${
                       note.id === selectedNote?.id
                         ? "dark:bg-white/15 bg-black/10"
                         : ""
                     }`}
          >
            <div>
              <p className="text-xl font-bold">
                {note.name.trim().length === 0
                  ? "Нет названия"
                  : note.name.length > 20
                  ? note.name.slice(0, 20) + "..."
                  : note.name}
              </p>
              <p>
                {note.text.trim().length === 0
                  ? "Заметка пуста"
                  : note.text.length > 30
                  ? note.text.slice(0, 30) + "..."
                  : note.text}
              </p>
            </div>
            <button
              className="flex justify-center items-center"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteNote(note.id);
              }}
            >
              <TrashIcon className="dark:text-white text-black min-w-[28px] min-h-[28px] p-[5px] hover:dark:bg-white/15 hover:bg-black/10 rounded-[5px]" />
            </button>
          </button>
        ))}
        <button
          onClick={addNote}
          className="dark:text-white text-black dark:bg-white/10 bg-black/5 p-[25px] rounded-[15px]
                     hover:dark:bg-white/15 hover:bg-black/10 border dark:border-white/15 flex justify-center items-center"
        >
          <PlusCircleIcon
            width={20}
            height={20}
            className="dark:text-white text-black"
          />
        </button>
      </div>
    </div>
  );
}
