import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Nav = () => {
    return <>
        <main className="bg-[blue] text-white ">
            <div className="container flex justify-between py-2">
                <div className="font-bold">
                    <span className="text-[orange]">IKIES</span>WATCHES
                </div>
                <div className="flex justify-between font-semibold font-sans">
                    <Link to='/'><p className="mr-5">Home</p></Link>
                    <Link to='/categories'><p className="mr-5">Categories</p></Link>
                    <Link to='/checkout' > <div className="flex  items-center">
                        <FaCartPlus fontSize={20} />
                        <sup className=" ml-1 ">0</sup>
                    </div> </Link>
                </div>
            </div>
        </main>
    </>
}

export default Nav;