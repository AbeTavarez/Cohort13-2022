import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import GiphyList from "./components/GiphyList";
import About from './components/pages/About'

const App = () => {
  // sets up our app state
  const [giphys, setGiphys] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=OSsE1u9CyQcBk5DvCIWDvOFrrsnvRv1V&limit=25&rating=g"
    )
      .then((res) => res.json())
      .then((json) => setGiphys(json.data));
  }, []);

  return (
    <div className="App">
      <h1>GIPHY APP</h1>

    <Switch>

      <Route path='/about'>
          <About />
      </Route>

      <Route path='/'>
        {giphys && <GiphyList giphys={giphys} msg="GIPHYS COMPONET" />}
      </Route>

    </Switch>
     
    </div>
  );
};

export default App;
