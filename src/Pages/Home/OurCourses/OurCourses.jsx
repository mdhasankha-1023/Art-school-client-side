import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const OurCourses = () => {
    return (
        <div>
            <div className="w-full">
                <SectionTitle mainHeading={'Available courses'} topHeading={'Courses'}></SectionTitle>
                <div className="md:flex gap-4 max-w-screen-lg mx-auto justify-center items-center px-4">
                    <div className="bg-[#D94DA6] py-24 px-12 text-white rounded-lg w-full md:w-1/4 cursor-pointer hover:-translate-y-6 delay-300 duration-300 ease-in-out mb-4">
                        <h3 className="text-center font-bold">Exploring  <br /> Artistic Freedom</h3>
                    </div>
                    <div className="bg-[#307AD5] py-24 
                 text-white rounded-lg w-full md:w-1/4 cursor-pointer hover:-translate-y-6 delay-300 duration-300 ease-in-out mb-4">
                        <h3 className="text-center font-bold">Techniques and Tools <br /> for Artists</h3>
                    </div>
                    <div className="bg-[#FF1949] py-24 text-white rounded-lg w-full md:w-1/4 cursor-pointer hover:-translate-y-6 delay-300 duration-300 ease-in-out mb-4">
                        <h3 className="text-center font-bold">Capturing the <br /> Human Form</h3>
                    </div>
                    <div className="bg-[#10C45C] py-24 text-white rounded-lg w-full md:w-1/4 cursor-pointer hover:-translate-y-6 delay-300 duration-300 ease-in-out mb-4">
                        <h3 className="text-center font-bold"> Creating Visually <br /> Striking Artwork</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCourses;