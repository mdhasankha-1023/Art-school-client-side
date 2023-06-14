import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment/moment";


const PaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: historyClasses = [] } = useQuery({
        queryKey: ['added-classes'],
        queryFn: async () => {
            const res = await axiosSecure(`/payments`)
            return res.data;
        }
    })

    


    return (
        <>
            <div className="w-full mx-auto">
                <SectionTitle mainHeading={"Payments History"} topHeading={` Hay, ${user.displayName}`}></SectionTitle>
                <div className="overflow-x-auto my-24">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-xl font-bold text-center">
                                <th>#</th>
                                <th>Class <br /> Name</th>
                                <th>Student <br /> email</th>
                                <th>Payment <br /> method</th>
                                <th>Transaction <br /> Id</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                historyClasses.map((row, index) => <tr
                                    key={row._id}
                                >
                                    <th>{index + 1}</th>
                                    <td className="text-xl text-center">
                                        <p>{row.name}</p>
                                    </td>
                                    <td className="text-xl text-center">
                                        <p>{row.email}</p>
                                    </td>
                                    <td className="text-xl text-center">
                                        <div className="badge bg-[#635BFF] text-white p-3">
                                            {row.methods}
                                        </div>
                                    </td>
                                    <td className="text-xl text-center">
                                        <p>{row.transactionId}</p>
                                    </td>
                                    <td className="text-xl text-center">
                                        <p>{moment(row.date).format("MMM Do YY")}</p>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                    {
                        historyClasses.length === 0 && <h1 className="text-center mt-24 text-2xl font-bold text-gray-400">History empty...</h1>
                    }
                </div>
            </div>
        </>
    );
};

export default PaymentHistory;