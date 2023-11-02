import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({addNote, notes, onDelete, onArchive}) {
    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} />
        </div>
    )
}

export default NoteAppBody