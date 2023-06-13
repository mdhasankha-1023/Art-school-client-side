import { useState } from 'react'
import slider1 from '../../../assets/slider/slider1.jpg'
import slider2 from '../../../assets/slider/slider2.jpg'
import slider3 from '../../../assets/slider/slider3.jpg'
import slider4 from '../../../assets/slider/slider4.jpg'
import slider5 from '../../../assets/slider/slider5.jpg'
import slider6 from '../../../assets/slider/slider6.jpg'
import { Fade, Slide } from "react-awesome-reveal";

const Slider = () => {

    return (
        <div className="bg-[#FEEFDC] mt-3 py-24 px-8 md:flex">
            <div className="w-1/2">
                <div className='mt-8'>
                    <Fade cascade>
                        <p className="uppercase my-4">-------Learn from professional</p>
                        <h2 className="text-4xl font-bold my-4">Build skills with world best teachers from this...</h2>
                    </Fade>
                    <Fade cascade delay={1e3} damping={1e-2}>
                        <p>We invest in personnel, technological innovations and infrastructure and have established regional and international offices.</p>
                    </Fade>
                    <Slide>
                        <button className="btn bg-[#FF1949] text-white my-8">Join for free</button>
                    </Slide>




                </div>
            </div>
            <div className='w-1/2'>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={slider1} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={slider2} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={slider3} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={slider4} className="w-full" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src={slider5} className="w-full" />
                    </div>
                    <div id="item6" className="carousel-item w-full">
                        <img src={slider6} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                    <a href="#item6" className="btn btn-xs">6</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;