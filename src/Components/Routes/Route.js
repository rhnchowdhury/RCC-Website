import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Homes/Home";
import Contact from "../Pages/Contacts/Contact";
import TeamAll from "../Pages/Teams/TeamAll";
import About from "../Pages/Abouts/About";
import ServicesAll from "../Pages/Services/ServicesAll";
import WorkAll from "../Pages/Works/WorkAll";

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
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/service',
                element: <ServicesAll></ServicesAll>
            },
            {
                path: '/work',
                element: <WorkAll></WorkAll>
            }
        ]
    }
]);
export default router
    ;