

const SectionTitle = ({topHeading, mainHeading}) => {
    return (
        <div className="text-center my-11">
            <h4 className="uppercase text-[#f72351d7]">{topHeading}</h4>
            <h2 className="text-4xl text-[#07294D]">{mainHeading}</h2>
            <hr className="h-[4px] w-[5%] mx-auto my-3 bg-[#FF1949]" />
        </div>
    );
};

export default SectionTitle;