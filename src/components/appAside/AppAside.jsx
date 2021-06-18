import React, { Component } from 'react';
import MyLink from '../myLink/MyLink';
import classes from './AppAside.module.css';

export default class AppAside extends Component {
  state = {
    homeActive: false,
    reminderActive: false,
  };

  homeActiveHandler = () => {
    this.setState({
      reminderActive: false,
      homeActive: true,
    });
  };
  reminderActiveHandler = () => {
    this.setState({
      homeActive: false,
      reminderActive: true,
    });
  };

  render() {
    return (
      <div className={classes['aside-container']}>
        <MyLink 
        onActiveHandler={this.homeActiveHandler} 
        active={this.state.homeActive} 
        to="/" 
        iClass="fa fa-home">
          Home
        </MyLink>

        <MyLink
          onActiveHandler={this.reminderActiveHandler}
          active={this.state.reminderActive}
          to="/"
          iClass="fa fa-bell"
        >
          Reminder
        </MyLink>
      </div>
    );
  }
}
