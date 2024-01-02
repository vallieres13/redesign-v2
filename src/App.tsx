import React from 'react';
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';

/* Styles */
import './styles/app.scss';

/* Fonts */
// Greycliff CF
import './static/fonts/GreycliffCF-Regular.woff2';
import './static/fonts/GreycliffCF-Bold.woff2';
import './static/fonts/GreycliffCF-Medium.woff2';
import './static/fonts/GreycliffCF-Heavy.woff2';
import './static/fonts/GreycliffCF-ExtraBold.woff2';
// JetBrains Mono
import './static/fonts/JetBrainsMono-Bold.woff2';
// Space Grotesk
import './static/fonts/SpaceGrotesk-Medium.woff2';
import './static/fonts/SpaceGrotesk-Bold.woff2';
// Readex P=ro
import './static/fonts/ReadexPro-Regular.woff2';
import './static/fonts/ReadexPro-Bold.woff2';
// Newsreader
import './static/fonts/Newsreader-Regular.woff2';

/* Pages */
import Index from './pages/Index';
import Hire from './pages/Hire';
import About from './pages/About';
import Stories from './pages/Stories';

/* Components */
import Navigation from './components/Navigation';
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
            <Routes>

                {/* Index Routing */}
                <Route index element={<Index />} />

                {/* Hire Routing */}
                <Route path="/Hire" element={<Hire />} />

                {/* About Routing */}
                <Route path="/About" element={<About />} />

                {/* Stories Routing */}
                <Route path="/Stories" element={<Stories />} />

                {/* Any* Routing (404 Not Found) */}
                <Route path="*" element={<NotFound />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
