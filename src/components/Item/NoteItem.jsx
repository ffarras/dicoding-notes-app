import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <article className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </article>
  );
}

export default NoteItem;
