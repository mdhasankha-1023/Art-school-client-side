import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const {  data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: () =>
          fetch('http://localhost:5000/classes').then(
            (res) => res.json(),
          ),
      })



    return [classes]
};

export default useClasses;