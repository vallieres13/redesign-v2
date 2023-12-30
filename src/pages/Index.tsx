import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

/* Static */
import FelixTransparent from './../static/images/promos/felix-transparent.png';
import GithubLogo from './../static/icons/github.svg';
import LinkedInLogo from './../static/icons/linkedin.svg';
import XingLogo from './../static/icons/xing.svg';

import DesignSpotlight from './../static/images/spotlight/design.png';
import MarketingSpotlight from './../static/images/spotlight/marketing.png';
import CloudSpotlight from './../static/images/spotlight/cloud.png';
import CodeSpotlight from './../static/images/spotlight/code.png';
import AiSpotlight from './../static/images/spotlight/ai.png';

import CoffeeArticle from './../static/images/articles/coffee.png';
import PierArticle from './../static/images/articles/pier.png';
import GlowArticle from './../static/images/articles/glow.png';
import ShimmerArticle from './../static/images/articles/shimmer.png';
import MountainsArticle from './../static/images/articles/mountains.png';
import CrystalsArticle from './../static/images/articles/crystals.png';
import CactusArticle from './../static/images/articles/cactus.png';

import PhpStack from './../static/icons/php-stack.svg';
import GitStack from './../static/icons/git-stack.svg';
import HtmlStack from './../static/icons/html-stack.svg';
import JavaStack from './../static/icons/java-stack.svg';
import DatabaseStack from './../static/icons/database-stack.svg';
import JsStack from './../static/icons/js-stack.svg';
import CcStack from './../static/icons/cc-stack.svg';
import CloudStack from './../static/icons/cloud-stack.svg';

import Php from './../static/icons/php.svg';
import Git from './../static/icons/git.svg';
import Html from './../static/icons/html.svg';
import Java from './../static/icons/java.svg';
import Database from './../static/icons/database.svg';
import Js from './../static/icons/js.svg';
import Cc from './../static/icons/cc.svg';
import Cloud from './../static/icons/cloud.svg';

