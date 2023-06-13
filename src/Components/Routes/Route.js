import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Homes/Home";
import Contact from "../Pages/Contacts/Contact";
import TeamAll from "../Pages/Teams/TeamAll";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/team',
                element: <TeamAll></TeamAll>
            }
        ]
    }
]);
export default router
    ;