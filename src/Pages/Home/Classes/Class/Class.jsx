import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import useSingleUser from "../../../../Hooks/useSingleUser";
import { useNavigate } from "react-router-dom";


const Class = ({ item }) => {
    const { user, errorAlert, successAlert } = useAuth();
    const { _id, classImg, className, name, price, availableSeat, numberOfStudents } = item;
    const [singleUser] = useSingleUser();
    const navigate = useNavigate();


    // handleSelectBtn
    const handleSelectBtn = () => {
        const addedClass = { addedClass_id: _id, Image: classImg, Name: className, Instructor: name, Price: price, email: user.email }
        if (user) {
            fetch('http://localhost:5000/added-classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        successAlert('successfully added')
                    }
                })
                .catch(error => errorAlert(error.message))
        }
        else {
            Swal.fire({
                title: 'First Login',
                text: "You are not select this",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }


    return (
        <div className={
            availableSeat === 0 ? "card w-full shadow-xl bg-[#ff313180]" :
                "card w-full shadow-xl bg-base-100"
        }>
            <figure className="h-[50%]">
                <img className="w-full h-full cursor-pointer hover:scale-125 transition delay-200 duration-700 ease-in-out" src={classImg} alt="Shoes" />
            </figure>
            <div className="card-body pb-5">
                <h2 className="card-title font-bold hover:text-[#FF3131] cursor-pointer hover:delay-150">{className}</h2>
                <p className="font-bold">Instructor: <span className="text-[#FF3131]">{name}</span></p>
                <p className="font-bold">Available-Sates: {availableSeat}</p>
                <p className="font-bold">Enrolled student: {numberOfStudents}</p>
                <div className="flex justify-between items-center border-t-2 pt-2">
                    <div>
                        <button onClick={handleSelectBtn} disabled={availableSeat === 0 || singleUser.role !== 'student' ? true : false} className="btn bg-[#385777] border-0 text-white btn-md">Select</button>
                    </div>
                    <div className="card-actions justify-end">
                        <p className="text-[#FF3131] text-2xl font-bold">${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;