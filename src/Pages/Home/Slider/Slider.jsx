import slider1 from '../../../assets/slider/slider1.jpg'

const Slider = () => {


    return (
        <div className="bg-[#FEEFDC] mt-3 py-24 px-8 flex">
            <div className="w-1/2">
                <p className="uppercase">-------Learn from professional</p>
                <h2 className="text-4xl font-bold">Build skills with courses flexible online courses</h2>
                <p>We invest in personnel, technological innovations and infrastructure and have established regional and international offices.</p>
                <button className="btn bg-[#FF1949] text-white">Join for free</button>
            </div>
            <div>
                <img src={slider1} alt="" />
            </div>
        </div>
    );
};

export default Slider;