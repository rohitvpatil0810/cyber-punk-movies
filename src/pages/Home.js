import React from "react";
import vector from "../img/vector.svg";
import about from "../img/about.svg";
import contact from "../img/contact.svg";
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="col-span-3 pr-10">
          <div className="bg-gradient-to-tl from-cyan-600 rounded-[200px] rounded-br-full flex justify-center py-6">
            <img src={vector} alt="vector" className="w-10/12" />
          </div>
        </div>
        <div className="col-span-2 py-6 flex flex-col justify-center">
          <h1 className="text-6xl text-cyan-300 pb-10">Hello, out there!</h1>
          <p className="text-xl text-slate-400 pb-8">
            Cyberpunk, a science-fiction subgenre characterized by
            countercultural antiheroes trapped in a dehumanized, high-tech
            future. Films typically featuring advanced, futuristic technology,
            such as artificial intelligence and virtual reality can be searched
            here.
          </p>
          <a href="#about">
            <div className="relative group w-fit">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 to-cyan-600 rounded-lg blur opacity-75 group-hover:opacity-90 group-hover:scale-102 transition duration-1000 group-hover:duration-200 "></div>

              <button className="relative bg-gradient-to-r from-cyan-300 to-cyan-500 rounded-md px-3 py-2 font-bold group-hover:scale-102 transition duration-1000">
                About Us &rarr;
              </button>
            </div>
          </a>
        </div>
      </div>
      {/* <!-- ABOUT --> */}
      <div id="about" className="grid grid-cols-5 my-10">
        <div className="col-span-2 py-6 flex flex-col justify-center pr-10">
          <h1 className="text-6xl text-cyan-300 pb-10">About Us</h1>
          <p className="text-xl text-slate-400 pb-8">
            Cyberpunk is a theme that is played in a lot of games and movies. In
            addition, Cyberpunk's dark feel has permeated the cinema industry.
            Here is a list of just a few of the great movies related to
            Cyberpunk.
          </p>
          <div className="relative group w-fit">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 to-cyan-600 rounded-lg blur opacity-75 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-gradient-to-tr from-cyan-600 rounded-bl-[600px] rounded-[20px] flex justify-end py-6 pr-10">
            <img src={about} alt="vector" className="w-10/12" />
          </div>
        </div>
      </div>
      {/* <!-- CONTACT --> */}
      <div id="contact" className="grid grid-cols-5 my-10">
        <div className="col-span-3 mr-10">
          <div className="bg-gradient-to-tl from-cyan-600 rounded-br-[400px] rounded-[20px] flex justify-start py-6 pl-10 overflow-hidden">
            <img src={contact} alt="vector" className="w-10/12" />
          </div>
        </div>
        <div className="col-span-2 py-6 flex flex-col justify-center text-xl">
          <h1 className="text-6xl text-cyan-300 pb-8">Contact Us</h1>
          <div className="flex flex-col justify-evenly text-slate-400">
            <h1 className="flex items-center pb-4">
              <span className="material-icons pr-2"> email </span>{" "}
              ankushmehta1106@gmail.com
            </h1>
            <h1 className="flex items-center pb-4">
              <span className="material-icons pr-2"> location_on </span>Pune
              Institute of Computer Technology, Pune
            </h1>
            <h1 className="flex items-center pb-4">
              <span className="material-icons pr-2"> call </span> +91 8652182035
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
