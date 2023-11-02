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

  onTitleQueryChangeEventHandler(event) {
    this.setState(() => {
      return {
        titleQuery: event.target.value,
      };
    });
    this.props.searchNote(this.state);
  }

  render() {
    return (
        <input type="text" placeholder="Search note title" value={this.state.titleQuery} onChange={this.onTitleQueryChangeEventHandler} />
    )
  }
}

export default NoteSearch;
