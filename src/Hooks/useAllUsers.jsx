import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";  


const useAllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { refetch , data: allUsers = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure('/users');
      return res.data;
    }
  })



  return [allUsers, refetch]
};

export default useAllUsers;