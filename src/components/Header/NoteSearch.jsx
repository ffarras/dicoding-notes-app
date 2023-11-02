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

  componentDidUpdate(prevProps, prevState){
    // console.log(this.state)
    if (this.state.titleQuery !== prevState.titleQuery){
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
        type="text"
        placeholder="Search note title"
        value={this.state.titleQuery}
        onChange={this.onTitleQueryChangeEventHandler}
      />
    );
  }
}

export default NoteSearch;
