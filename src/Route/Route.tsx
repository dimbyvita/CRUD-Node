import { createBrowserRouter } from "react-router-dom";
import { CalendarContainer } from "../Calendar/Container/CalendarContainer";
import App from "../App";

export const router = createBrowserRouter (
    [
      {
        path: '/',
        element: <App/>,
        children: [
          {
            path: 'calendar',
            element: <CalendarContainer />
          }
        ]

      },
      {
        path: '*',
        element: <p>404</p>
      }
     
    ]
  )