/* Misc */
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const Index = () => {

    const spotlightItems = [
        {
            illustration: DesignSpotlight,
            title: 'Interaction Design',
            description: '... is a striving full-stack web developer in today\'s ever so fast growing web-app economy.',
            buttonTitle: 'About Me',
            buttonTarget: '/about'
        },
        {
            illustration: MarketingSpotlight,
            title: 'Internet Marketing',
            description: '... is a striving full-stack web developer in today\'s ever so fast growing web-app economy.',
            buttonTitle: 'About Me',
            buttonTarget: '/about'
        },
        {
            illustration: CloudSpotlight,
            title: 'Cloud Management',
            description: '... is a striving full-stack web developer in today\'s ever so fast growing web-app economy.',
            buttonTitle: 'About Me',
            buttonTarget: '/about'
        },
        {
            illustration: CodeSpotlight,
            title: 'Web & App Development',
            description: '... is a striving full-stack web developer in today\'s ever so fast growing web-app economy.',
            buttonTitle: 'About Me',
            buttonTarget: '/about'
        },
        {
            illustration: AiSpotlight,
            title: 'Artificial Intelligence',
            description: '... is a striving full-stack web developer in today\'s ever so fast growing web-app economy.',
            buttonTitle: 'About Me',
            buttonTarget: '/about'
        }
    ];

    const techStackItems = [
        {
            logo: Php,
            stack: PhpStack
        },
        {
            logo: Java,
            stack: JavaStack
        },
        {
            logo: Database,
            stack: DatabaseStack
        },
        {
            logo: Git,
            stack: GitStack
        },
        {
            logo: Js,
            stack: JsStack
        },
        {
            logo: Cc,
            stack: CcStack
        },
        {
            logo: Cloud,
            stack: CloudStack
        }
    ];

    const articleItems = [
        {
            title: 'Und wieder wird dein Blick zu Stein vor mir',
            image: CoffeeArticle,
            author: 'Felix Hebgen',
            readTime: 2
        },
        {
            title: 'Und wieder wird dein Blick zu Stein vor mir',
            image: PierArticle,
            author: 'Felix Hebgen',
            readTime: 5
        },
        {
            title: 'Und wieder wird dein Blick zu Stein vor mir',
            image: GlowArticle,
            author: 'Felix Hebgen',
            readTime: 3
        },
        {
            title: 'Und wieder wird dein Blick zu Stein vor mir',
            image: ShimmerArticle,
            author: 'Felix Hebgen',
            readTime: 7
        },
        {
            title: 'Und wieder wird dein Blick zu Stein vor mir',
            image: MountainsArticle,
            author: 'Felix Hebgen',
            readTime: 1
        },
        {
            title: 'Und wieder wird dein Blick zu Stein vor mir',
            image: CrystalsArticle,
            author: 'Felix Hebgen',
            readTime: 5
        },
        {
            title: 'Und wieder wird dein Blick zu Stein vor mir',
            image: CactusArticle,
            author: 'Felix Hebgen',
            readTime: 6
        },
    ];

    return (
        <main className="home">
            <div className="promo">
                <div className="profile">
                    <div className="picture">
                        <img src={FelixTransparent} alt="Felix Hebgen" />
                    </div>
                    <div className="socials">
                        <ul>
                            <li><a href="#!"><img src={LinkedInLogo} alt="LinkedIn" /></a></li>
                            <li><a href="#!"><img src={XingLogo} alt="Xing" /></a></li>
                            <li><a href="#!"><img src={GithubLogo} alt="GitHub" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="introduction">
                    <h1>Felix Hebgen</h1>
                    <div className="underscore"></div>
                    <h2>Web-Developer & Designer</h2>
                    <p>... is a striving full-stack web developer in today's ever so fast growing web-app economy.</p>
                    <div className="actions">
                        <Link to={'/about'} className="button primary">About me</Link>
                        <Link to={'/hire'} className="button">Hire me</Link>
                    </div>
                    <div className="separator"></div>
                </div>
            </div>
            <div className="spotlight">
                <div className="heading container">
                    <div className="lead"></div>
                    <h1>Spotlight</h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="cards"
                >
                    {spotlightItems.map((item: any) =>
                        <SwiperSlide className="card">
                            <div className="illustration">
                                <img src={item.illustration} alt={item.title} />
                            </div>
                            <div className="description">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="actions">
                                    <Link to={item.buttonTarget} className="button primary">{item.buttonTitle}</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className="techstack container">
                <div className="heading">
                    <div className="lead"></div>
                    <h1>Tech-Stack</h1>
                </div>
                <div className="grid wrapper">
                    <div className="column large-column">
                        <div className="grid">
                            <div className="column full-column card">
                                <img src={Php} alt="php" />
                                <img src={PhpStack} alt="php" className="hidden" />
                            </div>
                        </div>
                        <div className="grid">
                            <div className="column big-column card">
                                <img src={Git} alt="Git"/>
                                <img src={GitStack} alt="Git" className="hidden"/>
                            </div>
                            <div className="column enormous-column card">
                                <img src={Html} alt="HTML"/>
                                <img src={HtmlStack} alt="HTML" className="hidden"/>
                            </div>
                        </div>
                        <div className="grid justify-end">
                            <div className="column enormous-column card">
                                <img src={Cc} alt="Creative Cloud"/>
                                <img src={CcStack} alt="Creative Cloud" className="hidden"/>
                            </div>
                        </div>
                    </div>
                    <div className="column huge-column">
                        <div className="grid">
                            <div className="column large-and-a-half-column card">
                                <img src={Java} alt="Java"/>
                                <img src={JavaStack} alt="Java" className="hidden"/>
                            </div>
                            <div className="column large-and-a-half-column card">
                                <img src={Database} alt="Database"/>
                                <img src={DatabaseStack} alt="Database" className="hidden"/>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="column full-column card">
                                <img src={Js} alt="JavaScript"/>
                                <img src={JsStack} alt="JavaScript" className="hidden"/>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="column enormous-column card">
                                <img src={Cloud} alt="Cloud"/>
                                <img src={CloudStack} alt="Cloud" className="hidden"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stories">
                <div className="heading container">
                    <div className="lead"></div>
                    <h1>Stories</h1>
                </div>
                <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    className="cards"
                >
                    {articleItems.slice(0, 4).map((article: any) =>
                        <SwiperSlide className="card">
                            <img src={article.image} />
                        </SwiperSlide>
                    )}
                </Swiper>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="cards second"
                >
                    {articleItems.map((article: any) =>
                        <SwiperSlide className="card">
                            <img src={article.image}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </main>
    );
}

export default Index;