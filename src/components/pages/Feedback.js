import React, { useState } from "react";

export default function Feedback() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [feedback, setfeedback] = useState('');

  const handlenameText = (evt) => {
    setname(evt.target.value);
  };
  const handleemailText = (evt) => {
    setemail(evt.target.value);
  };
  const handlenumberText = (evt) => {
    setnumber(evt.target.value);
  };
  const handlefeedbackText = (evt) => {
    setfeedback(evt.target.value);
  };
  const handleSubmit = () => {
    var obj = {
      name: name,
      email: email,
      number: number,
      feedback: feedback
    };
    fetch('https://water4all-backend-7qi4.onrender.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then((res) => {
      if (res.ok) {
        alert('Thank You! Form submitted Successfully');
      } else {
        throw new Error('Failed to submit form');
      }
    })
    .catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 pt-[80px]">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[450px]">
        <h2 className="text-2xl font-semibold mb-4 text-green-500">Feedback Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-green-400 mb-2" htmlFor="name">Name:</label>
            <input className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" type="text" id="name" name="name" required onChange={handlenameText} />
          </div>
          <div className="mb-4">
            <label className="block text-green-400 mb-2" htmlFor="email">Email:</label>
            <input className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" type="email" id="email" name="email" required onChange={handleemailText} />
          </div>
          <div className="mb-4">
            <label className="block text-green-400 mb-2" htmlFor="number">Number:</label>
            <input className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" type="number" id="number" name="number" required onChange={handlenumberText} />
          </div>
          <div className="mb-4">
            <label className="block text-green-400 mb-2" htmlFor="feedback">Feedback:</label>
            <textarea className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" id="feedback" required onChange={handlefeedbackText}></textarea>
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md" type="button" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}
