import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../component/Home";
import ArticlesDetail from "../component/ArticlesDetail";
function Layout() {
  return (
    <>
  
     <Outlet />
  
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "articlesDetail/:id", element: <ArticlesDetail /> },
      //   { path: "contact", element: <Contact /> },
      //   { path: "Pages", element: <Pages /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
