import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import OurCourses from "../OurCourses/OurCourses";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Art-School || Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <OurCourses></OurCourses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;