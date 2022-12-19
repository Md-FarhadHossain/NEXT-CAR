import React from "react";
// import heroBG from "../../../assets/heroBG.avif";
// import wave from '../../../assets/wave.svg'
import carImage from "../../../assets/29k.png";
import hero from "../../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section style={{
      backgroundImage: `url(${hero})`,
      backgroundAttachment: 'fixed'
    }} className="">
      <div className="hero  h-[86vh] relative bg-gradient-to-r from-[#f1b1b1] to-[#82e6e8e2]">
        <div className="container mx-auto flex items-center justify-between flex-col lg:flex-row md:flex-row">
          {/* Left side */}
          <div className="mr-8" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <div className="text-center lg:text-left md:text-left">
              <h1 className="lg:text-7xl md:text-4xl text-5xl font-extrabold">
                Choose Your Favourite Car
              </h1>
              <p className="py-6 text-2xl">
                Buy and sell any cars and with exclusive price find in your
                area.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>

          {/* Right side */}
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="flex lg:justify-end md:justify-end justify-center">
            <img className="w-[85%]" src={carImage} alt="carImage" />
          </div>

          <div>
            {/* <svg className="absolute right-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L80,197.3C160,203,320,213,480,213.3C640,213,800,203,960,165.3C1120,128,1280,64,1360,32L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}

            {/* <svg
              className="absolute right-0 bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#fff"
                fillOpacity="1"
                d="M0,288L1440,192L1440,320L0,320Z"
              ></path>
            </svg> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
