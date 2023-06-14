import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useInstructors = () => {
    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
          const res = await axios('https://art-school-server.vercel.app/instructors')
          return res.data;
        }
      })




    return [instructors, refetch]
};

export default useInstructors;