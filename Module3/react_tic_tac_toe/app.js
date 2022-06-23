// Header Component
const Header = () => {
  return <h1>React Tic Tac Toe !!!!</h1>;
};

// Player Component
const Player = (props) => {
  return (
    <div className={props.playerName}>
      <h2>Player {props.playerName} </h2>
      <h3>Wins: </h3>
    </div>
  );
};

// Square Component
const Square = () => {
  return (
    <div>
      <h4 className="square">Square</h4>
    </div>
  );
};

const Board = () => {
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

// App Component
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Player playerName="X"/>
        <Player playerName="O"/>
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
