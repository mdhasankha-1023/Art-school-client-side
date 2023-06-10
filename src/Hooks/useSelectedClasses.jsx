import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSelectedClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: selectedClasses = [] } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/added-classes?email=${user?.email}`)
            return res.data;
        }
    })


    return [selectedClasses, refetch]

};

export default useSelectedClasses;