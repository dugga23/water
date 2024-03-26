import React, { useState } from "react"; // Import useState
import "../../App.css";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [action, setAction] = useState("Services");
  const navigate = useNavigate();
  const change = () => {
    navigate("/contact");
  };

  return (
    <div className="p-2 md:p-0">
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: "url('/images/pexels-pixabay-327090.jpg')" }}
      >
        <div className="md:pt-[250px] pt-[162px] text-center justify-center bg-black bg-opacity-45 h-full ">
          <h1 className="text-white font-bold text-4xl md:text-5xl">
            Our Services
          </h1>
          <p className="text-white mx-4 md:mx-[200px] text-lg md:text-xl font-sans">
            Introducing our latest initiative – "Free Water" service! Now, every
            customer has the opportunity to enjoy complimentary water, while
            giving your business an extra boost. Embracing modern trends, we
            also offer innovative advertising solutions to enhance your business
            presence. It's time to propel your business towards progress and
            development!
          </p>
          <div className="flex flex-col md:flex-row justify-center md:gap-4 pt-4 md:pt-8 items-center">
            <button
              className="bg-[#2636a7] hover:bg-white  hover:text-blue-700 w-[50%] md:w-[120px] rounded h-[50px] md:h-[50px] text-lg md:text-xl text-white mb-4 md:mb-0"
              onClick={change}
            >
              Contact Us
            </button>
            {/* <button className="bg-[#2636a7] hover:bg-white hover:text-blue-700 w-[50%] md:w-[120px] rounded h-[50px] md:h-[50px] text-lg md:text-xl text-white">
              Subscribe
            </button> */}
          </div>
        </div>
      </div>

      {/* section-1 */}
      <div className="bg-black mb-8 mr-4 ml-4">
        <section className="flex flex-col md:flex-row justify-center gap-8 pt-10 md:pt-[40px]">
          <div className="bg-[#8d99ae] w-full md:w-[calc(33.33% - 2rem)] h-auto rounded-lg transition-transform transform hover:scale-105 p-6">
            <h1 className="text-white font-sans font-bold text-[25px]">Give Your Brand a Splash Hit with Our Water-Themed Promotion!</h1>
            <p className="text-white font-sans">
              services ad "We're the ad pros who mix your brand with the cool
              vibes of water. Picture this: your brand floating smoothly in a
              stream of creativity, catching eyes like ripples in a pond. We'll
              make your brand stand out, creating waves in the market and
              sticking in people's minds. Trust us to give your brand a
              refreshing boost, making it shine in the crowded sea of choices.
              With our water-themed promotion, your brand will be a splash hit!"
            </p>
          </div>
          <div className="bg-[#8d99ae] w-full md:w-[calc(33.33% - 2rem)] h-auto rounded-lg transition-transform transform hover:scale-105 p-6">
            <h1 className="text-white font-sans font-bold text-[25px]">Empower Your Brand's Compassionate Journey: Supporting Animals and Birds!</h1>
            <p className="text-white font-sans">
              animal and birds "Join us in spreading love beyond boundaries! Our
              ad company not only cares for humans but also extends a helping
              hand to our furry and feathered friends. With every ad, we're
              providing food and water for animals. Make your brand part of this
              compassionate journey – where every meal becomes a moment of joy
              for those who can't say 'thank you.' Let's make the world a better
              place, together.
            </p>
          </div>
        </section>

        {/* section-2 */}
        <section className="flex flex-col md:flex-row justify-center gap-8 pt-8 md:pt-[40px]">
          <div className="bg-[#8d99ae] w-full md:w-[calc(33.33% - 2rem)] h-auto rounded-lg transition-transform transform hover:scale-105 p-6">
            <h1 className="text-white font-sans font-bold text-[25px]">Quench Your Thirst and Boost Your Brand with FREE Water Offer!</h1>
            <p className=" text-white font-sans">
              free water "Stay refreshed with a twist! We're offering FREE
              water, and guess what? It comes with your company's ad! Quench
              your thirst while spreading your brand message. It's a win-win!
              Grab a bottle, stay hydrated, and let your brand shine. Cheers to
              cool sips and hot promotions!
            </p>
          </div>
          <div className="bg-[#8d99ae] w-full md:w-[calc(33.33% - 2rem)] h-auto rounded-lg transition-transform transform hover:scale-105 p-6">
            <h1 className="text-white font-sans font-bold text-[25px]">Drink, Refill, Recycle: Sip Responsibly and Save the Planet!</h1>
            <p className=" text-white font-sans">
              recycle Drink up and feel good! Our water bottles are not only for
              sipping but also for helping the Earth. They're made to be
              recycled, so every time you take a gulp, you're also making a
              little difference. Let's keep it simple: drink, refill, and
              recycle!
            </p>
          </div>
          <div className="bg-[#8d99ae] w-full md:w-[calc(33.33% - 2rem)] h-auto rounded-lg transition-transform transform hover:scale-105 p-6">
            <h1 className="text-white font-sans font-bold text-[25px]">Partner with Purpose: Amplify Your Brand's Impact through Charitable Donations!</h1>
            <p className="text-white font-sans">
              you can donate Beyond advertising, we believe in giving back! For
              every partnership with our ad company, we contribute a portion to
              charitable causes. Join us in making a difference – where every ad
              not only promotes your brand but also supports those in need.
              Together, let's create a positive impact and spread the spirit of
              giving.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
