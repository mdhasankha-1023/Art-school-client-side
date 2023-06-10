import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SelectedClasses = () => {
    const { errorAlert, successAlert } = useAuth();
    const [refetch, selectedClasses] = useSelectedClasses();
    const navigate = useNavigate();
    // const [data,  setData] = useState({});



    // handleDeleteBtn
    const handleDeleteBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this class!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/added-class/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            successAlert('Successfully deleted')
                            refetch()
                        }
                    })
                    .catch(error => errorAlert(error.message))
            }
        })

    }

    // handlePayBtn
    const handlePayBtn = (id) => {
        fetch(`http://localhost:5000/added-class/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            navigate('/dashBoard/payment')
        })
        .catch()
        
    }


    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle mainHeading={"Selected All Classes"} topHeading={"Preferred classes"}></SectionTitle>
            <div className="overflow-x-auto my-24">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold">
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectedClasses.map((row, index) => <tr
                                key={row._id}
                            >
                                <th>{index + 1}</th>
                                <td className="text-xl">{row.Name}</td>
                                <td className="text-xl">{row.Instructor}</td>
                                <td className="text-[#FF3131] font-bold">${row.Price}</td>
                                <th>
                                    <div onClick={() => handlePayBtn(row._id)} className="badge badge-warning p-3 cursor-pointer">
                                        Pay now
                                    </div>
                                </th>
                                <th>
                                    <div onClick={() => handleDeleteBtn(row._id)} className="p-2 rounded-lg bg-[#FF3131] inline-block text-center text-xl text-white cursor-pointer"><FaTrashAlt></FaTrashAlt></div>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;