import { FaUserAlt } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";


const Class = ({ item }) => {
    const { user, errorAlert, successAlert } = useAuth();
    const { _id,  classImg,  className,  name,  price,  availableSeat,  numberOfStudents, status } = item;
    console.log(item)

    // handleSelectBtn
    const handleSelectBtn = () => {
        const addedClass = { addedClass_id: _id, Image: classImg, Name: className, Instructor: name, Price: price, email: user.email}
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
    }


    return (
        <div className={
            availableSeat === 0 ? "card w-full shadow-xl bg-[#ff313180]" :
                "card w-full shadow-xl bg-base-100"
        }>
            <figure className="h-[50%] relative">
                <img className="w-full h-full cursor-pointer hover:scale-125 transition delay-200 duration-700 ease-in-out" src={classImg} alt="Shoes" />
                <button onClick={handleSelectBtn} disabled={availableSeat === 0 || !user?.email ? true : false} className="btn bg-[#385777] border-0 text-white btn-md absolute bottom-0 left-0 ms-4">Select</button>
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold hover:text-[#FF3131] cursor-pointer hover:delay-150">{className}</h2>
                <p className="font-bold">Instructor: <span className="text-[#FF3131]">{name}</span></p>
                <p className="font-bold">Available-Sates: {availableSeat}</p>
                <div className="flex justify-between items-center border-t-2 pt-2">
                    <div className="card-actions justify-start">
                        <div className="badge text-xl"><FaUserAlt className="me-2"></FaUserAlt>{numberOfStudents}</div>
                        <h1>{status}</h1>
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