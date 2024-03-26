import React from "react";
import "../../App.css";
import "../About.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const story = () => {
    navigate("/joureny");
  };

  return (
    <div className="about-container">
      <div
        className="bg-cover bg-center min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/pexels-emiliano-arano-1298684.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col md:flex-row justify-center items-center overflow-y-auto">
          <div className="text-center overflow-hidden mx-auto mt-8 md:mt-0 md:ml-auto md:mr-0 lg:mr-4">
            <h1 className="text-white text-4xl md:text-5xl p-1">
              Fully Recycled Water
            </h1>
            <div className="max-h-[80vh] md:max-h-[70vh] lg:max-h-[60vh] overflow-y-auto">
              <p className="text-white text-lg md:text-xl font-normal font-sans px-4 md:px-0">
                Embark on a pioneering initiative in Madhya Pradesh as we
                introduce the first-ever free paper water bottles for animals.
                Our mission is to reduce plastic waste and promote eco-friendly
                practices by providing sustainable alternatives. Join us in this
                groundbreaking effort to provide sustainable solutions to
                orphanages and elderly homes, ensuring a greener and cleaner
                environment for future generations.
              </p>
              <label className="text-white text-lg italic font-sans px-4 md:px-0">
                Discover our inspiring journey and story by clicking here
              </label>
            </div>
            {window.innerWidth >= 768 ? ( // Laptop screen and larger
              <div className="flex justify-center">
                <button
                  className="bg-white w-24 md:w-24 lg:w-40 h-10 md:h-12 lg:h-14 rounded-md hover:bg-[#70d6ff] text-sm md:text-base lg:text-lg"
                  onClick={story}
                >
                  Click Here!
                </button>
              </div>
            ) : (
              // Mobile screen
              <div className="absolute bottom-4 left-0 right-0 z-50 text-center pt-2">
                <button
                  className="bg-white w-24 h-10 rounded-md hover:bg-[#70d6ff] text-sm"
                  onClick={story}
                >
                  Click Here!
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="about-content px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row justify-around mt-8">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-md">
            <h2>Our Company</h2>
            <p className="font-sans">
              Our IT company specializes in web development, game development,
              app development, social media marketing, graphics design,
              training, placement, Google Facebook Ads, E-commerce websites, and
              software development. We provide innovative digital solutions
              tailored to modern business needs, ensuring client satisfaction
              and success in the digital realm. Our dedicated team stays updated
              with the latest trends and technologies, delivering cutting-edge
              solutions for growth and efficiency.
            </p>
          </div>
          <div className="max-w-md">
            <h2>Our Work</h2>
            <p className="font-sans">
              We are excited to announce our new environmentally friendly
              initiative of providing free water. As part of this initiative, we
              are offering paper water bottles, which are eco-friendly and help
              reduce plastic waste. This step reflects our commitment to
              innovative and responsible thinking, as we work with our customers
              towards building a sustainable future. We believe this initiative
              will resonate well with our audience and contribute positively to
              our company's image.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around mt-8">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-md">
            <h2>Our Mission</h2>
            <p>
              Under this initiative, we are providing paper water bottles that
              are environmentally friendly and help reduce plastic waste. This
              step by our company is a symbol of innovative and responsible
              thinking, where we are building a sustainable future with our
              customers. Related initiatives could include:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Recycling Programs: Launching recycling programs where we
                recycle old electronics, paper, and other materials.
              </li>
              <li>
                Carbon Footprint Reduction: Developing strategies to reduce our
                carbon footprint, such as adopting energy-efficient practices
                and promoting sustainable transportation.
              </li>
              <li>
                Green Energy Adoption: Making efforts to become environmentally
                friendly by using renewable energy sources.
              </li>
              <li>
                Community Engagement: Collaborating with local communities to
                support environmental conservation projects and organizing
                awareness campaigns.
              </li>
              <li>
                Environmental Education: Educating our employees and customers
                about the importance of the environment and encouraging
                sustainable living practices.
              </li>
            </ul>
          </div>
          <div className="max-w-md">
            <h2>Our Vision</h2>
            <p>
              Our vision is to create a sustainable future by providing
              environmentally friendly paper water bottles that reduce plastic
              waste. This initiative reflects our commitment to innovative and
              responsible thinking, as we collaborate with our customers to
              build a more sustainable world. Related initiatives that could
              complement this vision include:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Sustainable Packaging: Implementing eco-friendly packaging
                solutions across our products and services to minimize
                environmental impact.
              </li>
              <li>
                Green Supply Chain: Partnering with suppliers who prioritize
                sustainable practices and materials to create a more
                environmentally conscious supply chain.
              </li>
              <li>
                Environmental Advocacy: Engaging in environmental advocacy
                efforts by supporting and participating in initiatives,
                campaigns, and policies aimed at protecting the environment and
                promoting sustainability.
              </li>
              <li>
                Waste Reduction Programs: Implementing waste reduction programs
                within our operations and encouraging recycling and reuse
                practices among employees and customers.
              </li>
              <li>
                Carbon Neutrality: Working towards achieving carbon neutrality
                by reducing emissions and offsetting carbon footprints through
                tree-planting initiatives or renewable energy projects.
              </li>
            </ul>
          </div>
        </div>
        <h2 className="w-180 mx-auto text-center mt-8">Contact Us</h2>
        <p className="mt-4">
          If you have any questions or inquiries, feel free to contact us:
        </p>
        <p>Email: rishusinfotech4@gmail.com</p>
        <p>Phone: 6264601696, 8959409296</p>
      </div>
    </div>
  );
}
