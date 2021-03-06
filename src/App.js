import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ReviewPage from "./components/ReviewPage/ReviewPage";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className="App">
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/review" element={<ReviewPage></ReviewPage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </section>
  );
}

export default App;
