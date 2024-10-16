import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, HashRouter as Router, RouterProvider } from 'react-router-dom';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
