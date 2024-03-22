import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Stopwatch from "../../Pages/Stopwatch/Stopwatch";
import TodoList from "../../Pages/TodoList/TodoList";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "stopwatch",
      element: <Stopwatch /> 
    },
    {
      path: "todo",
      element: <TodoList />
    }
  ])