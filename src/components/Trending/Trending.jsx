import React, { useCallback, useEffect, useState } from "react";
import { TrendingCoins } from '../api'
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from "./Card";
import GrowthArrowImg from '../../assets/growth-analysis.png'
import { useNavigate } from "react-router-dom";

const responsiveSettings = {
    0: {
      items: 2,
    },
    580: {
      items: 5,
    },
  };

const Trending = (props) => {
    // States
    const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoaded, setTrendingStatus] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
    

    // Functions

    const fetchTrendingCoins = useCallback(async () => {
        try {
          setTrendingStatus(false);
          setError(null);
          let url = TrendingCoins("USD");
          let response = await fetch(url);
          if (!response.ok) {
            throw new Error("Something Went Wrong");
          }
          let data = await response.json();
          setTrendingCoins(data);
          console.log(data)
          setTrendingStatus(true);
          
        } catch (error) {
          setError(error.message);
          setTrendingStatus(true);
        }
       
      }, []);
    
      useEffect(() => {
        fetchTrendingCoins();
       
      }, [fetchTrendingCoins]);



  return (
    <div  className=' w-[95% max-w-[1200px] mx-auto rounded-lg p-6 mt-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-6  '>
      <div className='flex items-center mb-4 gap-2'>
        <img src={GrowthArrowImg} className="w-6 h-6 " alt="" />
        <p className=' font-bold'>Trending</p>
      </div>
      {
        isLoaded &&  (
        <AliceCarousel 
         mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsiveSettings}
        autoPlay >
           {
            trendingCoins.map((eachCoin) => {
                return (
                    <Card 
                    key={eachCoin.id}
                    theme={props.themeStatus} 
                    trendingName={eachCoin.name}
                    trendingImg={eachCoin.image}
                    id = {eachCoin.id}
                    onClick={() => navigate(`/coins/${eachCoin.id}`)} 
                     />
                   
                )

            })
           }


        </AliceCarousel>)
      }


    </div>
  )
}

export default Trending
