import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useClasses = () => {
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axios('https://art-school-server.vercel.app/classes')
      return res.data;
    }
  })



  return [classes, refetch]
};

export default useClasses;