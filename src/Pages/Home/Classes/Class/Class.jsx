import { FaUserAlt } from "react-icons/fa";


const Class = ({ item }) => {
    const { Image, Name, Instructor, Price, Available_seats, NumberOfStudents } = item;


    return (
        <div className={
            Available_seats === 0 ? "card w-full shadow-xl bg-[#ff313180]":
            "card w-full shadow-xl bg-base-100"
        }>
            <figure className="h-[50%] relative">
                <img className="w-full h-full cursor-pointer hover:scale-125 transition delay-200 duration-700 ease-in-out" src={Image} alt="Shoes" /> 
                <button disabled={Available_seats === 0 && 'disabled'} className="btn bg-[#385777] border-0 text-white btn-md absolute bottom-0 left-0 ms-4">Select</button>
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold hover:text-[#FF3131] cursor-pointer hover:delay-150">{Name}</h2>
                <p className="font-bold">Instructor: <span className="text-[#FF3131]">{Instructor}</span></p>
                <p className="font-bold">Available-Sates: {Available_seats}</p>
                <div className="flex justify-between items-center border-t-2 pt-2">
                    <div className="card-actions justify-start">
                        <div className="badge text-xl"><FaUserAlt className="me-2"></FaUserAlt>{NumberOfStudents}</div>
                    </div>
                    <div className="card-actions justify-end">
                    <p className="text-[#FF3131] text-2xl font-bold">${Price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;