import ProductItem from './ProductItem'

const ProductsList = (props) => {
  // const { products } = props
  return (
    <div>
      <h2>Products</h2>

      {/* Here we map over the array */}
      {props.products.map((item, idx) => <ProductItem product={item} key={idx} /> )}
    </div>
  );
};

export default ProductsList;
