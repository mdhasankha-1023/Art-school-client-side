import { useQuery } from "@tanstack/react-query";


const useSelectedClasses = () => {
    const { refetch, data: selectedClasses = []} = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: () => 
        fetch('http://localhost:5000/added-class')
        .then(res => res.json())
       })



    return [refetch, selectedClasses]
};

export default useSelectedClasses;