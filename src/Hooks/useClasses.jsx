import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useClasses = () => {
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axios('http://localhost:5000/classes')
      return res.data;
    }
  })



  return [classes, refetch]
};

export default useClasses;