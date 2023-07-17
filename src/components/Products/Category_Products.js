
import CategoryProductItem from "./CategoryProductItem"

const Category_Products = () => {
    return <>
        <main className="container">
        <div className="font-semibold mt-2">
                <h3 className=" text-[1.3rem] font-sans">Specific Product </h3>
            </div>
            <div className="mt-2">
            <CategoryProductItem />
            </div>

        </main>

    </>
}

export default Category_Products