import React, { useEffect, useRef, useState } from 'react';

/* Components */
import Connect from './../components/Connect';
import Spotlight from './../components/Spotlight';

/* Assets */
import FelixTransparent from '../assets/images/promos/felix-transparent.png?format=avif';
import GithubLogo from '../assets/icons/github.svg';
import LinkedInLogo from '../assets/icons/linkedin.svg';
import XingLogo from '../assets/icons/xing.svg';

import UserIcon from '../assets/icons/user.svg';
import ClockIcon from '../assets/icons/clock.svg';
import ShareIcon from '../assets/icons/share.svg';

/* Misc */
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// import required modules
import { SplitText } from "../services/SplitText";
import TechStack from "../components/TechStack";
import Heading from "../components/Heading";
import GermanyEmoji from "../assets/emojis/germany.png?format=avif";
import Request from "../services/Request";

const Index = () => {

    /* Register ScrollTrigger */
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const storyCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.stories .card');
        storyCards.forEach((card: HTMLDivElement) => {
            VanillaTilt.init(card, {
                reverse: true,
                max: 3,
                scale: .98,
                perspective: 2000,
                speed: 2000
            });
        });
    }, []);

    let initDelay = 0;
    const overlay = document.querySelector('.initialLoadOverlay') as HTMLDivElement|null;
    if(overlay && overlay.style.visibility !== 'hidden') initDelay = .5;

    const introduction = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const pseudo = document.querySelector('.introduction') as HTMLElement;
        gsap.to(pseudo,{
            "--heightPseudo": "755px",
            duration: 1,
            delay: initDelay
        });

        gsap.fromTo('.separator', {
            x: 1200,
        }, {
            x: 0,
            duration: 1.5,
            delay: .24 + initDelay
        });

        const headingPromo = document.querySelector('.introduction h1') as HTMLElement;
        const split = new SplitText({}).split(headingPromo);
        gsap.fromTo(split.words, {
            x: -30,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: .2,
            stagger: .075,
            delay: initDelay
        });

        gsap.fromTo('.introduction .underscore', {
            x: -30,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: .2,
            delay: .15 + initDelay
        });

        gsap.fromTo('.introduction h2', {
            x: -30,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: .2,
            delay: .3 + initDelay
        });

        gsap.fromTo('.introduction p', {
            x: -30,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: .2,
            delay: .35 + initDelay
        });

        gsap.fromTo('.introduction .actions', {
            x: -30,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: .2,
            delay: .4 + initDelay
        });
    }, { scope: introduction });

    const stories = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.fromTo('.card', {
            marginTop: 140
        },{
            scrollTrigger: {
                trigger: '.cards',
                start: 'top bottom',
                end: '+=800',
                scrub: 1
            },
            marginTop: 0,
            stagger: .1
        });

        gsap.to(stories, {
            scrollTrigger: {
                trigger: stories.current!,
                start: '-=600px bottom',
                onEnter: loadPosts,
                once: true
            }
        });
    }, { scope: stories });

    const [ articleItems, setArticleItems ] = useState([...Array(5)].fill({
        title: null,
        thumbnail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+PT5638ACY8D2iQaH6oAAAAASUVORK5CYII=',
        author: 'Felix Hebgen',
        slug: null,
        readTime: 0
    }) as any);

    const loadPosts = () => {
        Request.get('/posts?per_page=5')
            .then(response => response.json())
            .then(async (data) => {
                let articles: any = [];
                data.forEach((post: any) => {
                    let article: any = {};

                    article.title = post.title.rendered;
                    article.thumbnail = post.jetpack_featured_media_url_thumbnail;
                    article.readTime = post.read_time;
                    article.slug = post.slug;
                    article.author = 'Felix Hebgen';

                    articles.push(article);
                });

                setArticleItems(articles);
            });
    };

    return (
        <main className="home">
            <div className="promo">
                <div className="profile">
                    <div className="picture">
                        <img src={FelixTransparent} alt="Felix Hebgen" />
                    </div>
                    <div className="socials">
                        <ul>
                            <li><Link to={'https://www.linkedin.com/in/felixhebgen/'}><img src={LinkedInLogo} alt="LinkedIn" /></Link></li>
                            <li><Link to={'https://www.xing.com/profile/Felix_Hebgen'}><img src={XingLogo} alt="Xing" /></Link></li>
                            <li><Link to={'https://github.com/vallieres13'}><img src={GithubLogo} alt="GitHub" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="introduction" ref={introduction}>
                    <h1>Felix Hebgen</h1>
                    <div className="underscore"></div>
                    <h2>Web-Entwickler & Designer</h2>
                    <p>... ist ein <span className="emoji"><img src={GermanyEmoji} alt="Deutschland"/></span> Deutscher Full-Stack
                        Entwickler & Designer in der heutzutage rapide wachsenden Internet-Wirtschaft.</p>
                    <div className="actions">
                        <Link to={'/about'} className="button primary">Über mich</Link>
                        <Link to={'/profile'} className="button">Profil</Link>
                    </div>
                    <div className="separator"></div>
                </div>
            </div>
            <TechStack />
            <Spotlight />
            <div className="stories" ref={stories}>
                <Heading container={true}>Stories</Heading>
                <div className="cards container">
                        <div className="card-side">
                            {articleItems.slice(0, 2).map((article: any, index: number) =>
                                <Link to={'/article/' + article.slug} key={index}>
                                    <div className="card">
                                        <img src={article.thumbnail} alt="Artikel" />
                                        <div className="overlay">
                                            {article.title ? <h2 dangerouslySetInnerHTML={{__html: article.title}}></h2> : <></>}
                                            <ul className="details">
                                                <li><img src={UserIcon} alt="Autor"/> {article.author ?? ''}</li>
                                                <li><img src={ClockIcon} alt="Lesezeit"/> {article.readTime} Minuten</li>
                                            </ul>
                                            <ul className="details right">
                                                <li><img src={ShareIcon} alt="Teilen"/> Teilen</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                        <div className="card-side right">
                            {articleItems.slice(2, 5).map((article: any, index: number) =>
                                <Link to={'/article/' + article.slug} key={index}>
                                    <div className="card">
                                        <img src={article.thumbnail} alt="Artikel" />
                                        <div className="overlay">
                                            {article.title ? <h2 dangerouslySetInnerHTML={{__html: article.title}}></h2> : <></>}
                                            <ul className="details">
                                                <li><img src={UserIcon} alt="Autor"/> {article.author ?? ''}</li>
                                                <li><img src={ClockIcon} alt="Lesezeit"/> {article.readTime} Minuten</li>
                                            </ul>
                                            <ul className="details right">
                                                <li><img src={ShareIcon} alt="Teilen"/> Teilen</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                </div>
            </div>
            <Connect/>
        </main>
    );
}

export default Index;