import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";

const image_hosting_key= import.meta.env.VITE_SOME_IMAGE_HOSTING_KEY;
const AddClass = () => {
    const { user, successAlert, errorAlert } = useAuth();
    const { register, handleSubmit, reset ,  formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    // handle add-class form
    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('image', data.classImage[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            
            if(imgRes.success){
                const students = 0;
                const feedback = '';
                const {className, name, email, availableSeat, price } = data;
                const newClass = { name, className,  email, availableSeat,  price, classImg: imgRes.data.display_url, numberOfStudents: students, status: 'pending', adminFeedback: feedback}
                axios.post('http://localhost:5000/classes', newClass)
                .then(res => {
                    if(res.data.insertedId){
                        successAlert('Added successfully')
                        reset();
                    }
                })
                .catch(error => errorAlert(error.message))
            }
        })
        .catch(error => errorAlert(error.message))


    }


    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle mainHeading={'Add A Class'} topHeading={`Hey ${user.displayName}`}></SectionTitle>
            <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <div className="flex w-full gap-4">
                        {/* class name */}
                        <div className="form-control w-1/2">
                            <label htmlFor="class-name" className="label">
                                <span className="label-text font-bold">Class Name <span className="text-[#FF3131]">*</span></span>
                            </label>
                            <input
                                className="input input-bordered"
                                type="text"
                                placeholder="type class name"
                                {...register("className", { required: true })}
                            />
                            {errors.className && <p className="text-red-600">ClassName is required</p>}
                        </div>
                        {/* class image */}
                        <div className="form-control w-1/2">
                            <label htmlFor="classImage" className="label">
                                <span className="label-text font-bold">Class Image<span className="text-[#FF3131]">*</span></span>
                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-md w-full"
                            {...register("classImage", { required: true })}/>
                            {errors.classImage && <p className="text-red-600">Image is required</p>}
                        </div>
                    </div>

                    <div className="flex w-full gap-4">
                        {/* instructor name */}
                        <div className="form-control w-1/2">
                            <label htmlFor="name" className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input
                                className="input input-bordered"
                                type='text'
                                {...register("name")}
                                defaultValue={user.displayName}
                                readOnly
                            />
                        </div>
                        {/* instructor email */}
                        <div className="form-control relative w-1/2">
                            <label htmlFor="email" className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                className="input input-bordered"
                                type='email'
                                {...register('email')}
                                defaultValue={user.email}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="flex w-full gap-4">
                        {/* Available Seat */}
                        <div className="form-control relative w-1/2">
                            <label htmlFor="available-seat" className="label">
                                <span className="label-text font-bold">Available Seat<span className="text-[#FF3131]">*</span></span>
                            </label>
                            <input
                                className="input input-bordered pe-12"
                                type='number'
                                placeholder="Available seat"
                                {...register("availableSeat")}
                                defaultValue={'00'}
                            />
                            {errors.availableSeat && <p className="text-red-600">Available seat is required</p>}
                        </div>

                        {/* price */}
                        <div className="form-control relative w-1/2">
                            <label htmlFor="price" className="label">
                                <span className="label-text font-bold">Price<span className="text-[#FF3131]">*</span></span>
                            </label>
                            <input
                                className="input input-bordered"
                                type='number'
                                {...register('price')}
                                placeholder="$00"
                            />
                            {errors.price && <p className="text-red-600">price is required</p>}
                        </div>
                    </div>
                    {/* button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-[#FF2B57] hover:bg-[#385777] text-white uppercase">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddClass;