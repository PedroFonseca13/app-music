import React, { Component } from 'react';
// import Loading from '../pages/Login';
import { getUser } from '../services/userAPI';
import './Header.css';

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      // isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    const userName = await getUser();
    this.setState({
      user: userName.name,
      // isLoading: false,
    });
  };

  render() {
    const { user } = this.state;

    return (
      <header data-testid="header-component" className="header">
        <div className="logo">
          <h1>TrybeTunes</h1>
        </div>
        <div className="user">
          <p data-testid="header-user-name">{user}</p>
        </div>
      </header>
    );
  }
}