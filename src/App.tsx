import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import CreateUser from "./pages/createUser/CreateUser";
import UserCard from "./components/UserCard";

const RootLayout = () => {
  return (
    <div className="app">
      <nav className="sidebar">
        <Link to="/overview" className="sidebar__link">
          Overview
        </Link>
        <Link to="/create" className="sidebar__link">
          Create new user
        </Link>
      </nav>
      <main className="body">
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: (
        <div>
          <h1>Oops, something went wrong! Are you sure you typed correctly?</h1>
          <Link to="/">Back to the page</Link>
        </div>
      ),
      children: [
        {
          index: true,
          element: <Navigate to="/overview" replace />,
        },
        {
          path: "overview",
          element: <UserCard />,
        },
        {
          path: "create",
          element: <CreateUser />,
        },
        {
          path: "edit/:userId",
          element: <h1>this area is meant to edit existing users</h1>,
        },
      ],
    },
  ],
  {
    basename: "user-data-app",
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
