import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { TodoListContext } from "../Context/TodoListContext";

// export class TodoList extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;

//     return (
//       <div
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: "140px",
//           textAlign: "center",
//         }}
//       >
//         <p className="item">Plan A Trip</p>
//         <p className="item">Buy Drip</p>
//         <p className="item">Workout</p>
//         <button className="ui button primary" onClick={changeTheme}>
//           Change Theme
//         </button>
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const { todos, dispatch } = useContext(TodoListContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todo });
  };

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    dispatch({ type: "REMOVE_TODO", text: todo, id });
  };

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        textAlign: "center",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p
              id={todo.id}
              onClick={handleRemoveTodo}
              key={todo.id}
              className="item"
            >
              {todo.text}
            </p>
          );
        })
      ) : (
        <>You Have No Todos</>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todo">Add todo:</label>
        <input type="text" id="todo" onChange={handleChange} />
        <input
          type="submit"
          value="Add New Todo"
          className="ui button primary"
        />
      </form>
      <button className="ui button primary" onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default TodoList;
