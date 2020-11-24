import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
// import {connect} from 'react-redux';
// import { postUser } from './redux/actions'
import axios from 'axios'




export default function SignIn() {


    return (



<form style={{ width: 300, margin: 'auto', marginTop: 65}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email or username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or user"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Log In</button>
</form>

    )



}

