import React from "react";
import info from "../assets/info.png";
import icon2 from "../assets/play-button.png";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen h-screen z-10 aspect-video pt-[20%] px-24 absolute text-white ">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">
          <div className="flex">
            <img
              className="text-xsm mr-2"
              src={icon2}
              alt="icon2"
              style={{ width: "24px", height: "24px" }}
            />{" "}
            Play
          </div>
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">
          <div className="flex">More Info</div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
