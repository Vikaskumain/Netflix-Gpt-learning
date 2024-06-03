import React from "react";
import Netfilx_logo from "../Images/Netflix_Logo.png";
import {  signOut } from "firebase/auth"
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Header() {
  
const navigate = useNavigate()
const user =useSelector((store=>store.user))

  const handlSignout =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")

    });
  } 

  return (
    <div className="absolute w-screen px-20 py-3 bg-gradient-to-b from-black  flex justify-between z-10">
      <img className="w-44" src={Netfilx_logo} alt=" logo" />
     {user && <div className=" flex">
        <img 
          className="h-9 mt-4 rounded-xl "
          src={user?.photoURL}
          alt="usericon"
        />
        <button  onClick={handlSignout} className="bg-transparent bg-red-500 hover:bg-red-700  text-white font-semibold hover:text-white w-24 ml-2 h-8 mt-4 border border-black hover:border-transparent rounded">
          Sign Out
        </button>
      </div>}
    </div>
  );
}

export default Header;
