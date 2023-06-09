import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import MoreAboutUs from "../MoreAboutUs/MoreAboutUs";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Art-School || Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <MoreAboutUs></MoreAboutUs>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;