import { MagnifyingGlass } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useAuth()

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

    return <Navigate to='/login' replace></Navigate>
};

export default PrivetRoute;