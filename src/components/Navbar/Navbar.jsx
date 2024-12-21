import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";


const Navbar = ({ themeStatus, onSetTheme }) => {
  const watchListCoins = useSelector((state) => state.cart);
 
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <nav className=" flex items-center justify-around h-16 shadow-[0_3px_8px_rgba(0,0,0,0.24)] ">
      <div className="flex items-center" onClick={() => navigate("/")}>
        <img className="h-8 w-8" src={Logo} alt="" />
        <h2 className="text-2xl  font-bold "> Cryptzy </h2>
      </div>
      
      <div className="flex items-center gap-4">
        {themeStatus ? (
          <GoSun className="text-3xl cursor-pointer" onClick={onSetTheme} />
        ) : (
          <IoMoonOutline
            className="text-3xl cursor-pointer"
            onClick={onSetTheme}
          />
        )}
        <span
          onClick={onOpenModal}
          className="bg-[#001e3c] text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-blue-gray-700 "
        >
          WatchList ({watchListCoins.length})
        </span>
        <Modal
           classNames={{
           
            modal: 'w-[95% max-w-[1200px] mx-auto rounded-lg px-6 py-2 mt-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-6  ',
          }}
          open={open}
          onClose={onCloseModal}
          closeIcon=" "
          center
        >
         {
            watchListCoins.map((coins) => (
                <div className="  mx-auto rounded-lg p-6 mt-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-6  ">
                <div className="flex flex-row justify-between gap-20 items-center mb-4 ">
                 
                  <img src={coins.image.large} className="h-8 w-8" alt="" />
                  <p className=" font-bold">{coins.name}</p>
                   
                </div>
              </div>
            ))
         }
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
