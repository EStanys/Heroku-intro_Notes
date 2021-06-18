import React, { Component } from 'react';
import classes from './AppNoteList.module.css';

export default class AppNoteList extends Component {
  render() {
    return (
      <div className={classes['note-list-container']}>
        <h2>Note Lists</h2>
      </div>
    );
  }
}