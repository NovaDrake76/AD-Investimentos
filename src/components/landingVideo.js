import React from "react";
import Cell from "../images/video2.mp4";

export default function BackgroundVideo() {
  return (
    <div>
      <video
        loop
        autoPlay
        muted
        className="object-cover w-screen min-h-[700px] md:h-[550px]  z-[-1]"
      >
        <source src={Cell} type="video/mp4" />
      </video>
    </div>
  );
}
