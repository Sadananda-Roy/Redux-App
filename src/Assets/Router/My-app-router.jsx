import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Stopwatch from "../../Pages/Stopwatch/Stopwatch";
import TodoList from "../../Pages/TodoList/TodoList";
import ChatApp from "../../Pages/Chat/ChatApp";
import InfiniteScroll from "../../Pages/InfiniteScroll/InfiniteScroll";
import Football from "../../Pages/Football/Home/Home";
import Leagues from "../../Pages/Football/Leagues/Leagues";
import ErrorPage from "../../Pages/Error/ErrorPage";
import Dictionary from "../../Pages/Dictionary/Dictionary";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "stopwatch",
      element: <Stopwatch /> 
    },
    {
      path: "todo",
      element: <TodoList />
    },
    {
      path: "chat",
      element: <ChatApp />
    }, 
    {
      path: "infinite-scroll",
      element: <InfiniteScroll />
    },
    {
      path: "football",
      element: <Football />,
      children: [
        {
          path: "",
          element: <Leagues />,
        },
        {
          path: "leagues",
          element: <Leagues />,
        },
      ],
    },
    {
      path: "dictionary",
      element: <Dictionary />
    },

  ])