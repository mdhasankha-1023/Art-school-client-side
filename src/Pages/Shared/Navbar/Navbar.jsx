import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import useAuth from '../../../Hooks/useAuth';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut, successAlert, errorAlert } = useAuth();
    const navigate = useNavigate();

    // handle Log out 
    const handleLogOutBtn = () => {

        // log out
            logOut()
            .then(() => {
                navigate('/login')
                successAlert('Log out Successfully')
                localStorage.removeItem('userRole')
            })
            .catch(error => errorAlert(error.message))
        
    }

    const NavLink = <>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {
            user && <li><Link to='/dashBoard'>Dashboard</Link></li>
        }
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
        <div className="navbar bg-base-100 fixed z-10 top-0">
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
                    {user ?
                        <div className='flex items-center gap-4'>
                            <button onClick={handleLogOutBtn} className="btn btn-outline btn-sm border-0 bg-[#FF2B57] hover:bg-[#385777] text-white">Log out</button>
                            <div className="avatar online placeholder cursor-pointer">
                                {user?.photoURL !== null ?
                                    <div className="rounded-full border border-gray-500 w-12">
                                        <img className='w-full' src={user.photoURL} alt="" />
                                    </div>
                                    :
                                    <div className="rounded-full border border-gray-500 p-1 w-12">
                                        <FaUserAlt size='1.5em'></FaUserAlt>
                                    </div>
                                }
                            </div>
                        </div>
                        :
                        <>
                            <Link to='/login'>
                                <button className="btn btn-outline btn-sm border-0 bg-[#FF2B57] hover:bg-[#385777] text-white me-4">Login</button>
                            </Link>
                            <Link to='/sign-up'>
                                <button className="btn btn-outline btn-sm border-0 bg-[#000] hover:bg-[#385777] text-white">Sign-up</button>
                            </Link>
                        </>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;