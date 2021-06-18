import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import classes from './MyLink.module.css'

export default class MyLink extends Component {
  state={}
  
  render(){
    const { to, children, iClass, active } = this.props;
    return (
      <div className={`${classes['links-container']} ${active && classes['active']}`}>
        <i className={iClass}></i>
        <Link to={to}>{children}</Link>
      </div>
    );
    
  }
}