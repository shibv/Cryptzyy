import React, { useState } from "react";
import TableContent from "./TableContent";
import Table from "./Table";
import gif from "../../assets/gif2.gif";
import { Pagination } from "@mui/material";

const CoinTable = (props) => {
  const [page, setPageNum] = useState(1);

  function handleCLick({ id }) {
    // navigate(`/coins/${id}`)
    // console.log(id)
    console.log("Ys");
  }

  return (
    <>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-[700px] mx-auto mt-8">
          <thead className="border-solid border-b-2 border-grey-400 ">
            <tr>
              <th className="pl-2 py-4 w-16 text-left">#</th>
              <th className="py-4 w-[19em] text-left">Coins</th>
              <th className="py-4 w-52 text-right">Price</th>
              <th className="py-4 w-24 text-right">24h</th>
              <th className="py-4 w-[16rem] text-right">Volume(24h)</th>
              <th className="pr-2 py-4 w-[17rem] text-right">Market Cap</th>
            </tr>
          </thead>
          {!props.loadingStatus && (
            <tbody>
              {props.allCoins
                .slice((page - 1) * 20, (page - 1) * 20 + 20)
                .map((each, index) => {
                  return (
                    <Table
                      themeStatus={props.theme}
                      key={each.id}
                      num={index + 1 + (page - 1) * 20}
                      eachData={each}
                    />
                  );
                })}
            </tbody>
          )}
        </table>
        {props.loadingStatus && (
          <div className="z-0">
            <img src={gif} className="w-[100%]" alt="" />
          </div>
        )}

<div className="flex z-0 justify-center">
        <Pagination
          className="w-fit "
          count={+(props.allCoins?.length / 20).toFixed(0)}
          variant="outlined"
          color="secondary"
          size="small"
          onChange={(e, val) => {
            setPageNum(val);
          }}
        />
      </div>
        

      </div>
    </>
  );
};

export default CoinTable;
