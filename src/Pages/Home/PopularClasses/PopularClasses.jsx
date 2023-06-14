import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses"

const PopularClasses = () => {
    const [classes] = useClasses();
    const sortClasses = classes.slice(0, 6)

    return (
        <div className="max-w-screen-lg mx-auto my-20">
            <SectionTitle topHeading={'Learning Skills'} mainHeading={'Our Popular Classes'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 p-4">
                {
                    sortClasses.map(c => <div key={c._id} className="relative rounded-lg">
                            <img className="h-[300px] w-full rounded-lg" src={c.classImg} alt="" />
                            <div className="absolute bottom-0 py-2 bg-[#FF1949] opacity-70 text-white w-full text-center text-xl font-bold">
                                <p>{c.className}</p>
                                <p>students: {c.numberOfStudents}</p>
                            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;