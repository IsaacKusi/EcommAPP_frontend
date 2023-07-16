
import HomeCards from "./homeitems/HomeCards";

const Home = () => {
    return <>
        <main className=" container mt-3">
            <div className="flex justify-between font-semibold">
            <h3 className=" text-[1.5rem] font-sans">Latest Products</h3>
            <button className="bg-[#333333] text-white px-1 rounded text-sm">View All Products</button>
            </div>
            <div className="flex flex-wrap mt-2 ">
                <HomeCards/>
            </div>
        </main>
    </>
}

export default Home;