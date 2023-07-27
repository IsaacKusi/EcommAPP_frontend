
import { FaCartPlus, FaHeart, FaShoppingBag, FaViadeoSquare } from 'react-icons/fa';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import rolex from '../images/Rolex.jpeg';
import Related from './Related';



const ProductDetails = () => {

    const slides = [
        {
            image: rolex,
            number: 1
        },
        {
            image: rolex,
            number: 2
        },
        {
            image: rolex,
            number: 3
        },
        {
            image: rolex,
            number: 4
        },
        {
            image: rolex,
            number: 5
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

    return <>
        <main className='container'>
            <div className='mt-5 mb-5 flex flex-row'>
                <div className=' m-auto relative group  mb-5 rounded  '>
                    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500  text-white flex item-center place-content-center'>
                        <img src={slides[currentIndex].image} alt="rolex.png" width='400px' className='rounded ' />
                        <p className='text-white'>{slides[currentIndex].number}</p>
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
                                <RxDotFilled color='black' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='ml-2'>
                    <h4 className='font-bold  text-[1.2rem]'>Product Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                        laudantium qui autem ipsa hic quia quidem ratione corrupti placeat.
                        Commodi illo explicabo quam consequatur nemo culpa facere harum vel repellat.
                    </p>
                    <h5 className='font-bold mt-5'>Price: Ghc. 180</h5>
                    <div className='flex flex-row mt-2'>
                        <button className='bg-[blue] flex flex-row p-1 rounded'>
                            <FaCartPlus color='white' className='text-[1.2rem] cursor-pointer ' />
                            <span className='ml-2 text-sm text-white'> Add to Cart</span>
                        </button>
                        <button className='bg-[orange] flex flex-row ml-2 p-1 rounded' >
                            <FaShoppingBag color='white' className='text-[1.2rem] cursor-pointer ml-2 ' />
                            <span className='ml-2 text-sm text-white '> Purchase </span>
                        </button>
                        <button className='bg-[red] flex flex-row ml-2 p-1 rounded' >
                            <FaHeart color='white' className='text-[1.2rem] cursor-pointer ml-2 ' />
                            <span className='ml-2 text-sm text-white '> Wishlist</span>
                        </button>
                        <NavLink title='Demo' to='#' className='bg-[black] flex flex-row ml-2 p-1 rounded' target='_blank' >
                            <FaViadeoSquare color='white' className='text-[1.2rem] cursor-pointer ml-2 ' />
                            <span className='ml-2 text-sm text-white '> Demo </span>
                        </NavLink>
                    </div>
                    <div className='mt-4'>
                        <h6 className='font-bold'>Categories</h6>
                        <div className='flex flex-row'>
                            <p className='bg-[green] rounded px-1'>Python</p>
                            <p className='ml-2'>Django</p>
                            <p className='ml-2'>React</p>
                            <p className='ml-2'>Redux</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-[1.2rem] font-bold mb-2'>Related Products</h1>
            <Related />
        </main>
    </>
}

export default ProductDetails;