import React, { Component} from 'react'
import { Switch, } from 'react-router';
import classes from './App.module.css';
import AppNavBar from './components/appNav/AppNabBar'
import AppAside from './components/appAside/AppAside'
import AppAddNote from './components/appAddNote/AppAddNote';
import AppNoteList from './components/appNoteList/AppNoteList'

class App extends Component{
  render(){return (
    <div className={classes.App}>
      <AppNavBar className={classes['nav-bar']} />
      <AppAside className={classes['aside']} />
      <AppNoteList className={classes['note-list']} />
      <AppAddNote className={classes['add-note']} />

      <Switch>
        {/* <Route path="/" Component={}></Route> */}
      </Switch>
    </div>
  );}
}

export default App;
