import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MagnifyingGlass } from "react-loader-spinner";
import useSingleUser from "../Hooks/useSingleUser";


const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();
    const [singleUser, isLoading] = useSingleUser();
    

    if(loading || isLoading){
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



    if(user && singleUser?.role === 'instructor'){
        return children;
    }

    return  <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;