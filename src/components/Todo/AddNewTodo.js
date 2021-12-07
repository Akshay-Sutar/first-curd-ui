import { useState, useRef } from "react";

const AddNewTodo = (props) => {
  const title = useRef();
  const description = useRef();

  const [enteredTitle, setTitle] = useState("");
  const [enteredDescription, setDescription] = useState("");

  const addNewTodohandler = (event) => {
    if (title.current.value.trim().length === 0) {
      alert("title cannot be empty");
      return;
    }

    const newTodo = {
      title: title.current.value,
      description: description.current.value,
      completed: false,
    };

    fetch("http://localhost:4000/api/v1/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        setTitle("");
        setDescription("");
        props.onCreateTodo();
      })
      .catch((err) => console.error(err));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col align-self-center">
          <h4>Add new Todo</h4>
        </div>
      </div>
      <div className="row">
        <div className="col align-self-center">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={title}
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col align-self-center">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            ref={description}
            value={enteredDescription}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-success btn-sm"
            onClick={addNewTodohandler}
          >
            Add new Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewTodo;
