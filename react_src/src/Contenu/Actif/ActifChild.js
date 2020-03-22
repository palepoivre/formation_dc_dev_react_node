import React from 'react'
import {useRouteMatch, useParams} from 'react-router-dom'

    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.

    const ActifChild = ({ items }) => {
        const match = useRouteMatch();

        let id = match.params.id;
      
        return (
          <li className="tache" key={this.props.item.index}>
            <div className="container p-3 my-3 border">
              <h2>Tache :{this.props.item.titre}</h2>
              <p>Date de création :{this.props.item.date_creation}</p>
              <p>Description :{this.props.item.description}</p>
              <a href={"/"+this.props.item.id}>Lien vers la tache {this.props.item.titre}</a>
            </div>
          </li>
        );
      };

      export default ActifChild;