import React, { useState } from "react";
import Navbar from './components/Navbar/Navbar'
import Trending from './components/Trending/Trending'
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinPage from "./Pages/CoinPage";
import {Provider} from "react-redux"
import store from './store/store'
import WatchListCoins from "./Pages/WatchListCoins";

function App() {
  const [themeLight, setTheme] = useState(true);


  const onsetThemeHandler = () => {
    setTheme((status) => !status);
  };

  return (
    <BrowserRouter>
     <Provider store={store}>
     <div className={`${themeLight === true ? "" : "bg-[#0a1929] text-white"}`}>
    <Navbar  themeStatus={themeLight} onSetTheme={onsetThemeHandler} />
    <Routes >
    <Route path='/' element={[<Trending  themeStatus={themeLight}   />,<Main themeStatus={themeLight} /> ]}  exact ></Route>
    <Route path='/coins/:id' element={<CoinPage />} exact ></Route>
    <Route path="/watchlistcoins" element={<WatchListCoins />} exact></Route>
    </Routes>
   </div> 
   </Provider>
   </BrowserRouter>
  
  )
}

export default App
