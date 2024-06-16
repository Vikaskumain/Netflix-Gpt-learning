
import Login from "./Login";
import { RouterProvider,  } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Browser from "./Browse";


function Body() {
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
