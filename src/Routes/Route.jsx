import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    }
  ])

  export default router;