import React, { useState } from 'react'

import './app.css';

const App = () => {

  const [values, setValues] = useState({
    Name: '',
    Email: '',
    Number: '',
    Message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const HandleNameChange = (e) => {
    setValues({ ...values, Name: e.target.value })
  }
  const HandleEmailChange = (e) => {
    setValues({ ...values, Email: e.target.value })
  }
  const HandleNumberChange = (e) => {
    setValues({ ...values, Number: e.target.value })
  }
  const HandleMessageChange = (e) => {
    setValues({ ...values, Message: e.target.value })
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (values.Name && values.Email && values.Number && values.Message) {
      setValid(true);
      localStorage.setItem("values", JSON.stringify({ values }));
      let getValues = JSON.parse(localStorage.getItem("values"));
      alert(`
        Data Save to LocalStorage
        Name: ${getValues.values.Name}
        Email: ${getValues.values.Email}
        Phone Number: ${getValues.values.Number}
        Message: ${getValues.values.Message}

      
      `);
    }
  }

  return (
    <div className="rf-wrapper">
      <form className='r-form' onSubmit={HandleSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thank You For Submitting</div> : null}
        <label htmlFor="Name">Name:</label>
        <input type="text" name='Name' onChange={HandleNameChange} value={values.Name} />
        {submitted && !values.Name ? <span>Please Enter Name</span> : null}
        <label htmlFor="Email">Email:</label>
        <input type="email" name='Email' onChange={HandleEmailChange} value={values.Email} />
        {submitted && !values.Email ? <span>Please Enter Email</span> : null}
        <label htmlFor="Number">Phone Number:</label>
        <input type="number" name='Number' onChange={HandleNumberChange} value={values.Number} />
        {submitted && !values.Number ? <span>Please Enter Phone Number</span> : null}
        <label htmlFor="Text">Message:</label>
        <textarea name="Text" cols="30" rows="10" onChange={HandleMessageChange} value={values.Message} ></textarea>
        {submitted && !values.Message ? <span>Please Enter Message</span> : null}
        <input type="Submit" defaultValue="Submit" />
      </form>
    </div>
  )
}

export default App