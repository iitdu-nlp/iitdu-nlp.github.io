import { useEffect, useRef } from "react";
import Typed from "typed.js";
import backgroundImage from "../../../assets/net.jpg";
import banglaBanner from "../../../assets/banner.png";
import bannerGif from "../../../assets/heroBackground.gif";

const Banner = () => {
  const typedRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     strings: ["BTB", "BTC", "SASS"],
  //     typeSpeed: 120,
  //     backSpeed: 140,
  //     loop: true,
  //   };

  //   const typed = new Typed(typedRef.current, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div
      className="text-white"
      style={{
        backgroundImage: `url(${banglaBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#2eb88c] font-bold text-4xl p-2">IIT, DU NLP</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Bangla Natural Language Processing
        </h1>
        {/* <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <span
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            ref={typedRef}
          />
        </div> */}
        <p className="md:text-2xl text-xl font-bold text-white">
          Hello! We are a group of enthusiastic people wanting to solve the many
          problems around Bangla Natural Language Processing. We extensively
          focus on social inclusion and accessibility for universalism of human
          values.
        </p>
      </div>
    </div>
  );
};

export default Banner;
