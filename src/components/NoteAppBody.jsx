import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({ addNote, notes, onDelete, onArchive, onSearch }) {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(onSearch.toLowerCase())
  );
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={filteredNotes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteAppBody;
