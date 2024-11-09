import React from "react";
import { Button } from "react-bootstrap";

function TodoItem({ todo }) {
  return (
    <div className="me-4">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <Button className="" variant="danger"> Delete</Button>
      <Button className="" variant="danger"> Update</Button>

    </div>
  );
}

export default TodoItem;
