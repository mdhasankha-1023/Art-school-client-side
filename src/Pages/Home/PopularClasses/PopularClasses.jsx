import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses";




const PopularClasses = () => {
    const [classes] = useClasses();
    const totalPrice = classes.reduce( (sum, item) => item.Price + sum ,0)
    console.log(totalPrice)

    return (
        <div className="max-w-screen-lg mx-auto my-20">
            <SectionTitle topHeading={'Learning Skills'} mainHeading={'Our Popular Classes'}></SectionTitle>
        </div>
    );
};

export default PopularClasses;