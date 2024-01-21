import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

/* Components */
import Connect from './../components/Connect';

/* Assets */
import FelixTransparent from '../assets/images/promos/felix-transparent.png?format=avif';
import GithubLogo from '../assets/icons/github.svg';
import LinkedInLogo from '../assets/icons/linkedin.svg';
import XingLogo from '../assets/icons/xing.svg';

import DesignSpotlight from '../assets/images/spotlight/design.png?format=avif';
import MarketingSpotlight from '../assets/images/spotlight/marketing.png?format=avif';
import CodeSpotlight from '../assets/images/spotlight/code.png?format=avif';
import AiSpotlight from '../assets/images/spotlight/ai.png?format=avif';

import UserIcon from '../assets/icons/user.svg';
import ClockIcon from '../assets/icons/clock.svg';
import ShareIcon from '../assets/icons/share.svg';

/* Misc */
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { SplitText } from "../services/SplitText";
import TechStack from "../components/TechStack";
import Heading from "../components/Heading";
import GermanyEmoji from "../assets/emojis/germany.png?format=avif";
import Request from "../services/Request";

const Index = () => {

    /* Register ScrollTrigger */
    gsap.registerPlugin(ScrollTrigger);

    const spotlightItems = [
        {
            illustration: DesignSpotlight,
            title: 'Interaction Design',
            description: 'Crafting intuitive and seamless user experiences through thoughtful interaction design is my passion and expertise.',
            buttonTitle: 'Learn more',
            buttonTarget: '/hire'
        },
        {
            illustration: MarketingSpotlight,
            title: 'Online Marketing',
            description: 'Driving digital success through strategic marketing initiatives to maximise reach and engagement.',
            buttonTitle: 'Learn more',
            buttonTarget: '/hire'
        },
        {
            illustration: CodeSpotlight,
            title: 'Web & App Development',
            description: 'Empowering digital experiences through dynamic web development and impactful solutions in the realm of the web.',
            buttonTitle: 'Learn more',
            buttonTarget: '/hire'
        },
        {
            illustration: AiSpotlight,
            title: 'Artificial Intelligence',
            description: 'Harnessing the power of AI, I innovate and implement solutions that redefine possibilities and elevate user experiences.',
            buttonTitle: 'Learn more',
            buttonTarget: '/hire'
        }
    ];

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
            "--heightPseudo": "675px",
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
                    <h2>Web-Developer & Designer</h2>
                    <p>... is a <span className="emoji"><img src={GermanyEmoji} alt="Germany"/></span> German full-stack
                        web developer and designer in today's ever so fast growing web-app economy.</p>
                    <div className="actions">
                        <Link to={'/about'} className="button primary">About me</Link>
                        <Link to={'/hire'} className="button">Hire me</Link>
                    </div>
                    <div className="separator"></div>
                </div>
            </div>
            <TechStack />
            <div className="spotlight">
                <Heading container={true}>Spotlight</Heading>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true
                    }}
                    pagination={{clickable: true}}
                    modules={[Autoplay, Pagination]}
                    className="cards"
                >
                    {spotlightItems.map((item: any, index: number) =>
                        <SwiperSlide className="card" key={index}>
                            <div className="illustration">
                                <img src={item.illustration} alt={item.title}/>
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
            <div className="stories" ref={stories}>
                <Heading container={true}>Stories</Heading>
                <div className="cards container">
                        <div className="card-side">
                            {articleItems.slice(0, 2).map((article: any, index: number) =>
                                <Link to={'/article/' + article.slug} key={index}>
                                    <div className="card">
                                        <img src={article.thumbnail} alt="Article" />
                                        <div className="overlay">
                                            {article.title ? <h2 dangerouslySetInnerHTML={{__html: article.title}}></h2> : <></>}
                                            <ul className="details">
                                                <li><img src={UserIcon} alt="User"/> {article.author ?? ''}</li>
                                                <li><img src={ClockIcon} alt="Clock"/> {article.readTime} Minutes</li>
                                            </ul>
                                            <ul className="details right">
                                                <li><img src={ShareIcon} alt="Share"/> Share</li>
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
                                        <img src={article.thumbnail} alt="Article" />
                                        <div className="overlay">
                                            {article.title ? <h2 dangerouslySetInnerHTML={{__html: article.title}}></h2> : <></>}
                                            <ul className="details">
                                                <li><img src={UserIcon} alt="User"/> {article.author ?? ''}</li>
                                                <li><img src={ClockIcon} alt="Clock"/> {article.readTime} Minutes</li>
                                            </ul>
                                            <ul className="details right">
                                                <li><img src={ShareIcon} alt="Share"/> Share</li>
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