import React from 'react';
import { Helmet } from 'react-helmet';

const Imprint = () => {
	return (
		<main className="page">
			<Helmet>
				<meta name="title" content="Imprint — Felix Hebgen" />
				<title>Imprint — Felix Hebgen</title>
			</Helmet>
			<div className="page-heading">
				<div className="wrapper container">
					<h1>Imprint</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="content container">
				<p>
					Required information by § 5 German Telemediengesetz.<br />
					This website is administered in Darmstadt, Germany.
				</p>
				<p>
					Felix Hebgen<br />
					Elisabethenstraße 68 A<br />
					64283 Darmstadt
				</p>
				<p>
					Technical Contact<br />
					webmaster@felixhebgen.de
				</p>
				<h2>Accountability for Content</h2>
				<p>The content of our website was created with the utmost care. However, we cannot guarantee that the content is current, reliable or complete. In accordance with the statutory provisions, we are responsible for the content we have created ourselves. In this context, we would like to clarify that we are not responsible for information provided by or collected by third parties. We do not control the information that is sent, nor do we prosecute for possible illegal activities. If illegal activities are detected, we follow our obligation to block or delete the relevant content, in accordance with paragraphs 8 to 10 of the Telemedia Acts (TMG).</p>
				<h2>Responsibility for Links</h2>
				<p>Responsibility for the content of third-party links (external content) lies with the respective website operators. At the time the links used were included on our website, no illegal activities were found in them. As soon as we become aware of illegal activities or violations, we will remove the relevant link.</p>
				<h2>Copyright</h2>
				<p>My websites and their content (text, photos, graphics, design) are subject to German copyright law. Unless otherwise agreed by law, the use, reproduction, copy or modification of the content is subject to copyright. Exceptions must be approved and digitally signed by the website operators or rights holders. Individual copies are only permitted for private use, they may not be used directly or indirectly for commercial purposes. Unauthorized use of copyrighted material is punishable by § 106 German copyright law.</p>
				<h2>Usage Limitation</h2>
				<p>I will not be hold accountable for any damages that will arise with the use or inability to use the materials on this website, even if I or an authorized representative has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
				<h2>Revisions and Errata</h2>
				<p>The materials appearing on my website may include technical, typographical, or photographic errors. I will not promise that any of the materials in this website are accurate, complete, or current. I may change the materials contained on its website at any time without notice. I do not make any commitment to update the materials.</p>
				<h2>Links</h2>
				<p>I have not reviewed all of the sites linked to this website and am not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by me of the site. The use of any linked websites is at the user’s own risk.</p>
				<h2>Site Terms of Use Modifications</h2>
				<p>I may revise these Terms of Use at any time without prior notice. By using this website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
			</div>
		</main>
	);
}

export default Imprint;