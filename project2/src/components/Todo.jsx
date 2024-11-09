import React from "react";
import TodoItem from "./TodoItem";

function Todo({ todos }) {
  return (
    <>
      <div>
      <h3 className="text-center">Todo List</h3>

      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.srno} todo={todo} />
      ))}
    </>
  );
}

export default Todo;
