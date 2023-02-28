import "./App.css";
import Calculator from "./component/Calculator";
import Home from "./component/Home";
import Quote from "./component/Quote";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Route>
    )
  );
  return (
    <main className="main__container">
      <RouterProvider router={router} />
    </main>
  );
}

const Root = () => {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <div className="nav__link">
        <div>
          <h1>Math Magicians</h1>
        </div>
        <div className="nav__link-right">
          <Link className="nav__link-links border" to="/">
            Home
          </Link>
          <Link className="nav__link-links border" to="/calculator">
            Clculator
          </Link>
          <Link className="nav__link-links" to="/quote">
            Quote
          </Link>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
