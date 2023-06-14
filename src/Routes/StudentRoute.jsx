import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MagnifyingGlass } from "react-loader-spinner";
import useAllUsers from "../Hooks/useAllUsers";


const StudentRoute = ({children}) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const [allUsers] = useAllUsers();
    const currentUser = allUsers.filter(c => c.email === user.email)
    console.log(currentUser[0])

    if (loading) {
        return <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#e15b64'
        />
    }



    if (user && currentUser[0]?.role === 'student') {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;