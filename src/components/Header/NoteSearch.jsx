import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleQuery: "",
    };

    this.onTitleQueryChangeEventHandler =
      this.onTitleQueryChangeEventHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.titleQuery !== prevState.titleQuery) {
      this.props.searchNote(this.state);
    }
  }

  onTitleQueryChangeEventHandler(event) {
    this.setState((previousState) => {
      return {
        titleQuery: event.target.value,
      };
    });
  }

  render() {
    return (
      <input
        className="text-sm leading-6 text-slate-100 rounded-xs shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 hover:bg-neutral-700/50 placeholder:text-zinc-400/50 m-0 ring-cyan-500 focus:ring rounded bg-neutral-700/40 border border-neutral-400 md:w-1/5"
        type="text"
        placeholder="Cari judul catatan..."
        value={this.state.titleQuery}
        onChange={this.onTitleQueryChangeEventHandler}
      />
    );
  }
}

export default NoteSearch;
