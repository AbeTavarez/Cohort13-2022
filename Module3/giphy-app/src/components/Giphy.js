const Giphy = (props) => {
  // const { item: {title, images} } = props
  const { item } = props;
  return (
    <div>
      <h2>{item.title}</h2>

      <img src={item.images.original.url} alt={item.title} />
    </div>
  );
};

export default Giphy;
