import React,{useContext} from "react";
import Button from "../button/button.component";
import './product-card.styles.scss';
import { CartContext } from "../../context/cart.context";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product
  const {addItemToCart} = useContext(CartContext)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={()=>addItemToCart(product)} buttonType="inverted">Add</Button>
    </div>
  );
}
