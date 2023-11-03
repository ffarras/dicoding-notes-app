import React from "react";

function ArchiveButton({ id, onArchive, archived }) {
  const buttonText = archived ? "Aktifkan" : "Arsipkan";
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {buttonText}
    </button>
  );
}

export default ArchiveButton;
