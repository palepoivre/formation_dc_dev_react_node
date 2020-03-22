import React from "react";

import {useRouteMatch, useParams} from 'react-router-dom'

class Item extends React.Component {
  render() {
    
    return (
      <li className="tache" key={this.props.item.index}>
        <div className="container p-3 my-3 border">
          <h2>Tache : {this.props.item.titre}</h2>
          {"Date de création :"}
          {this.props.item.date_creation}
          <br/>
          {"Descriptif tache :"}
          {this.props.item.description}
          <br/>
          {this.props.item.isDone}{this.props.item.isDone ? "Etat : Fini" : "Etat : En cours "}
          <br/>
          <a href={"/todo/"+ this.props.item.id} >Lien vers la tache : {this.props.item.titre}</a>
          
          
        </div>
        <div className="button">
          <div className="button_state">
            <button className="btn btn-success"
              onClick={() => {
                this.props.done();
              }}
            >
              {this.props.item.isDone ? "En cours" : "Terminer"}
            </button>
          </div>
          <div className="button_delete">
            <button className="btn btn-danger"
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
