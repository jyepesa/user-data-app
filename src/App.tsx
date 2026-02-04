import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav>
        <Link to="/overview">Overview</Link>
        <Link to="/create">Create new user</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
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
        element: (
          <h1>Welcome to the page's overview. Cards will be displayed here</h1>
        ),
      },
      {
        path: "create",
        element: <h1>Here you will be able to create new users</h1>,
      },
      {
        path: "edit/:userId",
        element: <h1>this area is meant to edit existing users</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
