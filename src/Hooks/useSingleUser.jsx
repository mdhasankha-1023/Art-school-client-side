import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSingleUser = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: singleUser = []} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async() => {
            const res = await axiosSecure(`/users/${user?.email}`)
            return res.data;
        }
    })



    return [singleUser]
};

export default useSingleUser;