import React from "react";
import NoteItem from "./Item/NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length > 0) {
    return (
      <div className="notes-list">
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
  }
  return <div className="notes-list">Tidak Ada Catatan</div>;
}

export default NoteList;
