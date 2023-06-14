import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useInstructors = () => {
    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
          const res = await axios('http://localhost:5000/instructors')
          return res.data;
        }
      })




    return [instructors, refetch]
};

export default useInstructors;