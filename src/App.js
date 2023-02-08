import React, { Component } from 'react';
import UserInfo from "./Components/UserInfo";
import Display from "./Display";
import image from "./images/download.png";
import MenuBar1 from './Components/Navbar';


class App extends Component {

  state = {
    userData: [],
  };

  userInfo = (props) => {
    //console.log(props);
    let userData = [...this.state.userData, props];

    this.setState({
      userData,
    });
  };

  render() {
    return (
      <div>
        <MenuBar1 />
        <UserInfo userInfo={this.userInfo} />
        <Display userData={this.state.userData} />
      </div>
    );
  }
}

export default App;