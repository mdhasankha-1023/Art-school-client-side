import { FaUserShield } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAllUsers from "../../../Hooks/useAllUsers";
import useAuth from "../../../Hooks/useAuth";


const ManageUsers = () => {
    const { user } = useAuth();
    const [allUsers] = useAllUsers();
    console.log(allUsers)
    return (
        <div className="w-full ">
            <SectionTitle topHeading={`Hey ${user}`} mainHeading={'Manage All users'}></SectionTitle>
            <div className="overflow-x-auto my-24 w-full">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold">
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>Make Instructor</th>
                            <th>Make admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {

                            // table index
                            allUsers.map((row, index) => <tr
                                key={row._id}
                            >
                                <th>{index + 1}</th>
                                <td className="text-xl text-center">
                                    <div className="flex items-center space-x-3">
                                        {/* <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.name} />
                                            </div>
                                        </div> */}
                                        <div className="font-bold">
                                            {row.name}
                                        </div>
                                    </div>
                                </td>
                                <td className="text-xl">{row.email}</td>
                                <td className="font-bold">{row.role}</td>
                                <th>
                                    <button className="btn btn-sm">instructor</button>
                                </th>
                                <th>
                                <button className="btn btn-sm">
                                <FaUserShield size='1.5em'></FaUserShield> Admin
                                </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    allUsers.length === 0 && <h1 className="text-center mt-24 text-2xl font-bold text-gray-400">No Users Available Here...</h1>
                }
            </div>
        </div>
    );
};

export default ManageUsers;