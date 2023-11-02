import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive }) {
    return (
        <article className="note-item">
            <NoteItemContent title={title} body={body} createdAt={createdAt} />
            <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
        </article>
    )
}

export default NoteItem;