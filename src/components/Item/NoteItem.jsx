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
    <article className="flex flex-col border-solid border border-neutral-200/40 rounded-xl p-4 bg-neutral-600/60 md:min-h-[300px] shadow-xl shadow-neutral-950/25">
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
