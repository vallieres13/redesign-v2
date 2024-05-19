import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import gsap from 'gsap';

/* Styles */
import './styles/app.scss';

/* Pages */
import Index from './pages/Index';
import Hire from './pages/Hire';
import Work from './pages/Work';
import About from './pages/About';
import Services from './pages/Services';
import Stories from './pages/Stories';
import Article from './pages/Article';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Imprint from './pages/Imprint';
import NotFound from './pages/NotFound';

/* Components */
import Layout from './components/Layout';

const App = () => {

    /* GSAP Configuration */
    gsap.config({
        autoSleep: 60,
        force3D: false,
        nullTargetWarn: false
    });

    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    index: true,
                    path: '/',
                    element: <Index />
                },
                {
                    path: '/Hire',
                    element: <Hire />
                },
                {
                    path: '/Work',
                    element: <Work />
                },
                {
                    path: '/Webdesign',
                    element: <Services />
                },
                {
                    path: '/About',
                    element: <About />
                },
                {
                    path: '/Stories',
                    element: <Stories />
                },
                {
                    path: '/Article/:slug',
                    element: <Article />
                },
                {
                    path: '/Contact',
                    element: <Contact />
                },
                {
                    path: '/Privacy',
                    element: <Privacy />
                },
                {
                    path: '/Imprint',
                    element: <Imprint />
                },
                {
                    path: '*',
                    element: <NotFound />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
