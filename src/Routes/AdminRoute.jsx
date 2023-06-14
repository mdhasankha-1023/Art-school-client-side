import { MagnifyingGlass } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAllUsers from "../Hooks/useAllUsers";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();
    const [allUsers] = useAllUsers();
    const currentUser = allUsers.filter(c => c.email === user.email)
    console.log(currentUser[0])

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



    if(user && currentUser[0]?.role === 'admin'){
        return children;
    }

    return  <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;