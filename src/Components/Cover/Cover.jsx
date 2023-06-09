

const Cover = ({mainHeading, subHeading}) => {
    return (
        <div className="text-white w-full bg-[#213975] py-32">
            <h2 className="text-5xl text-center font-bold pb-4">{mainHeading}</h2>
            <p className="uppercase text-xl text-center">Home / {subHeading}</p>
        </div>
    );
};

export default Cover;