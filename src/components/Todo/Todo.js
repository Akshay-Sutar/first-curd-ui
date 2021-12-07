import "./Todo.css";

const Todo = (props) => {
  const classes = ["card", "todo"];
  if (props.completed) {
    classes.push("todo-completed");
  } else {
    classes.push("todo-pending");
  }

  const todoClickHandler = (event) => {
    const updatedTodo = {
      title: props.title,
      description: props.description,
      completed: !props.completed,
    };
    fetch(`http://localhost:4000/api/v1/todo/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.onUpdateTodo();
      })
      .catch((err) => console.error(err));
  };

  let button = (
    <button
      className="btn btn-outline-success btn-sm"
      onClick={todoClickHandler}
    >
      Mark as complete
    </button>
  );

  if (props.completed) {
    button = (
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={todoClickHandler}
      >
        Mark as incomplete
      </button>
    );
  }

  return (
    <div className={classes.join(" ")}>
      <div className="row">
        <div className="col-8">
          <label>{props.title}</label>
        </div>
        <div className="col-2 align-self-end">{button}</div>
        <div className="col-2 align-self-end">
          <button className="btn btn-outline-danger btn-sm">Delete</button>
        </div>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default Todo;
