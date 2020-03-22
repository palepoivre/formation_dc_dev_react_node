import React from 'react'
import {useRouteMatch, useParams} from 'react-router-dom'

    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.

    const Child = ({ items }) => {
        const match = useRouteMatch();

        let id = match.params.id;
      
        return (
          <>
            <p style={{marginTop: "10em"}}>
              <strong>User ID: </strong>
              {id}
            </p>
            <p>
              <strong>User Name: </strong>
              {items[id].titre}
            </p>
          </>
        );
      };

      export default Child;