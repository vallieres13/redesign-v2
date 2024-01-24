import React, {useEffect, useRef, useState} from 'react';
import {renderToString} from 'react-dom/server'

/* Components */
import Offer from '../components/Offer';

/* Assets */
import UserIcon from '../assets/icons/user.svg';
import ClockIcon from '../assets/icons/clock.svg';
import ShareIcon from '../assets/icons/share.svg';

/* Social Share */
import {
	EmailIcon,
	EmailShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	RedditIcon,
	RedditShareButton,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
	XIcon
} from 'react-share';

/* Misc */
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Request from '../services/Request';

const Article = () => {

	const navigate = useNavigate();
	const params = useParams();
	const articleSlug = params.slug as string;
	const application = 'Felix Hebgen';

	const [ endpointCalled, setEndpointCalled ] = useState(false);
	const [ article, setArticle ] = useState({
		title: null,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+PT5638ACY8D2iQaH6oAAAAASUVORK5CYII=',
		author: 'Felix Hebgen',
		readTime: 0,
		excerpt: null,
		date: null,
		content: null,
		tags: [],
		skeleton: true
	} as any);

	const content = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		gsap.fromTo('.article .image', {
			y: 15,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .3
		});

		gsap.fromTo('.article .container-small', {
			y: 15,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .3,
			delay: .15
		});
	}, { scope: content });

	const dropdownShare = useRef<HTMLUListElement>(null);
	const handleShare = () => {
		if(dropdownShare.current) dropdownShare.current.classList.toggle('display');
	}

	const loadArticle = async () => {
		await Request.get('/posts?slug=' + articleSlug)
			.then(response => response.json())
			.then(async (data) => {
				if(data.length === 0) {
					navigate('/stories');
					return;
				}

				const result = data[0];
				let post: any = {};

				post.title = result.title.rendered;
				post.image = result.jetpack_featured_media_url;
				post.excerpt = result.excerpt.rendered;
				post.readTime = result.read_time;
				post.date = formatDate(result.date);
				post.author = 'Felix Hebgen';
				post.tags = result.tag_names;
				post.content = replaceOfferShortcodes(result.content.rendered);
				post.skeleton = false;

				setArticle(post);
			});
	};

	const replaceOfferShortcodes = (content: string): string => {
		let shortcodes = content.match(/\[offer type=&#8221;.*?&#8221;]/g);
		if(shortcodes) {
			shortcodes.forEach((shortcode: string) => {
				const params = [ 'type', 'promo', 'reverse', 'splash', 'cards', 'subtitle', 'small', 'button', 'buttonUrl', 'background' ];
				const parsed: any = {};
				params.forEach(param => {
					let match = shortcode.match(new RegExp(`${param}=&#8221;(.*?)&#8221;`));
					parsed[param] = match ? match[1] : null;
				});
				parsed.promo = parsed.promo !== 'false';
				parsed.reverse = parsed.reverse === 'true';

				content = content.replaceAll(shortcode, renderToString(<Offer type={parsed.type} promo={parsed.promo} reverse={parsed.reverse} splash={parsed.splash} cards={parsed.cards} small={parsed.small} subtitle={parsed.subtitle} button={parsed.button} buttonUrl={parsed.buttonUrl} background={parsed.background} />));
			});
		}
		return content;
	}

	useEffect(() => {
		if(!sessionStorage.getItem('article+' + hashCode(articleSlug))) {
			loadArticle().then(() => setEndpointCalled(true));
		} else {
			setArticle(JSON.parse(sessionStorage.getItem('article+' + hashCode(articleSlug))!));
			setEndpointCalled(true);
		}
	}, []);

	/**
	 * Returns a hash code from a string
	 * @param  {String} str The string to hash.
	 * @return {Number}    A 32bit integer
	 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
	 */
	const hashCode = (str: string): number => {
		let hash = 0;
		for(let i = 0, len = str.length; i < len; i++) {
			let chr = str.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	}

	useEffect(() => {
		if(!endpointCalled) return;

		gsap.fromTo('.article .image img', {
			opacity: 0
		}, {
			opacity: 1,
			duration: .15
		});
	}, [endpointCalled]);

	useEffect(() => {
		if(!article) return;
		if(sessionStorage.getItem('article+' + hashCode(articleSlug))) return;
		if(article.skeleton) return;
		sessionStorage.setItem('article+' + hashCode(articleSlug), JSON.stringify(article));
	}, [article]);

	const getMonthName = (month: number) => {
		const date = new Date();
		date.setMonth(month);
		return date.toLocaleString('en-GB', { month: 'long' });
	}

	const formatDate = (date: string) => {
		let newDate = new Date(date);
		return newDate.getDate() + '. ' + getMonthName(newDate.getMonth()) + ' ' + newDate.getFullYear();
	}

	const decodeEntities = (() => {
		const element = document.createElement('div');

		return (str: string) => {
			if(str) {
				// strip script/html tags
				str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
				str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
				element.innerHTML = str;
				str = element.textContent!;
				element.textContent = '';
			}
			return str;
		};
	})();

	return (
		<article className="article" ref={content}>
			<Helmet>
				<meta name="title" content={(decodeEntities(article.title) ?? 'Loading ...') + ' — Felix Hebgen'} />
				<title>{decodeEntities(article.title) ?? 'Loading ...'} — Felix Hebgen</title>
				<meta name="description" content={decodeEntities(article.excerpt?.replace(/<\/?[^>]+(>|$)/g, ''))} />
				<meta name="keywords" content={article.tags.join(', ').toLowerCase() + ", felix hebgen, portfolio, web developer, designer, web design, darmstadt web developer, darmstadt web design, höchst im odenwald, hessen, job profile, cv, felix hebgen web design, felix hebgen design"} />
				<meta name="revised" content={article.date} />

				<meta property="og:title" content={(decodeEntities(article.title) ?? 'Loading ...') + ' — Felix Hebgen'} />
				<meta property="og:description" content={decodeEntities(article.excerpt?.replace(/<\/?[^>]+(>|$)/g, ''))} />
				<meta property="og:type" content="article" />
				<meta property="og:image" content={article.image} />
				<meta property="og:url" content={window.location.href} />
				<meta property="og:site_name" content="Felix Hebgen" />
			</Helmet>
			<div className="image container-wide">
				<img src={article.image} alt="Article Image"/>
			</div>
			<div className="container-small">
				{article.title ? <h1 dangerouslySetInnerHTML={{__html: article.title}}></h1> : <SkeletonTitle /> }
				<ul className="details">
					<li><Link to={'/about'}><img src={UserIcon} alt="User" /> {article.author}</Link></li>
					<li><img src={ClockIcon} alt="Clock" /> {article.readTime} Minutes read time</li>
				</ul>
				<ul className="details right">
					<li>
						<a onClick={handleShare}><img src={ShareIcon} alt="Share" /> Share</a>
						<ul className="dropdown" ref={dropdownShare}>
							<li><LinkedinShareButton url={window.location.href} title={article.title} summary={article.excerpt} source={application}><LinkedinIcon round={true} size={20} /> LinkedIn</LinkedinShareButton></li>
							<li><WhatsappShareButton url={window.location.href} title={article.title}><WhatsappIcon round={true} size={20} /> WhatsApp</WhatsappShareButton></li>
							<li><RedditShareButton url={window.location.href} title={article.title}><RedditIcon round={true} size={20} /> Reddit</RedditShareButton></li>
							<li><TwitterShareButton url={window.location.href} title={article.title}><XIcon round={true} size={20} /> X (Twitter)</TwitterShareButton></li>
							<li><EmailShareButton url={window.location.href} title={'Check out "' + article.title + '"'}><EmailIcon round={true} size={20} /> as E-Mail</EmailShareButton></li>
						</ul>
					</li>
				</ul>
				{article.content ? <div className="content" dangerouslySetInnerHTML={{__html: article.content}}></div> : <SkeletonBlock/> }
			</div>
		</article>
	);
}

export default Article;

const SkeletonTitle = () => {
	return (
		<>
			<span className="skeleton-text large"></span>
			<span className="skeleton-text large quarter-width"></span>
		</>
	);
}

const SkeletonBlock = () => {
	return (
		<div className="content">
			<span className="skeleton-text small push-top"></span>
			<span className="skeleton-text small huge-width"></span>
			<span className="skeleton-text small large-width"></span>
			<span className="skeleton-text small huge-width"></span>
			<span className="skeleton-text small big-width push-bottom"></span>
		</div>
	);
}