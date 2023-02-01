import React from "react";
import './category-item.styles.scss'

export default function CategoryItem({category:{id,title,imageUrl}}) {
  return (
    <div className="category-container" key={id}>
      <img className="background-image" src={imageUrl} alt={title} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}
