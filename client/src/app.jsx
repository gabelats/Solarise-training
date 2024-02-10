<<<<<<< HEAD
import Header from "./components/header";
import Login from "./pages/Login";
=======
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import { Outlet } from "react-router-dom";

>>>>>>> main
function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Outlet />
      </div>
      <Footer></Footer>
      <Login />
    </div>
  );
}

export default App;
