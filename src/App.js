import React, { Component} from 'react'
import { Switch, } from 'react-router';
import classes from './App.module.css';
import AppNavBar from './components/appNav/AppNabBar'
import AppAside from './components/appAside/AppAside'
import AppAddNote from './components/appAddNote/AppAddNote';
import AppNoteList from './components/appNoteList/AppNoteList'

class App extends Component {
  state = {
    notes: [],
    id: 1,
    isPined: false
  };

  handleNewNote = (newNote) => {
    
    let newNoteObj = {...newNote, _id: this.state.id, isPined: this.state.isPined}
    
    const stateNotesCopy = [...this.state.notes]
    stateNotesCopy.push(newNoteObj);

    this.setState({ stateNotesCopy, notes: stateNotesCopy, id: this.state.id + 1 });
  };

  render() {
    return (
      <div className={classes.App}>
        <AppNavBar className={classes['nav-bar']} />
        <AppAside className={classes['aside']} />
        <AppNoteList notes={this.state.notes} className={classes['note-list']} />
        <AppAddNote onNewNote={this.handleNewNote} className={classes['add-note']} />

        <Switch>{/* <Route path="/" Component={}></Route> */}</Switch>
      </div>
    );
  }
}

export default App;
