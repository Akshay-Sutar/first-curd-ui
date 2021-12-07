import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import AllTodos from "./pages/AllTodos";

function App() {
  return (
    <div className="container">
      <Layout>
        <Routes>
          <Route path="/" element={<AllTodos />} exact></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
