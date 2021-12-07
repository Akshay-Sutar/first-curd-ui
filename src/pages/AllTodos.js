import { useState } from "react";
import TodoList from "../components/Todo/TodoList";
import AddNewTodo from "../components/Todo/AddNewTodo";

const AllTodos = (props) => {
  const [todoList, setTodoList] = useState([]);
  //const [showList, setShowList] = useState(true);

  const fetchTodoList = () => {
    fetch("http://localhost:4000/api/v1/todo")
      .then((res) => res.json())
      .then((parsedResponse) => {
        const { data } = parsedResponse;
        setTodoList(data);
      });
  };

  useState(() => {
    fetchTodoList();
  }, []);

  return (
    <div className="row">
      <div className="col">
        {<AddNewTodo onCreateTodo={fetchTodoList} />}
        {<TodoList items={todoList} onUpdateTodo={fetchTodoList} />}
      </div>
    </div>
  );
};

export default AllTodos;
