import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useClass = () => {
    const { user } = useAuth();

        const { data: singleClass = []} = useQuery({
            queryKey: ['class', user?.email],
            queryFn: () =>
                fetch(`http://localhost:5000/class?email=${user?.email}`).then(
                    (res) => res.json(),
                ),
            })
        
        
        return [singleClass]

};

export default useClass;