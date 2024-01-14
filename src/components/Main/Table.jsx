import React from 'react'
import { useNavigate } from 'react-router-dom';

const Table = (props) => {
    const navigate = useNavigate();
    let priceChangePercentage = props.eachData?.price_change_percentage_24h;
    priceChangePercentage = priceChangePercentage?.toFixed(2);
    if (!priceChangePercentage) {
      priceChangePercentage = 0;
    }
  
    let symbol = props.eachData.symbol.toUpperCase();
  
    let price = props.eachData.current_price?.toLocaleString();
    if (!price) {
      price = 0;
    }
  
    let totalVol = props.eachData.total_volume?.toLocaleString();
    if (!totalVol) {
      totalVol = 0;
    }
  
    let marktCap = props.eachData.market_cap?.toLocaleString();
    if (!marktCap) {
      marktCap = 0;
    }
  return (
    <tr onClick={() => navigate(`/coins/${props.eachData?.id}`)}
    className={`border-b-[1px]${
        props.themeStatus === true
          ? "hover:bg-[#B8B8B8]"
          : "hover:bg-[#001e3c]"
      }`}
  >
    <td className="pl-2 py-6 font-medium text-sm">{props.num}</td>
    <td>
      <div className="flex items-center">
        <img
          alt="coin_icon"
          className="w-6 h-6 cursor-pointer"
        
          src={props.eachData?.image}
        />
        <span
          className="ml-3 font-medium text-base hover:underline cursor-pointer first-letter:uppercase"
         
        >
          {props.eachData?.id}
        </span>
        <span
          className="ml-4 font-medium text-xs text-grey-500 cursor-pointer"
          
        >
          {symbol}
        </span>
      </div>
    </td>
    <td className="text-right py-6 font-medium text-sm">${price}</td>
    <td
      className={`text-right py-6 font-medium text-sm ${
        priceChangePercentage > 0 ? "text-green-400" : "text-red-500"
      }`}
    >
      {priceChangePercentage}%
    </td>
    <td className="text-right py-6 font-medium text-sm">${totalVol}</td>
    <td className="pr-2 text-right py-6 font-medium text-sm">${marktCap}</td>
  </tr>
  )
}

export default Table
