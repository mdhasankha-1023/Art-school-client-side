import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useClasses from "../../../Hooks/useClasses";
import { FaArrowDown, FaPenSquare } from "react-icons/fa";


const ManageClasses = () => {
    const { user, successAlert, errorAlert } = useAuth();
    const [classes, refetch] = useClasses();

    // handleChangedStatusBtn
    const handleChangedStatusBtn = (id, value) => {
        fetch(`https://art-school-server.vercel.app/classes/${id}?status=${value}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    successAlert('Status Changed Successfully')
                }
            })
            .catch(error => errorAlert(error.message))
    }

    // handleFeedbackBtn
    const handleFeedbackBtn = (id) => {

        Swal.fire({
            title: 'Write your feedback',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Submit',
        }).then((result) => {
            if (result.isConfirmed) {
                // const feedback = result.value;
                fetch(`https://art-school-server.vercel.app/classes/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ feedback: result.value })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            // refetch();
                            successAlert('Feedback send successfully')
                        }
                    })
                    .catch(error => errorAlert(error.message))
            }
        })
    }



    return (
        <div className="w-full">
            <SectionTitle topHeading={`Hey ${user.displayName}`} mainHeading={'Manage All Classes'}></SectionTitle>
            <div className="dropdown w-full text-center mb-10">
                <label tabIndex={0} className="btn m-1">Sort By <FaArrowDown></FaArrowDown></label>
                <div className="w-full flex justify-center">
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Pending</a></li>
                        <li><a>Deny</a></li>
                        <li><a>Approved</a></li>
                    </ul>
                </div>
            </div>
            <div className="overflow-x-auto my-24 w-full mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold text-center">
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor <br /> Name</th>
                            <th>Instructor <br /> email</th>
                            <th>Available <br />seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Approved</th>
                            <th>Deny</th>
                            <th>Send <br /> Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes.map((row, index) => <tr
                                key={row._id}
                            >
                                {/* Index no */}
                                <th>{index + 1}</th>

                                {/* class name and image */}
                                <td className="text-xl w-1/4">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.classImg} />
                                            </div>
                                        </div>
                                        <div className="">
                                            {row.className}
                                        </div>
                                    </div>
                                </td>

                                {/* instructor name */}
                                <td className="text-xl text-center">{row.name}</td>

                                {/* instructor email */}
                                <td className="text-xl text-center px-2">{row.email}</td>

                                {/* available seat */}
                                <td className="text-xl text-center px-2">{row.availableSeat}</td>

                                {/* price */}
                                <td className="text-xl font-bold text-center px-2">${row.price}</td>

                                {/* status */}
                                <th className="text-center">
                                    {row.status === 'approved' &&
                                        <div className="text-green-400">
                                            {row.status}
                                        </div>
                                    }
                                    {row.status === 'deny' &&
                                        <div className="text-[#FF3131]">
                                            {row.status}
                                        </div>
                                    }
                                    {row.status === 'pending' &&
                                        <div className="text-yellow-400">
                                            {row.status}
                                        </div>
                                    }
                                </th>
                                <td onClick={() => handleChangedStatusBtn(row._id, 'approved')} className="text-center">
                                    <button disabled={row.status !== 'pending' && true} className="btn btn-sm border-0 bg-green-400">approved</button>
                                </td>
                                <th onClick={() => handleChangedStatusBtn(row._id, 'deny')} className="text-center">
                                    <button disabled={row.status !== 'pending' && true} className="btn btn-sm border-0 bg-red-500">deny</button>
                                </th>
                                <th onClick={() => handleFeedbackBtn(row._id)}
                                    className="text-center">
                                    <button
                                    disabled={row.status !== 'deny' && true}
                                     className="btn btn-square border-0 bg-[#FF3131] text-white text-xl">
                                        <FaPenSquare></FaPenSquare>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    classes.length === 0 && <h1 className="text-center mt-24 text-2xl font-bold text-gray-400">No Classes Available Here...</h1>
                }
            </div>
        </div>
    );
};

export default ManageClasses;