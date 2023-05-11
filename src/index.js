import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Contact from "./views/Contact";
import ErrorPage from "./views/ErrorPage";
import About from "./views/About";
import Projects from "./views/Projects";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Home from "./views/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const details = {
	name: "Samuel Park",
	email: "samjpark1497@gmail.com",
	location: "Buena Park, CA",
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "contact/",
				element: <Contact details={details} />,
			},
			{
				path: "about/",
				element: <About />,
			},
			{
				path: "projects/",
				element: <Projects />,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
