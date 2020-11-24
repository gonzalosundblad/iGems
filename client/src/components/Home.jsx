import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';





export default function Choose() {

      return (
        <div className="App">
        <div className="jumbotron">
            <h1 className="display-4">Internet Gems</h1>
            <p className="lead">Stop swaping instagram stories! Enjoy your free time</p>
            <hr className="my-4"/>
            <p>Choose your leisure time</p>
            <div>
                <NavLink to='/5' className="btn btn-info btn-md mr-1" role="button">5 min</NavLink>
                <NavLink to='/10' className="btn btn-info btn-md mr-1" role="button">10 min</NavLink>
                <NavLink to='/15' className="btn btn-info btn-md mr-1" role="button">15 min</NavLink>
                <NavLink to='/20' className="btn btn-info btn-md mr-1" role="button">20 min</NavLink>
                <NavLink to='/30' className="btn btn-info btn-md mr-1" role="button">30 min</NavLink>
                <NavLink to='/45' className="btn btn-info btn-md mr-1" role="button">45 min</NavLink>
                <NavLink to='/60' className="btn btn-info btn-md mr-1" role="button">60 min</NavLink>
                <NavLink to='/0' className="btn btn-info btn-md mr-1" role="button">Undefined</NavLink>
            </div>
        </div>
        </div>
    
      )
};