import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePaymentClass = () => {
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await axiosSecure(`/added-classes`)   
            return res.data;
        }
    })


    return [selectedClass, refetch]
};

export default usePaymentClass;