import React from "react";

import Todo from "./todo/Todo";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Signup from "./Header/Login/Signup";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ":path",
      isUserConnected: false,
      users: [
        { username: "Alice", password: "Alice" },
        { username: "Bob", password: "Bob" },
        { username: "Claire", password: "Claire" },
        { username: "David", password: "David" }
      ]
    };
  }
  connected = user => {
    let i = 0;
    let userFound = false;
    while (i < this.state.users.length && userFound === false) {
      if (
        this.state.users[i].username === this.props.inputUserNameSignup &&
        this.state.users[i].password === this.props.inputPasswordValue
      ) {
        userFound = true;
      }
      i++;
    }
    this.setState({ isUserConnected: userFound });
  };

  render() {
    let page;
    console.log(this.state.isUserConnected);
    if (this.state.isUserConnected === true) {
      page = <Todo />;
    } else {
      page = (
        <Signup
          addUser={user => {
            let newUser = {
              username: user.inputUserNameSignup,
              password: user.inputPwdSignup
            };
            let newUsers = [...this.state.users, newUser];
            this.setState({ users: newUsers });
          }}
        />
      );
    }
    return (
      <div id="App">
        <Header users={this.state.users} connected={this.connected} />
        {page}
        <Footer />
      </div>
    );
  }
}

export default App;
