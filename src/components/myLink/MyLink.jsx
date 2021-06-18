import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import classes from './MyLink.module.css'

export default class MyLink extends Component {
 

  render() {
    const { to, children, iClass, onActiveHandler, active } = this.props;
    return (
      <div
        onClick={onActiveHandler}
        className={active ? `${classes['links-container']} ${classes['active']}` : classes['links-container']}
      >
        <i className={iClass}></i>
        <Link to={to}>{children}</Link>
      </div>
    );
  }
}