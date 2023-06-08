import { useFormik } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";


const SignUp = () => {
    const [clicked, setClicked] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            console.log(values)
        },
    });
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2">
                <div className="card  w-full shadow-2xl bg-base-100">
                    <h3 className='text-3xl text-center font-bold mt-8 uppercase underline'>Sign up !!</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="card-body">
                            {/* name */}
                            <div className="form-control">
                                <label htmlFor="name" className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    className="input input-bordered"
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label htmlFor="email" className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    className="input input-bordered"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            {/* password */}
                            <div className="form-control relative">
                                <label htmlFor="password" className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    className="input input-bordered"
                                    name="password"
                                    type={clicked === true ? 'text' : 'password'}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                <div className='absolute right-0 top-[60%] me-4 cursor-pointer'>
                                    <FaEye className={clicked === true ? '' : 'hidden'} onClick={() => setClicked(false)} size='1.5em'></FaEye>
                                    <FaEyeSlash className={clicked === false ? '' : 'hidden'} onClick={() => setClicked(true)} size='1.5em'></FaEyeSlash>
                                </div>
                            </div>
                            {/* confirm password */}
                            <div className="form-control relative">
                                <label htmlFor="confirm-password" className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    className="input input-bordered"
                                    name="confirm-password"
                                    type={clicked === true ? 'text' : 'password'}
                                    onChange={formik.handleChange}
                                    value={formik.values.confirmPassword}
                                />
                            </div>
                            {/* button */}
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF2B57] hover:bg-[#385777] text-white">Login</button>
                            </div>
                        </div>
                    </form>
                    <p className='text-center text-xl'>Or Login using</p>
                    <SocialLogin></SocialLogin>
                    <p className
                    ='text-center mt-2 mb-6'>Already have an account? <Link to='/login' className='font-xl font-bold text-[#FF2B57] link-hover'>please login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;