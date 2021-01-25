import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
        <Route path='/users'
          render={() => <UsersContainer /> } />
      </div>
    </div>
  );
}

export default App;
