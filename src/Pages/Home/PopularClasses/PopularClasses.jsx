import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';



const PopularClasses = () => {
    const [classes] = useClasses();

    return (
        <div className="max-w-screen-lg mx-auto my-20">
            <SectionTitle topHeading={'Learning Skills'} mainHeading={'Our Popular Classes'}></SectionTitle>
            <LightGallery
                // onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
                    {
                        classes.slice(0, 6).map(c => 
                            <a className="relative" key={c._id} href={c.Image}>
                                <img className="h-[300px] w-full" alt="img1" src={c.Image} />
                                <div className="absolute bottom-0 py-2 bg-[#FF1949] opacity-70 text-white w-full text-center text-xl font-bold">
                                    <p>{c.Name}</p>
                                    <p>students: {c.NumberOfStudents}</p>
                                </div>
                            </a>
                        )
                    }
                </div>
            </LightGallery>

        </div>
    );
};

export default PopularClasses;