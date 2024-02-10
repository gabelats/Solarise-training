import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
