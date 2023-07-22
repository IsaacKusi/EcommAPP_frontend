
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {

    return <>
        <hr />
        <main className=' container flex justify-between mb-2 mt-1 '>
            <p className='text-[0.8rem]'>Watches &copy; 2023 IKIESWATCHES</p>
            <div className='flex flex-row'>
                <BsFacebook className='mr-2' />
                <BsWhatsapp />
            </div>
        </main>
    </>

}

export default Footer;