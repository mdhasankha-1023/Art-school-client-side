import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Others from "../Layout/Others";
import Login from "../Pages/Login/Login";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/',
        element: <Others></Others>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
  ])

  export default router;