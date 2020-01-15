import react from "react";

class Profil extends React.component{
 
  render(){
    return(
      <div>
        <h5>Mon profil : </h5>
        <p>{this.state.users.username}</p>
      </div>
    )
  }
}



export default Profil;