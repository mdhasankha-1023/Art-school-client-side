import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";


const EnrolledClasses = () => {
    const [selectedClasses] = useSelectedClasses();
    const payedClasses = selectedClasses.filter(c => c.paymentStatus === true)

    return (
        <>
            <div className="w-full">
                <SectionTitle topHeading={'You are enrolled'} mainHeading={'Enrolled Classes'}></SectionTitle>
                <div className="mt-10 mb-20 w-11/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-y-10 gap-4 px-4 md:p-0">
                    {
                        payedClasses.map(c => <div key={c._id} className="card w-full shadow-xl bg-base-100">
                            <figure className="h-[50%]">
                                <img className="w-full h-full cursor-pointer hover:scale-125 transition delay-200 duration-700 ease-in-out" src={c.Image} alt="Shoes" />
                            </figure>
                            <div className="card-body pb-5">
                                <h2 className="card-title font-bold hover:text-[#FF3131] cursor-pointer hover:delay-150">{c.Name}</h2>
                                <p className="font-bold">Instructor: <span>{c.Instructor}</span></p>
                                <p className="font-bold">Status: <span className="text-[#FF3131]">Payed</span></p>
                            </div>
                            
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default EnrolledClasses;