import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//layouts
import MainLayout from "./layouts/MainLayout"

//pages
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Feedback from './pages/Feedback';

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
        {
          path: "/feedback",
          element: <Feedback />,
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App