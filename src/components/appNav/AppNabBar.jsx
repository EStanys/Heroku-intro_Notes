import React, { Component } from 'react';
import classes from './AppNabBar.module.css';
import logo from '../../Images/keep.svg';

export default class AppNavBar extends Component {
  render() {
    return (
      <div className={classes['nav-bar-container']}>
        <div className={classes['logo-container']}>
          <img src={logo} alt="logo"></img>
          <p>
            Keep<strong>Clone</strong>
          </p>
        </div>
        <input placeholder="Search" type="text" />
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </div>
    );
  }
}
