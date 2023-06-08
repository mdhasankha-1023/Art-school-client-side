import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {googleSignIn,signIn, errorAlert, successAlert} = useAuth();
    const [clicked, setClicked] = useState(false)
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const {email, password} = data;

        // login with email and password
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            successAlert('Login successfully')
            navigate('/')
        })
        .catch(error => errorAlert(error.message))
    }


    // google sing-up
    const handleGoogleBtn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate('/')
                successAlert('Login Successfully')
            })
            .catch(error => errorAlert(error.message))
    }


    
    return (
        <div className="hero h-screen md:min-h-screen bg-base-200">
            <div className="hero-content w-full md:w-2/5">
                <div className="card  w-full shadow-2xl bg-base-100">
                    <h3 className='text-3xl text-center font-bold mt-8 uppercase underline'>Login !!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            {/* email */}
                            <div className="form-control">
                                <label htmlFor="email" className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    className="input input-bordered"
                                    type="email"
                                    {...register("email", {required: true})}
                                />
                                {errors.email && <p className="text-red-600">Email is required</p>}
                            </div>
                            {/* password */}
                            <div className="form-control relative">
                                <label htmlFor="password" className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    className="input input-bordered"
                                    type={clicked === true ? 'text' : 'password'}
                                    {...register("password", {required: true})}
                                />
                                {errors.password && <p className="text-red-600">Password is required</p>}
                                <div className='absolute right-0 top-[60%] me-4 cursor-pointer'>
                                    <FaEye className={clicked === true ? '' : 'hidden'} onClick={() => setClicked(false)} size='1.5em'></FaEye>
                                    <FaEyeSlash className={clicked === false ? '' : 'hidden'} onClick={() => setClicked(true)} size='1.5em'></FaEyeSlash>
                                </div>
                            </div>
                            {/* submit button */}
                            <div className="form-control mt-6">
                                <input value='Login'  type='submit' className="btn bg-[#FF2B57] hover:bg-[#385777] text-white"/>
                            </div>
                        </div>
                    </form>
                    <p className='text-center text-xl'>Or Login using</p>
                    <SocialLogin value={handleGoogleBtn}></SocialLogin>
                    <p className='text-center mt-2 mb-6'>New here? <Link to='/sign-up' className='font-xl font-bold text-[#FF2B57] link-hover'>Create a new account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;