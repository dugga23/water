import React from "react";
import "../../App.css";
import "../../components/Ad.css";
import Footer from "../Footer";
import myImage from "../../../src/images/img-11.jpg";
// import MyImage from "../../../pexels-leeloo-the-first-8970661.jpg";
import mYImage from "../../../src/images/img-4.jpg";
// import MYImage from "../../../src/images/img-5.jpg"

export default function Ad() {
  return (
    <div class="containerBox">
      <div className="mainBox1 pt-20">
        <div className="box1">
          <div>
            {/* <img className="img1" src={myImage} alt="My Image" /> */}
            <img className="img1" src="./images\pexels-leeloo-the-first-8970661.jpg" alt="My Image" />
          </div>
        </div>
        <div className="box2">
          <div>
         
            <p>
              Get ready for something special – our 'Save Water' website is on
              its way! When you click on ads, you're not just browsing – you're
              helping us support water conservation and communities in need.
              We're committed to donating 10% of the ad revenue generated on our
              platform to this important cause. Every click you make contributes
              to positive change and empowers us to save water and uplift those
              who need it most. Join us on this journey towards a greener, more
              sustainable world. Thank you for being a part of our mission and
              for making a real difference!
            </p>
          </div>
        </div>
      </div>

      <div className="mainBox2">
        <div className="box3">

          <p>
            Exciting news! Our 'Save Water' website is almost here, focused on
            water conservation. We're committed to donating 10% of all earnings
            to charities supporting this cause and helping communities in need.
            Your support will make a real impact! Join us in our mission to
            preserve this vital resource and create a sustainable future.
            Together, we can make a difference and inspire positive change.
            Thank you for being a part of our journey towards a greener world!
          </p>
        </div>
        <div className="box4">
          <div>
            {/* <img className="img1" src={MyImage} alt="My Image" /> */}
            <img className="img1" src={myImage} alt="My Image" />
          </div>
        </div>
      </div>

      <div class="containerBox2">
        <div className="mainBox5">
          <div className="box5">
            <div>
              <img className="img1" src={mYImage} alt="My Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
