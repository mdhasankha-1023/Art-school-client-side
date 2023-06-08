import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Others from "../Layout/Others";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            }
        ]
    }
  ])

  export default router;