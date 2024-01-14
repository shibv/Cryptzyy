import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import CoinGraph from "../components/Graph/CoinGraph";
import gif from "../assets/gif2.gif";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const CoinPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [coin, setCoin] = useState();

  const fetchCoin = async () => {
    try {
      let response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      let data = await response.json();
       console.log(data)
      setCoin(data);
    } catch (error) {
      //  console.log(error)
    }
  };

  useEffect(() => {
    fetchCoin();
  }, []);


  const addToCart = (data) => {
    dispatch(add(data))

  }

  return coin ? (
    <div className="flex flex-col sm:flex sm:flex-row h-screen ">
      <div className="w-[100%]  sm:w-[30%] flex flex-col items-center p-4 ">
        <img src={coin?.image.large} className=" w-18 h-18 " alt="" />
        <h3 className="text-xl font-bold mt-4">{coin?.name}</h3>
        <p className="text-sm text-gray-700 flex justify-center items-center ">
          {coin?.description.en.split(". ")[0]}
        </p>

        <div className="flex flex-col  items-start mt-2 ">
          <div className="ml-[-120px] flex gap-4 ">
            <span className="font-semibold">Rank:</span>
            <span>{coin?.market_cap_rank}</span>
          </div>
          <div className="ml-[-120px] flex gap-4 ">
            <span className="font-semibold">Current Price:</span>
            <span> $ {coin?.market_data.current_price.usd}</span>
          </div>
          <div className="ml-[-120px] flex gap-4 ">
            <span className="font-semibold">Market Cap:</span>
            <span>$ {coin?.market_data.market_cap.usd}</span>
          </div>
        </div>
        <span onClick={() =>  addToCart(coin)}  className='bg-[#001e3c] text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-blue-gray-700 '>
         Add to Watchlist
    </span>
      </div>

      <CoinGraph coin={coin} id={id} />
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <img src={gif} alt="gif" className="w-26 h-26 " />
    </div>
  );
};

export default CoinPage;
