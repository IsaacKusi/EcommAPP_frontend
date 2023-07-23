
import { FaCartPlus, FaHeart, FaShoppingBag, FaViadeoSquare } from 'react-icons/fa'
import RelatedProductCarousel from './RelatedProductsCarousel'
import { NavLink } from 'react-router-dom'
import rolex from '../images/Rolex.jpeg'



const ProductDetails = () => {

    return <>
        <main className='container'>
            <div className='mt-5 mb-5 flex flex-row'>
                <img src={rolex} alt="rolex.png rounded" />
                <div className='ml-2'>
                    <h4 className='font-bold'>Product Title</h4>
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
            <RelatedProductCarousel/>
        </main>
    </>
}

export default ProductDetails;