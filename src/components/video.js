import React from "react"
import Cell from "../images/cell.mp4"

export default function BackgroundVideo() {
  return (
    <div>
      <video
        loop
        autoPlay
        muted
        className="object-cover w-screen min-h-[650px] md:h-[550px]  z-[-1]"
      >
        <source src={Cell} type="video/mp4" />
      </video>
    </div>
  )
}
