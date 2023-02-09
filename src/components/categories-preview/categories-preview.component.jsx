import { CategoriesContext } from "../../context/category.context";
import { useContext } from "react";
import "./categories-preview.styles.scss";
import CategoryPreview from '../category-preview/category-preview.component'

export default function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  
  return (
    <div className="shop-container">
      {categoriesMap.map((category) => {
        return (
          <CategoryPreview
            key={category.title}
            title={category.title}
            products={category.items}
          />
        );
      })}
    </div>
  );
}