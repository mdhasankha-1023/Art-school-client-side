import { useQuery } from "@tanstack/react-query";


const useInstructors = () => {
    const {  data: instructors = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: () =>
          fetch('http://localhost:5000/instructors').then(
            (res) => res.json(),
          ),
      })



    return [instructors]
};

export default useInstructors;