import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
// import {connect} from 'react-redux';
// import { postUser } from './redux/actions'
import axios from 'axios'


export default function SignIn(
                  // { postUser }
                                ) {

  const[valid, setValid] = useState('')
  const[input, setInput] = useState({
    name: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
    country: '',
    city: '',
    state: ''
  })

  var missing;
  var passwordNotMatch;
  var passwordIsShort;
  if(!input.name || !input.lastname || !input.email || !input.username || !input.password || !input.confirmpassword || !input.country || !input.city || !input.state) missing = true;
  if(input.password !== input.confirmpassword) passwordNotMatch = true;
  if(input.password.length < 6) passwordIsShort = true;
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  //   if(e.target.name == 'email') {
  //       axios.get('http://localhost:8000/users/', input.email).then(res=> {console.log(res)}).catch(err => {console.log('email ok')})
  //   }
  //   if(e.target.name == 'username') {
  //   axios.get('http://localhost:8000/users/', input.username).then(res=> {console.log('email taken')}).catch(err => {console.log('username ok')})
  // }
  }

  var validateData = (e) => {

    e.preventDefault();

    if(missing) return alert('missing fields')
    if(passwordNotMatch) return alert('password is not matching')
    if(passwordIsShort) return alert('password should contain at least 6 valid characters')

    axios.post('http://localhost:8000/users/', input)
    .then(resp => {
      setValid(true)
      alert('user created successully')
    })
    .catch(err => 
      { 
      if(err.response.data.parent) {
      if(err.response.data.parent.constraint === "users_email_key") {
              return alert('email taken');
          }
      if(err.response.data.parent.constraint === "users_username_key") {
               return alert('username taken');
          }
      
     }}
     )
     
  }


      return (
    <div>
      { !valid && 
        <form style={{ width: 550, margin: 'auto', marginTop: 65}}>
  <div class="form-row">
  <div class="form-group col-md-3">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" id="inputEmail4" name="name" onChange={handleChange}/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputEmail4">Lastname</label>
      <input type="text" class="form-control" id="inputEmail4" name="lastname" onChange={handleChange}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email</label>
      <input type="email" class="form-control" id="inputPassword4" name="email" onChange={handleChange}/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Username</label>
      <input type="text" class="form-control" id="inputEmail4" name="username" onChange={handleChange}/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" name="password" onChange={handleChange}/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Confirm Password</label>
      <input type="password" class="form-control" id="inputPassword4" name="confirmpassword" onChange={handleChange}/>
    </div>
    
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Country</label>
      <input type="text" class="form-control" id="inputCity" name="country" onChange={handleChange}/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" name="city" onChange={handleChange}/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Prov/State</label>
      {/* <select id="inputState" class="form-control" name="state" onChange={handleChange}>
        <option selected>Choose...</option>
        <option>Buenos Aires</option>
        <option>Tucuman</option>
        <option>Cordoba</option>
        <option>Buenos Aires</option>
        <option>Buenos Aires</option>
        <option>Buenos Aires</option>
        <option>Buenos Aires</option>
        <option>Buenos Aires</option>
        <option>Buenos Aires</option>

      </select> */}
      <input type="text" class="form-control" id="inputCity" name="city" onChange={handleChange}/>
    </div>
  </div>
  <div class="form-group">
    
  </div>
  {/* { resp.status && resp.status==400 && (
    <h3>NO</h3>
  )} */}

  
  <button class="btn btn-warning" onClick={validateData}>Create User</button>
</form>
  }
  { valid && (
    
    <div style={{ width: 700, margin: 'auto', marginTop: 65}}>

      <NavLink to='/login' type="submit" class="btn btn-primary" disabled='true'>Login</NavLink>
    </div>
  )}
  
  </div>
  )
};



// function mapStateToProps(state) {
  
// };

// const mapDispatchToProps = dispatch => {
// return {
//   postUser: () => dispatch(postUser()),
// }
// }

// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(SignIn)

