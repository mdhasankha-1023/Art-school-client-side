import { Link, useRouteError } from "react-router-dom";
import './ErrorPage.css'


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='error relative '>
            <div className=" absolute bottom-0 w-full text-center mb-12">
                <p className='text-center text-red-500 text-2xl font-bold mb-4'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'>
                    <button className="btn bg-[#FF3131] text-white">Back to Home</button>
                </Link>

            </div>

        </div>
    );
};

export default ErrorPage;