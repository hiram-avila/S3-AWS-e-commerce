import React, { useState } from 'react';

const Carousel = () => {
    const images = [
        'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1530053364863-7afc6bcdca88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className=" relative  ">
            <div className='w-80 flex items-center justify-center'>


                <img src={images[currentSlide]} alt="Slide" className="object-cover w-full h-full" />
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2"
                    onClick={prevSlide}
                >
                    Prev
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2"
                    onClick={nextSlide}
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default Carousel;
