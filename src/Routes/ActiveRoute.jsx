import { NavLink } from "react-router-dom";


const ActiveRoute = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-white bg-[#FF3131]" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;