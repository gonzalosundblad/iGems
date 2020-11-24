import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from "react-router-dom";
import Taste from './components/Tastes';
import WTF from './components/whatFor';
import MyGems from './components/myGems';
import ForeignGems from './components/foreignGems';
import Videos from './components/Videos';
import Navbar from './components/Navbar';
import Newgem from './components/Newgem';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn'



function App() {
  return (
    <div>
      <BrowserRouter>
          {/* <Route path="/" render={() => <Navbar/>} /> */}
          <Navbar/>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/home" render={() => <Home />} />

          <Route path="/5" render={() => <Taste />} />
          <Route path="/10" render={() => <Taste/>} />
          <Route path="/15" render={() => <Taste/>} />
          <Route path="/20" render={() => <Taste/>} />
          <Route path="/30" render={() => <Taste/>} />
          <Route path="/45" render={() => <Taste/>} />
          <Route path="/60" render={() => <Taste/>} />
          <Route path="/0" render={() => <Taste/>} />

          <Route path="/wtf" render={() => <WTF />} />
          <Route path="/mygems" render={() => <MyGems />} />
          <Route path="/foreign" render={() => <ForeignGems />} />
          <Route path="/videos" render={() => <Videos />} />
          <Route path="/add" render={() => <Newgem />} />
          <Route path="/signin" render={() => <SignIn />} />
          <Route path="/login" render={() => <LogIn/>} />




      </BrowserRouter>
      
    </div>
    )
  }

export default App;
