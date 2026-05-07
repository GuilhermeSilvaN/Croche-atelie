import ProductCard from "../Product/ProductCard";
import products from "../../service/products";

import "./ProductList.css";

export default function ProductList({ search, category , priceFilter}) {

  const filteredProducts = products.filter((product) =>{

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "" || product.category === category;

    //price
    let matchPrice = true;

    if(priceFilter === "0-200"){
      matchPrice = product.price <= 200;
    } 

    else if (priceFilter === "200"){
      matchPrice = product.price > 200;
    }

    
    return matchSearch && matchCategory && matchPrice;
  }
  );

  return (
    <section className="product-list">

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </section>
  );
}