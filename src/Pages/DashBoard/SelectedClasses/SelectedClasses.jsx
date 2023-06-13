import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import usePaymentClass from "../../../Hooks/usePaymentClass";



const SelectedClasses = () => {
    const { user, errorAlert, successAlert } = useAuth();
    const [selectedClasses, refetch] = useSelectedClasses();
    const navigate = useNavigate();

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
    const HandlePayBtn = (id) => {
        usePaymentClass(id);
        navigate('/dashBoard/payment')
      };


    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle mainHeading={"Your selected Classes"} topHeading={` Hay, ${user.displayName}`}></SectionTitle>
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
                                <td className="text-xl w-1/4">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.Image} />
                                            </div>
                                        </div>
                                        <div className="">
                                            {row.Name}
                                        </div>
                                    </div>
                                </td>
                                <td className="text-xl">{row.Instructor}</td>
                                <td className="text-[#FF3131] font-bold">${row.Price}</td>
                                <th>
                                    <div onClick={() => HandlePayBtn(row._id)} className="badge badge-warning p-3 cursor-pointer">
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
                {
                    selectedClasses.length === 0 && <h1 className="text-center mt-24 text-2xl font-bold text-gray-400">No Classes Available Here...</h1>
                }
            </div>
        </div>
    );
};

export default SelectedClasses;