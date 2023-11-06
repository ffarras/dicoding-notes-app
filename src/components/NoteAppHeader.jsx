import React from "react";
import NoteSearch from "./Header/NoteSearch";

function NoteAppHeader({ searchNote }) {
  return (
    <div className="bg-neutral-800 shadow-md flex sm:flex-row xs:flex-col xs:gap-4 justify-between items-center px-20 xs:px-10 p-3 w-full sticky top-0">
      <div className="flex gap-x-4">
        <img src="/solar_notes-bold-duotone.svg" alt="" />
        <h1 className="text-2xl font-bold">Notes App</h1>
      </div>
      <NoteSearch searchNote={searchNote} />
    </div>
  );
}

export default NoteAppHeader;
