import "./productList.css"
import Product from "../product/Product"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">NK's Portfolio - Diversified Portfolio </h1>
                <p className="pl-desc">
                    Diversified Portfolio using all programmes and languages 
                </p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default ProductList