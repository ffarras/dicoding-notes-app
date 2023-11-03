import React from "react";

function ArchiveButton({ id, onArchive, archived }) {
  const buttonText = archived ? "Aktifkan" : "Arsipkan";
  return (
    <button className="bg-cyan-500/80 hover:bg-cyan-500/70 focus:bg-cyan-500/60 rounded p-1 pb-1.5 px-2.5 text-sm font-medium" onClick={() => onArchive(id)}>
      {buttonText}
    </button>
  );
}

export default ArchiveButton;
