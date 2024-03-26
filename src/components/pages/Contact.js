import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

export default function contact() {

  return (
    <div className="justify-center text-center bg-black pt-[80px] p-2 md:p-0">
      <div className="relative">
        <img
          src="/images/pexels-pixabay-220213.jpg"
          alt="Your Image"
          className="w-full h-[400px] object-cover"
          // onLoad={(e) => {
          //   e.target.nextElementSibling.style.height = `${e.target.offsetHeight}px`;
          // }}
        />
        <div className="absolute inset-0 bg-black opacity-50 h-[400px]">
          <h1 className="text-white font-bold justify-center text-center pt-[185px] text-[45px]">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="pt-[100px]">
        <button className="w-40 h-10 bg-slate-400 hover:bg-white">
          Contact Info
        </button>
      </div>
      <section className="flex justify-center text-center items-center space-x-4 pt-[80px]">
  <div class="w-[300px] h-[250px] bg-gray-400 hover:bg-white flex items-center justify-center rounded-md">
    <p class="text-xl font-bold">
      <head className="flex justify-center text-center">
        {/* <img src="/images/location.png" width="30" height="30" /> */}
        <h1 className="text-[hsl(210,69%,56%)]">Address</h1>
      </head>
      <label>401, Sairam Plaza Mangal Nagar, Indore</label>
    </p>
  </div>
  <div class="w-[300px] h-[250px] bg-gray-400 hover:bg-white flex items-center justify-center rounded-md">
    <p class="text-xl font-bold">
      <head className="flex text-center justify-center">
        {/* <img src="/images/telephone.png" width="30" height="30" />&nbsp; */}
        <h1 className="text-[hsl(210,69%,56%)]">Phone</h1>
      </head>
      <label>+91 9283735252</label>
    </p>
  </div>
  <div class="w-[300px] h-[250px] bg-gray-400 hover:bg-white flex items-center justify-center rounded-md">
    <p class="text-xl font-bold">
      <head className="flex justify-center text-center">
        {/* <img src="/images/mail.png" width="30" height="30" />&nbsp; */}
        <h1 className="text-[hsl(210,69%,56%)]">Email</h1>
      </head>
      <label>rishusinfotech@gmail.com</label>
    </p>
  </div>
</section>

<style jsx>{`
  @media only screen and (max-width: 767px) {
    .flex {
      flex-direction: column;
      gap: 1rem;
    }

    .flex > div {
      width: 100%;
      height: auto;
    }
  }
`}</style><br/>
   <div>
  <div className="flex justify-center items-center h-auto bg-gray-900 pt-4">
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[600px]">
      <h2 className="text-2xl font-semibold mb-4 text-green-500">Connect with Us</h2>
      <div className="mb-4 text-white">
        <p>We would love to hear from you!</p>
        <p>Click the button below to connect with us:</p>
      </div>
      <a href="/getintouch" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-4 block text-center">Get in touch</a>
    </div>
  </div>
</div>

    </div>
  );
}


