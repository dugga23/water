import React, { useState } from "react";

export default function Get() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [description, setdescription] = useState('');

  const handlefnText = (evt) => {
    setfirstname(evt.target.value);
  };
  const handlelnText = (evt) => {
    setlastname(evt.target.value);
  };
  const handleemailText = (evt) => {
    setemail(evt.target.value);
  };
  const handledescriptionText = (evt) => {
    setdescription(evt.target.value);
  };
  const handleSubmit = () => {
    var obj = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      description: description
    };
    fetch('https://water4all-backend-7qi4.onrender.com/Get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then((res) => {
      if (res.ok) {
        alert('Thank You! For connecting with us');
      } else {
        throw new Error('Failed to submit form');
      }
    })
    .catch((err) => {
      alert(err.message);
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900 pt-[80px]">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[450px]">
          <h2 className="text-2xl font-semibold mb-4 text-green-500">Get in touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-green-400 mb-2" htmlFor="firstname">First Name:</label>
              <input className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" type="text" id="firstname" name="firstname" required onChange={handlefnText} />
            </div>
            <div className="mb-4">
              <label className="block text-green-400 mb-2" htmlFor="lastname">Last Name:</label>
              <input className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" type="text" id="lastname" name="lastname" required onChange={handlelnText} />
            </div>
            <div className="mb-4">
              <label className="block text-green-400 mb-2" htmlFor="email">Email:</label>
              <input className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" type="email" id="email" name="email" required onChange={handleemailText} />
            </div>
            <div className="mb-4">
              <label className="block text-green-400 mb-2" htmlFor="description">Description:</label>
              <textarea className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" id="description" required onChange={handledescriptionText}></textarea>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md" type="button" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
