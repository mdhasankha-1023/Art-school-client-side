

const Instructor = ({ item }) => {
    const { name, email, image, numberOfClasses } = item;
    return (
        <div className="card w-full shadow-xl bg-base-100">
            <figure className="h-[50%] relative">
                <img className="w-full h-full cursor-pointer hover:scale-125 transition delay-200 duration-700 ease-in-out" src={image} alt="Shoes" />
            </figure>
            <div className="card-body px-4">
                <h2 className="card-title font-bold hover:text-[#FF3131] cursor-pointer hover:delay-150 text-2xl">{name}</h2>
                <p className="font-bold">Email:  <span className="text-[#FF3131]">{email}</span></p>
                <p className="font-bold">Classes:  {numberOfClasses}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-[#FF3131] hover:bg-[#FF3131] hover:text-white hover:border-[#FF3131] hover:duration-600">See classes</button>
                </div>
            </div>
        </div>
    );
};

export default Instructor;