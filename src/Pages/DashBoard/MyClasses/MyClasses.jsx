import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaCheck, FaClock, FaGraduationCap, FaPenSquare, FaRegCommentAlt } from "react-icons/fa";


const MyClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: myAllClasses = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${user?.email}`)
            return res.data;
        }
    })

    return (
        <div className="w-full">
            <SectionTitle topHeading={`Hey ${user.displayName}`} mainHeading={'Your all classes in Here'}></SectionTitle>
            <div className="overflow-x-auto my-24 w-full mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold">
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Enrolled</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myAllClasses.map((row, index) => <tr
                                key={row._id}
                            >
                                <th>{index + 1}</th>
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
                                <td className="text-[#FF3131] font-bold">${row.price}</td>
                                <th className="text-center">
                                    {
                                        row.status !== 'pending' ?
                                            <div className="badge badge-warning p-3 cursor-pointer">
                                                <FaClock className="me-2 text-xl"></FaClock> {row.status}
                                            </div> :
                                            <div className="badge badge-success p-3 cursor-pointer">
                                                <FaCheck className="me-2 text-xl"></FaCheck> {row.status}
                                            </div>

                                    }
                                </th>
                                <td className="text-center">
                                <div className="p-2 rounded-lg bg-[#FF3131] inline-block text-center text-xl text-white cursor-pointer">
                                    <FaGraduationCap></FaGraduationCap>
                                </div>
                                </td>
                                <th className="text-center">
                                    <div className="p-2 rounded-lg bg-[#FF3131] inline-block text-center text-xl text-white cursor-pointer"><FaRegCommentAlt></FaRegCommentAlt></div>
                                </th>
                                <th className="text-center">
                                    <div className="p-2 rounded-lg bg-[#FF3131] inline-block text-center text-xl text-white cursor-pointer"><FaPenSquare></FaPenSquare></div>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    myAllClasses.length === 0 && <h1 className="text-center mt-24 text-2xl font-bold text-gray-400">No Classes Available Here...</h1>
                }
            </div>
        </div>
    )
};

export default MyClasses;