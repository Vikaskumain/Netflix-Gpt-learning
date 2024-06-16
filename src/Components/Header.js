
import Netfilx_logo from "../Images/Netflix_Logo.png";
import {  signOut } from "firebase/auth"
import { auth } from "../Utils/firebase";
import {  useNavigate,  } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  

const user =useSelector((store=>store.user))

  const handlSignout =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
      // An error happened.
      

    });
  } 

  useEffect(() => {
     const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
      navigate("/browser")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }

    });
    // The 'unsubscribe' function in this code snippet serves the purpose of stopping or cleaning up a previous action,
    
    return ()=> unsubscribe()
  }, [dispatch,navigate]);

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
