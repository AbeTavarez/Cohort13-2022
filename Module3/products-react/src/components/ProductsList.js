import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  // const { products } = props
  return (
    <div>
      <h2>Products</h2>

      {/* Here we map over the array */}
      {/* {props.products.map((item, idx) => <ProductItem product={item} key={idx} /> )} */}

      {/* {props.products.map((item, idx) =>
        item.inStock ? (
          <ProductItem product={item} key={idx} />
        ) : (
          <h3 key={idx}>{item.name} is out of stock!</h3>
        )
      )} */}

      {props.products.map(
        (item, idx) => item.inStock && <ProductItem product={item} key={idx} addToCart={props.addToCart}/>
      )}
    </div>
  );
};

export default ProductsList;
