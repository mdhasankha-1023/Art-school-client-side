import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Cover/Cover";
import Instructor from "../Instructor/Instructor";
import useInstructors from "../../../Hooks/useInstructors";


const Instructors = () => {
    const [instructors] = useInstructors();

    return (
        <div>
            <Helmet>
                <title>Art-School || Instructors</title>
            </Helmet>
            <Cover mainHeading={"All Instructors"} subHeading={"Instructors"}></Cover>
            <div className="flex justify-between max-w-screen-lg mx-auto mt-20">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="form-control">
                    <div className="input-group">
                        <select className="select select-bordered">
                            <option disabled selected>Filter By</option>
                            <option>All</option>
                            <option>Top-instructors</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-20 max-w-screen-lg mx-auto grid grid-cols-3 gap-4">
                {
                    instructors.map(i => <Instructor
                        key={i._id}
                        item={i}
                    ></Instructor>)
                }
            </div>

        </div>
    );
};

export default Instructors;