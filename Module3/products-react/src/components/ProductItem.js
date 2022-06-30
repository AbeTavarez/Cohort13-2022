const ProductItem = (props) => {
  const {name, price, description} = props.product
    return(
        <div onClick={ () => props.addToCart(props.product) }>
          <h3>{name}</h3>
          <h2>$ {price}</h2>
          <p>{description}</p>
        </div> 
    )
}

export default ProductItem