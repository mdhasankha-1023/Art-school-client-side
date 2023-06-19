import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSingleUser = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: singleUser = [], isLoading} = useQuery({
        queryKey: ['user', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure(`/users/${user?.email}`)
            return res.data;
        }
    })



    return [singleUser, isLoading]
};

export default useSingleUser;