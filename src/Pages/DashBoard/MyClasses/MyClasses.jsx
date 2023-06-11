import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const MyClasses = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: myAllClasses = []} = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async() => {
            const res = await axiosSecure(`/classes/${user?.email}`)
            return res.data;
        }
    })
    console.log(myAllClasses)
    return (
        <div className="w-full">
            <SectionTitle topHeading={`Hey ${user.displayName}`} mainHeading={'Your all classes in Here'}></SectionTitle>
        </div>
    )
};

export default MyClasses;