import NavBar from "../layout/NavBar";
import CreateTodo from "../forms/CreateTodo";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/todos", {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (todo) => {
    axios
      .delete(`http://localhost:5000/todos/${todo._id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setTodos([...todos.filter((t) => t._id !== todo._id)]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <NavBar user={props.user} />
      <h1>Home Page</h1>

      <CreateTodo setTodos={setTodos} todos={todos} />

      {todos &&
        todos.map((todo) => (
          <div key={todo._id}>
            <h6>{todo.title}</h6>
            <h6>
              {todo.details}{" "}
              {todo.user === props.user._id && (
                <span
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo)}
                >
                  x
                </span>
              )}{" "}
            </h6>
          </div>
        ))}
    </div>
  );
};

export default Home;
