import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsStar } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ReviewCarousel=()=> {
  const slides = [
    {
     review: 'These watches are the best I have ever worn',
     customer: 'Frederick',
     rating : 4
    },
    {
     review: 'great by all standard',
     customer: 'Isaac',
     rating : 5,
    },
    {
     review: 'Felt it, it is the best',
     customer: 'Theophilus',
     rating : 5
    },
    {
     review: 'right on spot',
     customer: 'Daniella',
     rating : 3
    },
    {
     review: 'Try it and you will not regret it',
     customer: 'Jeremiah',
     rating : 5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' m-auto py-16 px-4 relative group bg-[#333333] mb-5 rounded'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 text-center text-white'>
       <blockquote>{slides[currentIndex].review}</blockquote>
       <cite>{slides[currentIndex].customer}</cite>
       <div className=' flex place-content-center'>
       <BsStar color='yellow'/>
       </div>
       </div>
      
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
    
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled color='white'/>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default ReviewCarousel;