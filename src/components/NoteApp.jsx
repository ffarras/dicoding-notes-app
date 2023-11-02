import React from "react";
import { getInitialData, showFormattedDate } from "../utils";
import NoteAppHeader from "./NoteAppHeader";
import NoteInput from "./NoteInput";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchHandler({ titleQuery }) {
    let filteredNotes = [];
    const data = this.state.notes;
    console.log(titleQuery);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].title);
      if (data[i].title.includes(titleQuery)) {
        filteredNotes.push(data[i]);
      }
    }
    if (titleQuery == '') {
      filteredNotes =  getInitialData();
    }

    console.log(filteredNotes);
    // const filteredNotes = titleQuery !== ""
    // ? this.state.notes.filter((note) =>
    //     note.title.toLowerCase().includes(titleQuery.toLowerCase())
    //   )
    // : getInitialData();

    this.setState({ notes: filteredNotes });
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

  render() {
    return (
      <section className="note-app">
        <NoteAppHeader searchNote={this.onSearchHandler} />
        <NoteAppBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

export default NoteApp;
