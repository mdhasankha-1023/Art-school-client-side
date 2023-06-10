import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logo/logo.png'


const DashBoard = () => {

    const listOption = <>
    <li><Link to='/dashBoard/dashBoardHome'>Home</Link></li>
    <li><Link to='/dashBoard/selected-classes'>Selected Classes</Link></li>
    <li><Link to='/enrolled/classes'>Enrolled Classes</Link></li>
    <li><Link to='/dashBoard/payment'>Payment</Link></li>
    </>



    return (
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
                        {listOption}

                    </div>
                    <div className="h-1/2 border-t-2 border-black pt-12">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to='/classes'>Classes</Link></li>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;