import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'

const Navbar = () => {

    const NavLink = <>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0} to='/instructors'><Link>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashBoard'>Dashboard</Link></li>
        <div className='flex flex-col gap-4 md:hidden'>
            <Link to='/login'>
                <button className="btn btn-outline btn-sm border-0 bg-[#FF2B57] hover:bg-[#385777] text-white me-4">Login</button>
            </Link>
            <Link to='/sign-up'>
                <button className="btn btn-outline btn-sm border-0 bg-[#FF2B57] hover:bg-[#385777] text-white">Sign-up</button>
            </Link>
        </div>
    </>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLink}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='hidden sm:block me-4'>
                    <Link to='/login'>
                        <button className="btn btn-outline btn-sm border-0 bg-[#FF2B57] hover:bg-[#385777] text-white me-4">Login</button>
                    </Link>
                    <Link to='/sign-up'>
                        <button className="btn btn-outline btn-sm border-0 bg-[#000] hover:bg-[#385777] text-white">Sign-up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;