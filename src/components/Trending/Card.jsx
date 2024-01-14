import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = (props) => {
  
  return (
    <div className={`h-fit p-8 rounded-lg cursor-pointer ${
        props.theme === true
          ? "hover:bg-[#B8B8B8]"
          : "hover:bg-[#001e3c]"
      }`}
      onClick={props.onClick}
      >

<img
        className="w-16 h-16 mx-auto"
        src={props.trendingImg}
        alt="img_trend"
      />
      <p className="text-xs text-blue-grey-700 tracking-wide text-center mt-2">
        {props.trendingName}
      </p>
       
    </div>
  )
}

export default Card
