import React from "react";

function NoteTitleCharCount({count}) {
    return <span className="note-input__title__char-limit">Sisa karakter: {count}</span>
}

export default NoteTitleCharCount