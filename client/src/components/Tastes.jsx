import React, { useState } from 'react';
import {connect} from 'react-redux';
import { setLengthAndTaste } from './redux/actions';
import { NavLink } from 'react-router-dom';



function Tastes(props) {

const [interest, setInterest] = useState();

 var a = window.location.href
 var time = a.slice(Math.max(a.length - 2, 1));
 if(time === '/5') {
   time = '5';
 }
 if(time === '/0') {
   time = '0'
 }
 
 // cuando el usuario seleccione el interes,
 // mapear videos q tengan ese (interes + una duracion de {time} minutes) q le paso por props al componente de videos;
 
    return (
      <div className="App">
        <h1>YOUR {time} MIN BREAK!</h1>
        <h2>Choose your interest</h2>
        <select onChange={e => setInterest(e.target.value)} id="inputState" class="form-control"> 
        <option selected>Choose...</option>
            <option>Music</option>
            <option>Science</option>
            <option>Photography</option>
            <option>Literature</option>
            <option>Psychology</option> 
            <option>Shortfilm</option>
            <option>Architecture</option>
            <option>Visual Art</option>
            <option>Dance</option>
            <option>History</option>
            <option>Sports</option>
            <option>Interesting facts</option>
            <option>Mindblowing ideas</option>
            <option>Biographies</option>
            <option>Mustsee videoclips</option>
            <option>Mustsee lives shows</option>
            <option>Cool websites</option>
            <option>Off computer ideas</option>
        </select>
        <NavLink to='/videos' onClick={() => props.setLengthAndTaste({time: time, taste: interest})} className="btn btn-info">take me!</NavLink>
        {/* <button onClick={() => redirect()} className="btn btn-warning">take me!</button> */}
        {/* <button onClick={() => props.setLength(time)} className="btn btn-warning">take me!</button> */}
      </div>
    );
  
  };

  function mapStateToProps(state) {};
  
  function mapDispatchToProps(dispatch) {
    return {
      setLengthAndTaste: (payload) => dispatch(setLengthAndTaste(payload))
    }};

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Tastes)

  
  