import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import axios from 'axios';



export default function New() {


  const [input, setInput] = useState({
    name: "",
    link: "",
    genre: "",
    description: "",
    time: "",
  })
  const [other, setOther] = useState(false)

console.log(input)
//   var input = {
//     name: 'vsauce',
//     link: 'www.qcyo.com',
//     genre: 'Science'
// }
const handleInputChange = function (e) {
  if(e.target.value == 'Other') setOther(true)
  setInput({
    ...input,
    [e.target.name]: e.target.value
  });
  // setErrors(validate({
  //   ...input,
  //   [e.target.name]: e.target.value
  // }));
}

const sendGem = () => {
  console.log('hee')
axios.post(`http://localhost:8000/gems/`, input)
}




   return (
     
     <div style={{ width: 700, margin: 'auto', marginTop: 65}}>
<br />
      <Form.Group>
      <Form.Control type="text" placeholder="Name" name='name' onChange={handleInputChange} />
      <br/>
      <Form.Control type="text" placeholder="Link" name='link' onChange={handleInputChange}/>
      <br/>
      { !other &&
      <Form.Control as="select" name ='genre' onChange={handleInputChange}>
    <option selected>Select genre</option>
            <option>Music</option>
            <option>Science</option>
            <option>Photography</option>
            <option>Literature</option>
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
            <option>Mustsee live shows</option>
            <option>Cool websites</option>
            <option>Off computer ideas</option>
            <option>Other</option>
  </Form.Control>
}
  {
    other && 
    <div>
      <Form.Control type="text" placeholder="Other Genre" name='genre' onChange={handleInputChange}/>
      <button onClick={() => setOther(false)}>Back to genres</button>
    </div>

  }
  <br />
      <Form.Control type="text" placeholder="Description" name='description'onChange={handleInputChange} />
  <br />
  <Form.Control as="select" name='time' onChange={handleInputChange}>
    <option selected>Select length/time</option>
    <option>5</option>
    <option>10</option>
    <option>15</option>
    <option>20</option>
    <option>30</option>
    <option>45</option>
    <option>60</option>
    <option>undefined</option>
  </Form.Control>
  <br />
  <button onClick={() => sendGem()}>Add</button>
</Form.Group>
   </div>
   )
  
  }