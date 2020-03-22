import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTitreValue: "",
      inputDescriptionValue: "",
      date_creation: ""
    };
  }
  render() {
    return (
      <div>
        <div className="ajout_tache">
            <div>
              <input
                value={this.state.inputValue}
                placeholder="Titre"
                onChange={e => {
                  this.setState({ inputTitreValue: e.target.value });
                  e.preventDefault();
                }}
              />
            </div>
            <div>
              <input
                value={this.state.inputValue}
                placeholder="Description"
                onChange={e => {
                  this.setState({ inputDescriptionValue: e.target.value });
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        <button className="btn btn-info tache"
          onClick={(e) => {
            this.props.addItem(this.state.inputDescriptionValue,this.state.inputTitreValue);
            this.setState({ inputDescriptionValue: "", inputTitreValue: "",date_creation: this.props.date_creation});
            e.preventDefault();
          }}
        >
          Ajout d'une Tache
        </button>
      </div>
    );
  }
}

export default Input;
