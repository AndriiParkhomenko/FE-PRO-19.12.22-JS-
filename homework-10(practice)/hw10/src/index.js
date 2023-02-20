import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	createBrowserRouter,
	RouterProvider,
 } from "react-router-dom";
import About from './components/static/About';
import ContactUs from './components/static/ContactUs';
import { Container } from 'react-bootstrap';
import NotFound from './components/static/NotFound';
import SingleProduct from './components/SingleProduct';
import Products from './components/Products';

 const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App/>,
	  errorElement: <NotFound/>,
	  children: [{
		path: "products",
		element: <Products/>,
	 },{
		path: "product/:productId",
		element: <SingleProduct/>,
	 },{
		path: "/about",
		element: <About/>,
	 },{
		path: "/contact-us",
		element: <ContactUs/>,
	 }]
	},
 ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Container className={"bg-white"}>
		 <RouterProvider router={router} />
		</Container>
  </React.StrictMode>
);

reportWebVitals();
