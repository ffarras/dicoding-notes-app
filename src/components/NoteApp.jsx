import React from "react";
import { getInitialData, showFormattedDate } from "../utils";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchHandler({ titleQuery }) {
    this.setState({ searchQuery: titleQuery });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: Date.now(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const targetNote = this.state.notes.find((note) => note.id === id);
    targetNote.archived == false
      ? (targetNote.archived = true)
      : (targetNote.archived = false);
    const notes = this.state.notes;
    this.setState({ notes });
  }

  render() {
    return (
      <section className="flex flex-col items-center w-full">
        <NoteAppHeader searchNote={this.onSearchHandler} />
        <NoteAppBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onSearch={this.state.searchQuery}
          onArchive={this.onArchiveHandler}
        />
      </section>
    );
  }
}

export default NoteApp;
