import React from "react";
import NoteItem from "./Item/NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length > 0) {
    return (
      <div className="grid gap-4 note-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    );
  } else return <div className="flex justify-center bg-neutral-700/30 text-neutral-400 p-8 rounded-md">Tidak Ada Catatan</div>;
}

export default NoteList;
