import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useInstructors from "../../../Hooks/useInstructors";

const PopularInstructors = () => {
    const [instructors] = useInstructors();



    return (
        <div className="max-w-screen-lg mx-auto my-20">
            <SectionTitle topHeading={'Our teachers'} mainHeading={'Popular Instructors'}></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 p-4">
                    {
                        instructors.slice(0, 6).map(c => 
                            <div className="relative rounded-lg" key={c._id}>
                                <img className="h-[300px] w-full rounded-lg" alt="img1" src={c.image} />
                                <div className="absolute bottom-0 py-2 bg-[#FF1949] opacity-70 text-white w-full text-center text-xl font-bold">
                                    <p>{c.Instructor}</p>
                                    <p>students: {c.numberOfClasses}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            
        </div>
    );
};

export default PopularInstructors;