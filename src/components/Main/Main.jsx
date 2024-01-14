import React, { useState, useEffect, useCallback } from "react";
import { TrendingCoins, CoinList } from "../api";

import { Input } from "@material-tailwind/react";
import CoinTable from "./CoinTable";


const Main = (props) => {
    const [constantData, setData] = useState([]);
    const [allCryptoCoin, setCryptoCoin] = useState([]);
    const [isLoading, setLoadingState] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");





    const fetchingData = useCallback(async () => {
        setLoadingState(true);
        setError(null);
        try {
          let url = CoinList();
          let response = await fetch(url);
          if (!response.ok) {
            throw new Error("Some thing Went Wrong");
          }
          let data = await response.json();
          setCryptoCoin(data);
          
           
          setData(data);
        } catch (error) {
          setError(error.message);
        }
        
        setLoadingState(false);
      }, []);

      useEffect(() => {
        fetchingData();
      }, [fetchingData]);

      useEffect(() => {
        let id = setTimeout(() => {
          setCryptoCoin(
            constantData.filter((each) => {
              return each.id.includes(search.toLowerCase().trim());
            })
          );
        }, 600);
        return () => {
          clearTimeout(id);
        };
      }, [search, constantData]);


      const onSearchHandler = (e) => {
        setSearch(e.target.value);
      };

  return (
    <div className="p-8 max-w-[1300px] mx-auto">
      <Input
      color={`${props.themeStatus ? "black" : "white"}`}
        type="text"
        label="Search Crypto"
        onChange={onSearchHandler}
        value={search}
      />
      <CoinTable theme={props.themeStatus} allCoins={allCryptoCoin}  errorCoin={error}
        loadingStatus={isLoading} />
    </div>
  )
}

export default Main
