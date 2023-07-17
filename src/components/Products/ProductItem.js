import rolex from '../images/Rolex.jpeg'
import { FaCartPlus, FaHeart } from 'react-icons/fa'

const ProductItem = ()=>{
    return <>
        <main className='border border-2  w-[13rem] rounded-md mr-5 mb-5 '>
            <div className='flex item-center place-content-center py-1'>
                <img src={rolex} alt="rolex.png" width='200px'  className='rounded' />
            </div>
            <h4 className='p-1 font-sans font-semibold'>Product title</h4>
            <h5 className='p-1 fnt-sans font-semibold text-[blue] text-[0.9rem]'>Price: Ghc 180</h5>
            <footer className='bg-[lightgrey] p-1 flex flex-row'>
                <FaCartPlus color='white' className='text-[1.2rem] cursor-pointer ' title='Add to Cart' />
                <FaHeart color='red' className='text-[1.2rem] cursor-pointer ml-2 ' title='Add to Wishlist ' />
            </footer>
        </main>
    </>
}

export default ProductItem;

