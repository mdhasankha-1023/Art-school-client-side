import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSelectedClasses = (id) => {
    
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: selectedClasses = [] } = useQuery({
        queryKey: ['added-classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/added-classes?email=${user?.email}`)
            if(id){
                const data =  res.data.filter(singleClass => singleClass._id == id)
                return data;
            }

            return res.data;
        }
    })


    return [selectedClasses, refetch]

};

export default useSelectedClasses;