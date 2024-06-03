import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";

function Body() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, [dispatch]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
