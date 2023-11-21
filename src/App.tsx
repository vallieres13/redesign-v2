import React from 'react';
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';

/* Styles */
import './styles/app.scss';

/* Pages */
import Index from './pages/Index';

/* Components */
import Navigation from './components/Navigation';
import PageContent from './components/containers/Content';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

/* Images */
import Logo from "./static/logo.svg";

const App = () => {

    /* GSAP Configuration */
    gsap.config({
        autoSleep: 60,
        force3D: false,
        nullTargetWarn: false
    });

    return (
        <BrowserRouter>
            <header className="container">
                <div className="logo">
                    <NavLink to="/">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                </div>
                <Navigation />
            </header>
            <PageContent>
                <Routes>

                    {/* Index Routing */}
                    <Route index element={<Index />} />

                    {/* Labs Routing */}
                    {/* <Route path="/Labs" element={<Labs />} /> */}

                    {/* Any* Routing (404 Not Found) */}
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </PageContent>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
