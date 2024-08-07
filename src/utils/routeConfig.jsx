import About from "../pages/about_react";
import SignIn from "../pages/auth/signin";
import Error404 from "../pages/errors/404";
import Main from "../pages/main";
import Home from "../pages/main/home";

export const routeList = [
    {
        path: '/',
        element: <Main />, 
        children: [ // Corrected the typo here
            {
                path: 'home', // This path should be relative to the parent path
                element: <Home />
            }
        ]
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '*',
        element: <Error404 />
    }
];

export default routeList;