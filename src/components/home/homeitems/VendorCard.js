
import rolex from '../../images/Rolex.jpeg'

const VendorCard = ()=>{
    return <>
        <main className='border border-2  w-[13rem] rounded-md mr-5 mb-5 '>
            <div className='flex item-center place-content-center py-1'>
                <img src={rolex} alt="rolex.png" width='200px'  className='rounded' />
            </div>
            <h4 className='p-1 font-sans font-semibold'>Vendor name</h4>
            <footer className='bg-[lightgrey] p-1 flex flex-row text-[1rem]'>
               <p>Categories : <a href='##' className='text-[blue] text-[0.8rem]'> clock, Wrist Watch </a></p>
            </footer>
        </main>
    </>
}

export default VendorCard;