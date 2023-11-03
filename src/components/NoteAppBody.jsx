import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({ addNote, notes, onDelete, onArchive, onSearch }) {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(onSearch.toLowerCase())
  );
  return (
    <div className="flex flex-col py-10 lg:w-4/5 lg:px-20 sm:w-full xs:px-10 gap-4">
      <NoteInput addNote={addNote} />
      <h2 className="text-xl font-medium text-cyan-400 pt-8 pb-4">Catatan Aktif</h2>
      <NoteList notes={filteredNotes.filter((note) => note.archived == false)} onDelete={onDelete} onArchive={onArchive} />
      <h2 className="text-xl font-medium text-cyan-400 pt-8 pb-4">Arsip</h2>
      <NoteList notes={filteredNotes.filter((note) => note.archived == true)} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteAppBody;
