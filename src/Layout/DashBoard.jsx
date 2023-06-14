import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logo/logo.png'
import useSingleUser from "../Hooks/useSingleUser";
import { Helmet } from "react-helmet-async";


const DashBoard = () => {
    const [singleUser] = useSingleUser()

    // user role
    const userRole = singleUser.role;

    return (
        <>
            <Helmet>
                { userRole === 'admin' &&
                    <title>Art-School || Admin Dashboard</title>}
                { userRole === 'student' &&
                    <title>Art-School || Student Dashboard</title>}
                { userRole === 'instructor' &&   
                <title>Art-School || Instructor Dashboard</title>}
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#FEEFDC] text-base-content">
                        {/* Sidebar content here */}
                        <div className="h-1/2">
                            <div className="w-full pb-8">
                                <img src={logo} alt="" />
                            </div>
                            {userRole == 'student' &&
                                <>
                                    <li><Link to='/dashBoard'>Home</Link></li>
                                    <li><Link to='/dashBoard/selected-classes'>Selected Classes</Link></li>
                                    <li><Link to='/dashBoard/enrolled-classes'>Enrolled Classes</Link></li>
                                    <li><Link to='/dashBoard/payment-history'>Payment History</Link></li>
                                </>
                            }
                            {userRole === 'instructor' && <>
                                <li><Link to='/dashBoard'>Home</Link></li>
                                <li><Link to='/dashBoard/add-class'>Add Class</Link></li>
                                <li><Link to='/dashBoard/my-classes'>My Classes</Link></li>
                                <li><Link to='/dashBoard/payment'>Payment</Link></li>
                            </>
                            }
                            {userRole === 'admin' && <>
                                <li><Link to='/dashBoard'>Home</Link></li>
                                <li><Link to='/dashBoard/manage-classes'>Menage Classes</Link></li>
                                <li><Link to='/dashBoard/manage-users'>Menage Users</Link></li>
                            </>
                            }
                        </div>
                        <div className="h-1/2 border-t-2 border-black pt-12">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/instructors'>Instructors</Link></li>
                            <li><Link to='/classes'>Classes</Link></li>
                        </div>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoard;