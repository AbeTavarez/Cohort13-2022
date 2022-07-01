import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import MovieInfo from "./components/MovieInfo";

class App extends Component {
  state = {
    baseURL: "http://www.omdbapi.com/?",
    apiKey: "apikey=d9040479",
    query: "&t=",
    movieTitle: "",
    searchURL: "",
    movie: null
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({searchURL: this.state.baseURL + this.state.apiKey + this.state.query + this.state.movieTitle }, () => {
      fetch(this.state.searchURL)
      .then(res => res.json())
      .then(json => this.setState({movie: json}))
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Movies APP</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="movieTitle">Title</label>

          <input
            type="text"
            id="movieTitle"
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />

          <input type="submit" />
        </form>

        <a href={this.state.searchURL}>{this.state.searchURL}</a>

        {this.state.movie && <MovieInfo movie={this.state.movie}/>}
      </div>
    );
  }
}

export default App;
