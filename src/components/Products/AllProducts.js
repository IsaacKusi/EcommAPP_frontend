import ProductItem from "./ProductItem";


const AllProducts = () => {
    return <>
        <main className="container">
            <div className="font-semibold mt-2">
                <h3 className=" text-[1.3rem] font-sans">All Products</h3>
            </div>
            <div className="mt-2">
             <ProductItem /> 
            </div>
        </main>
    </>
}

export default AllProducts;