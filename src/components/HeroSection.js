import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  
  const navigate = useNavigate()
  
  const signup =() =>{
    navigate("/getintouch")
  }

  const adsvertise =() =>{
    navigate("/ad")
  }
  return (
    <div className="pt-[80px]">
      <div className="relative">
        <video autoPlay muted loop className="hidden md:block md:w-full md:h-[89vh] md:object-fill">
          <source
            src="videos/video (2160p).mp4"
            type="video/mp4"
            className="w-full"
          />
          Your browser does not support the video tag.
        </video>
        <div className="md:absolute inset-0 flex items-center justify-center w-full h-auto pt-5 md:bg-transparent bg-black">
        <div className="text-center border-2 border-white h-auto w-auto p-5 md:animate-pulse md:animate-none rounded-lg">
            <p className="text-white text-xl md:text-5xl lg:text-6xl xl:text-7xl font-sans mb-4">
              SAVE WATER
            </p>
            <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-sans mb-6">
              YOUR BRAND IN EVERY HAND...WE MAKE IT HAPPEN
            </p>
            <div className="mt-5 flex flex-col md:flex-row justify-center items-center">
              <div className="mb-4 md:mb-0 md:mr-4">
                <button onClick={signup}
                 className="w-28 h-14 flex text-white justify-center items-center border border-white rounded"
        >
                  GET STARTED
                </button>
              </div>
              <div>
                <button onClick={adsvertise}
                className="w-48 h-14 bg-slate-200 flex justify-center items-center border border-white rounded"
                >
                  WATER ADVERTISING <i className="far fa-play-circle" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
