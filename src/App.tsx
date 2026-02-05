import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import CreateUser from "./pages/createUser/CreateUser";
import { UserDataProvider } from "./context/UserDataContext";
import Overview from "./pages/overview/Overview";
import EditUser from "./pages/editUser/EditUser";

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
          element: <Overview />,
        },
        {
          path: "create",
          element: <CreateUser />,
        },
        {
          path: "edit/:id",
          element: <EditUser />,
        },
      ],
    },
  ],
  {
    basename: "/user-data-app",
  },
);

function App() {
  return (
    <UserDataProvider>
      <RouterProvider router={router} />;
    </UserDataProvider>
  );
}

export default App;
