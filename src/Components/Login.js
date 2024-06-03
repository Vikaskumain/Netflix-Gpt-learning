import React, { useState, useRef } from "react";
import Header from "./Header";
import Validationform from "../Utils/Validationform";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/UserSlice";

function Login() {
  const [issignfrom, setSignform] = useState(true);
  const [errormessage, setErrormessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handlefromValidation = () => {
    // validation the form data
    const message = Validationform(
      email.current.value,
      password.current.value,
      name.current?.value
    );
    setErrormessage(message);

    if (message) return;

    if (!issignfrom) {
      //  sign up form logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/121432906?s=400&u=8dd21dd6c0442f4e090a81bd0681c22db04de169&v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browser");
            })
            .catch((error) => {
              setErrormessage(errormessage, error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // sign in from logic here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  const togglesignform = () => {
    setSignform(!issignfrom);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundimage"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 bg-black my-36 p-12 mx-auto  right-0 left-0 text-white absolute rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {issignfrom ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!issignfrom && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-gray-700 rounded-sm"
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700 rounded-sm "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 rounded-sm "
        />
        <p className="text-red-500 font-bold">{errormessage}</p>
        <button
          className="bg-red-600 p-3 my-3 w-full rounded-lg hover:bg-red-800"
          onClick={handlefromValidation}
        >
          {issignfrom ? "Sign In " : "Sign Up"}
        </button>
        <input className="" type="checkbox" />
        <span className="ml-1">Remember Me</span>
        <h2>
          <span className="cursor-pointer " onClick={togglesignform}>
            {issignfrom
              ? "New to Netflix ? Sign Up Now  "
              : "Already Registered ? Sign In Now  "}
          </span>
        </h2>
        <p className="my-5 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot{" "}
          <span className="text-blue-600 cursor-pointer">Learn more...</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
