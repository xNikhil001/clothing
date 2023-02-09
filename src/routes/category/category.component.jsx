import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../context/category.context";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles.scss'

export default function Category() {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const item = categoriesMap.find(
      (item) => item.title.toLowerCase() === category.toLowerCase()
    );
    if(item){
      setProducts(item.items);
    }
    
  }, [category, categoriesMap]);
  console.log();
  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      
      <div className="category-container-outer">
      {products.length > 0 ?
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) : <h3>No Item Found</h3>}
    </div>
    </div>
  );
}
