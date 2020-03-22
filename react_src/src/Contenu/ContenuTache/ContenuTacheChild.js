import React from 'react'
import {useRouteMatch, useParams} from 'react-router-dom'
import Uuid from 'uuid/v4';

const ContenuTacheChild = ({ items }) => {
  const match = useRouteMatch();

  let id = match.params.id;
  
    return (
      <li className="tache" key={id}>
      <div className="container p-3 my-3 border">
        <h2>Tache :{this.props.item.titre}</h2>
        <p>Date de création :{this.props.item.date_creation}</p>
        <p>Description :{this.props.item.description}</p>
        <a href={"/"+this.props.item.id}>Lien vers la tache {this.props.item.titre}</a>
      </div>
    </li>
      );
};
export default ContenuTacheChild;
