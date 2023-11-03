import React from "react";
import { showFormattedDate } from "../../utils";

function NoteItemContent({ title, body, createdAt }) {
  return (
    <div className="flex flex-col gap-2 flex-1 pb-8">
      <h3 className="text-lg">{title}</h3>
      <p className="text-xs text-neutral-400">{showFormattedDate(createdAt)}</p>
      <p className="text-sm text-neutral-100/90">{body}</p>
    </div>
  );
}

export default NoteItemContent;
