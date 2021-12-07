import React from "react";
import Todo from "./Todo";
import classes from "./TodoList.css";
const TodoList = (props) => {
  const todos = props.items.map((todo) => {
    return (
      <Todo
        key={todo._id}
        id={todo._id}
        description={todo.description}
        title={todo.title}
        completed={todo.completed}
        createdAt={todo.createdAt}
        updatedAt={todo.updatedAt}
        onUpdateTodo={props.onUpdateTodo}
      />
    );
  });

  return (
    <React.Fragment>
      <h4>Todo List</h4>
      <div className={classes.TodoList}>{todos}</div>
    </React.Fragment>
  );
};
export default TodoList;
