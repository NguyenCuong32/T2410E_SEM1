import products from '../data/product.json';
import Product from './Product';
function ProductList(){
    return (
        <div>
            <ul>
                {products.map((p)=>(
                    <Product image ={p.image} price ={p.price} desription ={p.desription}></Product>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;
