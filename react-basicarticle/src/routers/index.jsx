import Homepage from "../pages/Index.jsx";
import RootLayout from "../layouts/RoutesLayout.jsx";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About.jsx";
import Blog from "../pages/blogs/blogx.jsx";
import Post from "../pages/blogs/_id.jsx";
import { post, postById } from "../apis/loaders.js";
import ErrorPage from "../components/Error.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: post
            },
            {
                path: "/blogs/:id",
                element: <Post />,
                loader: postById
            },
            {
                path: "/about",
                element: <About />
            },
        ]
    },
]);