import React from "react";

import List from "../Item/List";

class ContenuTache extends React.Component {

  contenuItem = () => {

    let contenu = this.props.items.filter((item, index) => {
      return item
    })
    return contenu;
  }

  render() {
    let contenu = this.contenuItem()

    return (
      <div id="ContenuTache">
          <List
            items={contenu}
          />
        </div>
    );
  }
}

export default ContenuTache;
