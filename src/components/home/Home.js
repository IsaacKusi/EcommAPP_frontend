
import HomeCards from "./homeitems/HomeCards";
import PopularCategoriesCard from "./homeitems/PopularCategoriesCard";
import PopularProductCard from "./homeitems/PopularProductCard";
import VendorCard from "./homeitems/VendorCard";
import ReviewCarousel from "./homeitems/ReviewsCarousel";
import { NavLink } from "react-router-dom";

const Home = () => {

    return <>
        <main className=" container mt-3">
            {/* latest products */}
            <div className="flex justify-between font-semibold">
                <h3 className=" text-[1.3rem] font-sans">Latest Products</h3>
                <NavLink to = '/all_products'> <button className="bg-[#333333] text-white px-1 py-1 rounded text-[0.8rem] w-32">View All Products</button></NavLink>
            </div>
            <div className="flex flex-wrap mt-2 ">
                <HomeCards />
            </div>

            {/* popular categories */}

            <div className="flex justify-between font-semibold mt-2">
                <h3 className=" text-[1.3rem] font-sans">Popular Categories</h3>
              <NavLink to = '/categories'><button className="bg-[#333333] text-white px-1 py-1 rounded text-[0.8rem] w-32 ">View All Categories</button></NavLink>
            </div>
            <div className="flex flex-wrap mt-2 ">
                <PopularCategoriesCard />
            </div>

            {/* popular products */}

            <div className="flex justify-between font-semibold mt-2">
                <h3 className=" text-[1.3rem] font-sans">Popular Products</h3>
                <NavLink to = '/all_products'><button className="bg-[#333333] text-white px-1 py-1 rounded text-[0.8rem] w-32">View All Products</button></NavLink>
            </div>
            <div className="flex flex-wrap mt-2 ">
                <PopularProductCard />
            </div>
            {/* popular vendors */}

            <div className="flex justify-between font-semibold mt-2">
                <h3 className=" text-[1.3rem] font-sans">Popular Vendors</h3>
                <NavLink to = '#'><button className="bg-[#333333] text-white px-1 py-1 rounded text-[0.8rem] w-32">View All Vendors</button></NavLink>
            </div>
            <div className="flex flex-wrap mt-2 ">
                <VendorCard />
            </div>
            {/* reviews Carousel */}
            <ReviewCarousel />
            <hr />
        </main>
    </>
}

export default Home;