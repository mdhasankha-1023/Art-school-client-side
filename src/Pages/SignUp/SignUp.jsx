import { useState } from "react";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";


const image_hosting_key = import.meta.env.VITE_SOME_IMAGE_HOSTING_KEY;

const SignUp = () => {
    const { signUp, googleSignIn, errorAlert, successAlert, userProfileUpdate } = useAuth();
    const [clicked, setClicked] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    // handleCheckbox
    const handleCheckbox = () => {
        setClicked(!clicked)
    }


    const onSubmit = data => {
        const { name, email, password, checkbox } = data;
        console.log(checkbox)
        const formData = new FormData();
        formData.append('image', data.userImg[0])

        // sing-up with email and password
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    signUp(email, password)
                        .then(result => {
                            const loggedUser = result.user;
                            console.log(loggedUser)
                            // update user profile
                            userProfileUpdate(name, imgRes.data.display_url)
                                .then(() => {
                                    fetch('http://localhost:5000/users', {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify({ name, email, role: 'student', userImg: imgRes.data.display_url, })
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.insertedId) {
                                                navigate('/login')
                                                successAlert('Sign-up Successfully')
                                            }
                                        })
                                        .catch(error => errorAlert(error.message))
                                })
                                .catch(error => errorAlert(error.message))

                        })
                        .catch(error => errorAlert(error.message))
                }
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
                successAlert('Sign-up Successfully')
            })
            .catch(error => errorAlert(error.message))
    }



    return (
        <>  <Helmet>
            <title>Art-School || Sign up</title>
        </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full md:w-1/2">
                    <div className="card  w-full shadow-2xl bg-base-100">
                        <h3 className='text-3xl text-center font-bold mt-8 uppercase underline'>Sign up !!</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                {/* name */}
                                <div className="form-control">
                                    <label htmlFor="name" className="label">
                                        <span className="label-text font-bold">Name <span className="text-[#FF3131]">*</span></span>
                                    </label>
                                    <input
                                        className="input input-bordered"
                                        type="text"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <p className="text-red-600">name is required</p>}
                                </div>
                                {/* email */}
                                <div className="form-control">
                                    <label htmlFor="email" className="label">
                                        <span className="label-text font-bold">Email<span className="text-[#FF3131]">*</span></span>
                                    </label>
                                    <input
                                        className="input input-bordered"
                                        type="email"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <p className="text-red-600">email is required</p>}
                                </div>

                                <div className="flex w-full gap-4">
                                    {/* password */}
                                    <div className="form-control relative w-1/2">
                                        <label htmlFor="password" className="label">
                                            <span className="label-text font-bold">Password<span className="text-[#FF3131]">*</span></span>
                                        </label>
                                        <input
                                            className="input input-bordered pe-12"
                                            type={clicked === true ? 'text' : 'password'}
                                            {...register("password",
                                                {
                                                    minLength: 6,
                                                    pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
                                                    required: true,
                                                })}
                                        />
                                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password min-length will be 6 character</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be [A-Z], [0-9] and [@,#,$,*]</p>}

                                        <div className='absolute right-0 top-[60%] me-4 cursor-pointer'>
                                        </div>
                                    </div>
                                    {/* confirm password */}
                                    <div className="form-control relative w-1/2">
                                        <label htmlFor="confirm-password" className="label">
                                            <span className="label-text font-bold">Confirm Password<span className="text-[#FF3131]">*</span></span>
                                        </label>
                                        <input
                                            className="input input-bordered"
                                            type={clicked === true ? 'text' : 'password'}
                                            {...register(
                                                'confirmPassword',
                                                { validate: pass => pass === watch('password') }
                                            )}
                                        />
                                        {errors.confirmPassword && <p className="text-red-600">password do not matched</p>}
                                    </div>
                                </div>

                                {/* show/hide check mark */}
                                <div className="form-control w-10">
                                    <label className="label cursor-pointer justify-start">
                                        <input type="checkbox"
                                            className="checkbox me-4 checkbox-primary"
                                            onClick={handleCheckbox}
                                            {...register('checkbox')} />
                                        <span className="label-text uppercase font-bold">
                                            {clicked === true ? 'Hide' : 'Show'}
                                        </span>
                                    </label>
                                </div>

                                {/* Upload photo */}
                                <div className="form-control relative">
                                    <label htmlFor="confirm-password" className="label">
                                        <span className="label-text font-bold">Upload Photo<span className="text-[#FF3131]">*</span></span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered file-input-md w-full"
                                        {...register("userImg", { required: true })} />
                                    {errors.userImg && <p className="text-red-600">Image is required</p>}
                                </div>
                                {/* button */}
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-[#FF2B57] hover:bg-[#385777] text-white">Sign up</button>
                                </div>
                            </div>
                        </form>
                        <p className='text-center text-xl'>Or Sign up using</p>
                        <SocialLogin value={handleGoogleBtn}></SocialLogin>
                        <p className
                            ='text-center mt-2 mb-6'>Already have an account? <Link to='/login' className='font-xl font-bold text-[#FF2B57] link-hover'>please login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;