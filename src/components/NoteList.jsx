import React from "react";
import NoteItem from "./Item/NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))
      ) : (
        <div>Tidak Ada Catatan</div>
      )}
    </div>
  );
}

export default NoteList;
