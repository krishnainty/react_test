import React from 'react'

export default function Form() {
  return (
    <>
    <h1 className="text-danger">Hello</h1>
      <div className="container-fluid">
        <form >
          <label classNmaest="text-danger">Enter Name:</label>
          <input type="text"></input>
          <br />
          <br />

          <label>Enter RollNo:</label>
          <input type="text"></input>
          <br />
          <br />
          <label>Enter Date of birth:</label>
          <input type="date"></input>
          <br />
          <br />
          <label>Enter Phone Number:</label>
          <input type="text"></input>
          <br />
          <br />



          <label>Enter Email:</label>
          <input type="email"></input>
          <br />
          <br />
          <button>Submit</button>
      
    


    </form >
    </div>
    </>
  )
}
