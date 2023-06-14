import { Helmet } from "react-helmet-async";
import Cover from "../../../../Components/Cover/Cover";
import useClasses from "../../../../Hooks/useClasses";
import Class from "../Class/Class";


const Classes = () => {
    const [classes] = useClasses();
    const approvedClasses = classes?.filter(c => c.status === 'approved')

    // handleHighPrice
    // const handleSortBtn = (id, value) => {
    //     console.log(value)
    // }



    return (
        <div>
            <Helmet>
                <title>Art-School || classes</title>
            </Helmet>
            <Cover mainHeading={"All Classes"} subHeading={"Classes"}></Cover>
            <div className="flex justify-between md:flex-row flex-col items-center max-w-screen-lg mx-auto mt-20 gap-4">
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
                        <select  className="select select-bordered">
                            <option disabled selected>Filter By</option>
                            <option >High-price</option>
                            <option >Low Price</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-20 max-w-screen-lg mx-auto grid md:grid-cols-3 grid-cols-1 gap-y-10 gap-4 px-4 md:p-0">
                {
                    approvedClasses.map(c => <Class
                        key={c._id}
                        item={c}
                    ></Class>)
                }
            </div>
        </div>
    );
};

export default Classes;