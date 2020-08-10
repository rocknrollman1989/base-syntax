import React, { Component } from 'react';
import InfoMessage from './components/InfoMessage'
import UserInfo from './components/UserInfo'
import UserInfoInputs from './components/UserInfoInputs'
import './App.css';

class App extends Component {

  state = {
    user: {
      firstName: 'Ilya',
      lastName: 'Volkov',
    }
  }

  handleChange = fieldName => e => {
    const { value } = e.target
    this.setState({
      user: {
        ...this.state.user,
        [fieldName]: value
      }
    })
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <InfoMessage>
          Hi, welcome to React!
        </InfoMessage>
        <UserInfo firstName={user.firstName} lastName={user.lastName} />
        <UserInfoInputs onChange={this.handleChange} userValues={user} />
      </div>
    );
  };
};

export default App;
