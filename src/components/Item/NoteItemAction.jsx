import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemAction({ id, onDelete, onArchive, archived }) {
  return (
    <div className="flex justify-end gap-4">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
    </div>
  );
}

export default NoteItemAction;
