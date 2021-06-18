import React, { Component } from 'react';
import classes from './AppAddNote.module.css';

export default class AppAddNote extends Component {
  render() {
    return (
      <div className={classes['add-note-container']}>
        <h2>Add note</h2>
      </div>
    );
  }
}