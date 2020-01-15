import React from "react";

class TodoHistorique extends React.Component {
  
   historique = items => {
     let i = 0;
     while (i < this.state.items.length) {
       console.log("user", items)
       if (
         this.props.items.historique === true
       ) {

         let newItems = this.state.items.map((item, i)=>({
           titre: this.props.items[i].titre,
           message: {
             nom: this.props.items[i].message.nom,
             date_creation: this.props.items[i].message.date_creation,
             commentaire: this.props.items[i].message.commentaire,
           },
           date_creation: this.props.items[i].date_creation,
           description: this.props.items[i].description,
           historique: this.props.items[i].historique,
           isDone: this.props.items[i].isDone
         }))

         let newItem = 
         this.setState();
       }
       i++;
     }
   };

  render() {
    return (
      <div>
        <h1>{this.props.items.titre}</h1>
        <p>{this.props.items.date_creation}</p>
        <p>{this.props.items.description}</p>
        <p>{this.props.items.message.nom}</p>
        <p>{this.props.items.message.date_creation}</p>
        <p>{this.props.items.message.commentaire}</p>
        <p>{this.props.items.contributeur}</p>
        <p>{this.props.items.isDone}</p>
        <a href={"/"+this.props.items.titre}>Lien {this.props.items.titre}</a>

      </div>
    );
  }
}

export default TodoHistorique;