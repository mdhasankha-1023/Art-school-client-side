import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useClasses from "../../../Hooks/useClasses";
import { FaArrowDown, FaPenSquare } from "react-icons/fa";


const ManageClasses = () => {
    const { user } = useAuth();
    const [classes] = useClasses();
    console.log(classes)


    // handleFeedbackBtn
    const handleFeedbackBtn = () => {
        console.log('this is feedback button')
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
                            <th>Feedback</th>
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
                                    {
                                        row.status === 'approved' ?
                                            <div className="text-green-400">
                                                {row.status}
                                            </div>
                                            :
                                            <div className="text-yellow-400">
                                                {row.status}
                                            </div>
                                    }
                                </th>
                                <td className="text-center">
                                    <button disabled={row.status === 'approved' && true} className="btn btn-sm border-0 bg-green-400">approved</button>
                                </td>
                                <th className="text-center">
                                    <button disabled={row.status === 'approved' && true} className="btn btn-sm border-0 bg-red-500">deny</button>
                                </th>
                                <th className="text-center">
                                    <div onClick={handleFeedbackBtn} className="p-2 rounded-lg bg-[#FF3131] inline-block text-center text-xl text-white cursor-pointer"><FaPenSquare></FaPenSquare></div>
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