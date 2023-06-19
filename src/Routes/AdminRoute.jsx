import { MagnifyingGlass } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useSingleUser from "../Hooks/useSingleUser";


const AdminRoute = ({children}) => {
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



    if(user && singleUser?.role === 'admin'){
        return children;
    }

    return  <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;