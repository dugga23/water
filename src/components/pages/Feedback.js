import React, { useState } from "react";
import '../../App.css';
import '../SignUp.css';
import axios from "axios";

export default function Feedback() {
    //const [action, setAction] = useState("Register"); // Changed initial action to "Register"
    const [name,setname]=useState('');
    const[email,setemail]=useState('');
    const[number,setnumber]=useState('');
    const[feedback,setfeedback]=useState('');

    const handlenameText=(evt)=>{
      setname(evt.target.value);
    };
    const handleemailText=(evt)=>{
      setemail(evt.target.value);
    };
    const handlenumberText=(evt)=>{
      setnumber(evt.target.value);
    };
    const handlefeedbackText=(evt)=>{
      setfeedback(evt.target.value);
    };
    const handleSubmit=()=>{
      var obj={
          name:name,
          email:email,
          number:number,
          feedback:feedback
      };
      axios
      .post('http://localhost:5000/submit',obj)
      .then((res)=>{
          alert('Thank You! Form submitted Successfully');
      })
      .catch((err)=>{
          alert(err);
      });
    };
  

    return (
     <div className="flex justify-center items-center h-screen bg-gray-900 pt-[80px]" >
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
            <label className="block text-green-400 mb-2" htmlFor="name">Number:</label>
            <input className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" type="number" id="numbe" name="name" required onChange={handlenumberText}/>
          </div>
          <div className="mb-4">
            <label className="block text-green-400 mb-2" htmlFor="name">Feedback:</label>
            <textarea className="w-full px-3 py-2 bg-gray-700 rounded-md text-white" type="text" id="text"  required  onChange={handlefeedbackText}/>
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
    );
}
