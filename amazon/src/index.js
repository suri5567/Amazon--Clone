import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import ProductPage from './ProductPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import CartPage from './CartPage';
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import OrderPlaced from './OrderPlaced'


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: "/items/:id",
		element: <ProductPage />
	}
	,
	{
		path: "/shop",
		element: <CartPage />
	},
	{
		path: "/login",
		element: <Login />

	},

	{
		path: "/signup",
		element: <Signup />
	},

	{
		path:"/orderPlaced",
		element:<OrderPlaced />

	}

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<RouterProvider router={router}></RouterProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
