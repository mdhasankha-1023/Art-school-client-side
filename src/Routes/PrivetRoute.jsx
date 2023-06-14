import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MagnifyingGlass } from "react-loader-spinner";


const PrivetRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();

    if(loading){
        return <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#e15b64'
      />
    }



    if(user){
        return children;
    }

    return  <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;