import React, { Component } from 'react';
import MyLink from '../myLink/MyLink';
import classes from './AppAside.module.css';

export default class AppAside extends Component {
  constructor() {
    super();
    this.state = {
      linkIsActive: false,
    };
  }

  linkClickHandler = () => {
    this.setState({linkIsActive:false})
    this.setState({linkIsActive:true})
  }
  render() {
    return (
      <div className={classes['aside-container']}>
        <MyLink onClick={this.linkClickHandler} to="/" iClass="fa fa-home">
          Home
        </MyLink>
        <MyLink active to="/" iClass="fa fa-bell">
          Reminder
        </MyLink>
      </div>
    );
  }
}
