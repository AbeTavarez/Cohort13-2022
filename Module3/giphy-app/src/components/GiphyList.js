import Giphy from "./Giphy";

const GiphyList = (props) => {
  const { giphys, msg } = props;
  return (
    <div>
      <h1>{msg}</h1>

      {giphys.map((item) => (
        <Giphy item={item} key={item.id} />
      ))}
    </div>
  );
};

export default GiphyList;
