import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './components/About';
import { Contact } from "./components/Contact";
// import { Skills } from "./components/Skills";
// import { Works } from "./components/Works";


const router = createBrowserRouter([
  { path: '/', element: <App />, children: [{path: 'about', element: <About />}, {path: 'contact', element: <Contact/>}]}
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);