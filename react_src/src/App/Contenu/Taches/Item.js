import React from "react";

import {useRouteMatch, useParams} from 'react-router-dom'

class Item extends React.Component {
  render() {
    
    return (
      <li key={this.props.item.index}>
        {" "}
        <a href={"/todo/"+ this.props.item.id} >Descriptif tache : {this.props.item.titre}</a>
        {" "}
        {this.props.item.date_creation}
        {" "}
        {this.props.item.description}
        {" "}
        {this.props.item.isDone}{this.props.item.isDone ? "Fini" : " En cours "}
        <div class="button">
          <div class="button_state">
            <button className="button_state"
              onClick={() => {
                this.props.done();
              }}
            >
              {this.props.item.isDone ? "En cours" : "Terminer"}
            </button>
          </div>
          <div class="button_delete">
            <button className="button_delete"
              onClick={(e) => {
                this.props.remove();
                e.preventDefault();
              }}
            >
              Supprimer
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
