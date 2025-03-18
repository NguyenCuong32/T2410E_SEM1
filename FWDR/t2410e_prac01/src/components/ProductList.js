import products from "../data/product.json";
import Product from "./Product";
function ProductList() {
  return (
    <div>
      <div className="row g-5 m-2">
        {products.map((p) => (
          <div className="col col-4">
            <div className="p-2">
              <Product
                image={p.image}
                price={p.price}
                desription={p.desription}
              ></Product>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;
