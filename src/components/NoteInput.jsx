import React from "react";
import NoteTitleCharCount from "./NoteTitleCharCount";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      count: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const count = -(event.target.value.length - 50);
    if (count >= 0) {
      this.setState({
        title: event.target.value,
        count: count,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <NoteTitleCharCount count={this.state.count} />
          <input
            type="text"
            placeholder="Masukkan judul"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            className="note-input__title"
            required
          />
          <textarea
            placeholder="Masukkan konten catatan"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            cols="30"
            rows="10"
            className="note-input__body resize-none"
            required
          ></textarea>
          <button type="submit">Tambah Catatan</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
