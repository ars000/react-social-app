
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dialogs from './components/Dialogs';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news"  />
          <Route path="/music"  />
          <Route path="/settings"  />
        </main>      
      </div>
    </BrowserRouter>
  );
}

export default App;
