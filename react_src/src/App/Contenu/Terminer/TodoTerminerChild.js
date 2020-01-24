import React from 'react'
import {useRouteMatch, useParams} from 'react-router-dom'

    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.

    const TodoTerminerChild = ({ items }) => {
        const match = useRouteMatch();

        let id = match.params.id;

      
        return (
          <>
            <p>
              <strong>Titre: </strong>
              {items[id].titre}
            </p>
          </>
        );
      };

      export default TodoTerminerChild;