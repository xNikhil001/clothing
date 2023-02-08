import { ProductContext } from "../../context/product.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss'

export default function Shop() {
  const {products} = useContext(ProductContext)
  return (
    <div className="products-container">
      {products.map((product) => {
        return (<ProductCard key={product.id} product={product} />)
      })}
    </div>
  );
}
