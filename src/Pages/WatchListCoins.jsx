import React from 'react'
import { useSelector } from 'react-redux'


const WatchListCoins = () => {
    const watchListCoins = useSelector(state => state.cart);
    console.log(watchListCoins)
    
  return (
    <>
     
      {  watchListCoins.map(coin => (
           <div  className=' w-[95% max-w-[1200px] mx-auto rounded-lg p-6 mt-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-6  '>
           <div className='flex items-center mb-4 gap-2'>
                         <p className=' font-bold'>Trending</p>
           </div>
           
     
         </div>
      ))
     }

       
    </>
    
    
  )
}

export default WatchListCoins
