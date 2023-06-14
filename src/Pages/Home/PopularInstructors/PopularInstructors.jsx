import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses";


const PopularInstructors = () => {
    const [classes] = useClasses();

    return (
        <div className="max-w-screen-lg mx-auto my-20">
            <SectionTitle topHeading={'Our teachers'} mainHeading={'Popular Instructors'}></SectionTitle>
            
              
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
                    {
                        classes.slice(0, 6).map(c => 
                            <a className="relative" key={c._id} href={c.Image}>
                                <img className="h-[300px] w-full" alt="img1" src={c.Ins_pic} />
                                <div className="absolute bottom-0 py-2 bg-[#FF1949] opacity-70 text-white w-full text-center text-xl font-bold">
                                    <p>{c.Instructor}</p>
                                    <p>students: {c.NumberOfStudents}</p>
                                </div>
                            </a>
                        )
                    }
                </div>
            
        </div>
    );
};

export default PopularInstructors;