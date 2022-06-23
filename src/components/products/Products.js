import "./Products.css";
import Product from "../product/Product";

const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            qty={product.qty === 0}
          />
        );
      })}
    </section>
  );
};
export default Products;
