import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.inputValue}</p>
        <input
          value={this.state.inputValue}
          placeholder="Ajouter un item"
          onChange={e => {
            this.setState({ inputValue: e.target.value });
            e.preventDefault();
          }}
        />
        <button
          onClick={(e) => {
            this.props.addItem(this.state.inputValue);
            this.setState({ inputValue: "" });
            e.preventDefault();
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default TodoInput;
