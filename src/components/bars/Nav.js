import { Link } from "react-router-dom";

const Nav = () => {
    return <>
        <main className="bg-[blue] text-white ">
            <div className="container flex justify-between py-2">
                <div className="font-bold">
                    <span className="text-[orange]">IKIES</span>WATCHES
                </div>
                <div className="flex justify-between font-semibold font-sans">
                    <Link to='/'><p className="mr-5">Home</p></Link>
                    <Link to='/categories'><p>Categories</p></Link>
                </div>
            </div>
        </main>
    </>
}

export default Nav;