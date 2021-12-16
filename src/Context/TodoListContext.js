import React, { createContext, useReducer } from "react";
import { todosReducer } from "../todosReducer";

export const TodoListContext = createContext();

// const todosReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, { text: action.text, id: Math.random() }];
//     case "REMOVE_TODO":
//       return state.filter((todo) => todo.id !== Number(action.id));
//     default:
//       return state;
//   }
// }; moved to REDUCER FOLDER

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { text: "Plan A Trip", id: 1 },
    { text: "Buy Drip", id: 2 },
    { text: "WorkOut", id: 3 },
  ]);

  //   const addTodo = (todo) => {
  //     setTodos([...todos, { text: todo, id: Math.random() }]);
  //   };

  //   const removeTodo = (id) => {
  //     setTodos(
  //       todos.filter((todo) => {
  //         return todo.id !== Number(id);
  //       })
  //     );
  //   }; NO LONGER NEEDED SINCE WE USED REDUCER CONTEXT

  return (
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};
export default TodoListContextProvider;
