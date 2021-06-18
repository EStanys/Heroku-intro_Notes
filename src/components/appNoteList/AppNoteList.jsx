import React, { Component } from 'react';
import classes from './AppNoteList.module.css';
import AppNoteListEl from '../appNoteListEl/AppNoteListEl'

export default class AppNoteList extends Component {
  render() {
    const { notes } = this.props
    return (
      <ul className={classes['note-list-container']}>
        {notes.map(note => <AppNoteListEl note={note} />)}
      </ul>
    );
  }
}