export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div className="products-container">
        {props.products.map(products => (
          <div key={products.id} className="products">
            <h2>{products.name}</h2>
            <h2>{products.price}</h2>
            <h2>Description: {products.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
