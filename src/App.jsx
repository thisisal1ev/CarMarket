import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//layouts
import MainLayout from "./layouts/MainLayout"

//pages
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App