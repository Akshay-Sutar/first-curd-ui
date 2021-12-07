const Navbar = (props) => {
  const addNewTodoClickHandler = () => {};
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="col-10">
          <h2 className="navbar-brand">Todo</h2>
        </div>
        <div className="col-2">
          {/* <button
            className="btn btn-primary btn-sm"
            onClick={addNewTodoClickHandler}
          >
            Add new Todo
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
