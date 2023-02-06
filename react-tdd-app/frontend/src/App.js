import React, { useState, useEffect } from "react";
import "./App.css";

function App({ url }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`${url}/products`)
      .then((response) => response.json())
      .then(setProducts);
  }, [url]);

  return (
    <div className="App">
      <h1>Travel Products</h1>
      {products ? (
        <ul>
          {products.map((product) => (
            <li key={product.name}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default App;
