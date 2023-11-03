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
      <div className="flex flex-col gap-4 lg:w-3/5 w-full md:w-3/4 md:m-auto">
        <h2 className="text-2xl font-medium">Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler} className="flex flex-col gap-3">
          <NoteTitleCharCount count={this.state.count} />
          <input
            type="text"
            placeholder="Masukkan judul"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            className="text-s leading-6 text-slate-100 rounded-xs ring-cyan-500 focus:ring shadow-sm py-2 px-3 placeholder:text-zinc-400/50 m-0 rounded bg-neutral-700/40 border border-neutral-400 "
            required
          />
          <textarea
            placeholder="Masukkan konten catatan"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            cols="30"
            rows="6"
            className="text-s leading-6 text-slate-100 rounded-xs ring-cyan-500 focus:ring shadow-sm py-2 px-3 placeholder:text-zinc-400/50 m-0 rounded bg-neutral-700/40 border border-neutral-400 resize-none"
            required
          ></textarea>
          <button type="submit" className="bg-cyan-500 py-2 rounded-md font-medium shadow-md hover:bg-cyan-500/90 focus:bg-cyan-500/80">Tambah Catatan</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
