import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Others from "../Layout/Others";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Classes from "../Pages/Home/Classes/Classes/Classes";
import DashBoard from "../Layout/DashBoard";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome/DashBoardHome";
import SelectedClasses from "../Pages/DashBoard/SelectedClasses/SelectedClasses";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PrivetRoute from "./PrivetRoute";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ]
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
    },
    {
        path: '/dashBoard',
        element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
        children:[
            {
                path: '/dashBoard',
                element: <DashBoardHome></DashBoardHome>
            },
            {
                path: '/dashBoard/selected-classes',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: '/dashBoard/payment',
                element: <Payment></Payment>
            }
        ]
    }
  ])

  export default router;