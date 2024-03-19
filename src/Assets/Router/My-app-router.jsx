import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Stopwatch from "../../Stopwatch/Stopwatch";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "stopwatch",
      element: <Stopwatch /> 
    }
  ])