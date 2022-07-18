import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateTodo = (props) => {
  const [todo, setTodo] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http:///localhost:5000/todos/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data)
        setTodo(res.data)
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/todos/${id}`, todo, {
        headers: {
          'x-auth-token': localStorage.getItem("userToken")
        }
      }).then(res => history.push('/home'))
  };

  return (
    <div>
      {todo && (
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={todo.title}
            onChange={(e) =>
              setTodo({ ...todo, [e.target.id]: e.target.value })
            }
          />

          <div className="mb-3">
            <label className="form-label" htmlFor="details">
              Details
            </label>
            <input
              className="form-control"
              type="text"
              id="details"
              name="details"
              value={todo.details}
              onChange={(e) =>
                setTodo({ ...todo, [e.target.id]: e.target.value })
              }
            />
          </div>

          <input
            type="submit"
            className="btn btn-success"
            value="Update Todo"
          />
        </form>
      )}
    </div>
  );
};

export default UpdateTodo;
