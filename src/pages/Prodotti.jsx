import React, { useEffect, useState } from "react";
const Prodotti = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Errore nel caricamento dei prodotti", error);
      });
  }, []); // [] assicura che l'effetto venga eseguito solo una volta

  return (
    <div>
      <h1>I Nostri Prodotti</h1>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Prezzo: ${product.price}</p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Prodotti;
