
import Allcategories from "./categoryItems/Allcategories";

const Categories = () => {
    return <>
        <main className="container ">
            <div className="font-semibold mt-2">
                <h3 className=" text-[1.3rem] font-sans">All Categories</h3>
            </div>
            <div className="mt-2">
            <Allcategories />
            </div>
        </main>
    </>
}

export default Categories;