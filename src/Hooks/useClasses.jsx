import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useClasses = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axios('http://localhost:5000/classes')
      return res.data;
    }
  })



  return [classes]
};

export default useClasses;