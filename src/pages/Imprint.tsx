import React from 'react';
import { Helmet } from 'react-helmet';

const Imprint = () => {
	return (
		<main className="page">
			<Helmet>
				<meta name="title" content="Impressum — Felix Hebgen" />
				<title>Impressum — Felix Hebgen</title>
			</Helmet>
			<div className="page-heading">
				<div className="wrapper container">
					<h1>Impressum</h1>
					<div className="underscore"></div>
				</div>
				<div className="line"></div>
			</div>
			<div className="content container">
				<p>
					Erforderliche Informationen gemäß § 5 des deutschen Telemediengesetzes.
				</p>
				<p>
					Felix Hebgen<br/>
					Elisabethenstraße 68 A<br/>
					64283 Darmstadt
				</p>
				<p>
					Technischer Kontakt<br/>
					webmaster@felixhebgen.de
				</p>
				<h2>Verantwortlichkeit für den Inhalt</h2>
				<p>Der Inhalt unserer Website wurde mit größtmöglicher Sorgfalt erstellt. Wir können jedoch nicht
					garantieren, dass der Inhalt aktuell, zuverlässig oder vollständig ist. Gemäß den gesetzlichen
					Bestimmungen sind wir für den von uns selbst erstellten Inhalt verantwortlich. In diesem
					Zusammenhang möchten wir klarstellen, dass wir nicht für Informationen verantwortlich sind, die von
					Dritten bereitgestellt oder gesammelt wurden. Wir kontrollieren nicht die Informationen, die
					gesendet werden, noch verfolgen wir mögliche illegale Aktivitäten. Wenn illegale Aktivitäten
					festgestellt werden, folgen wir unserer Verpflichtung, den betreffenden Inhalt zu sperren oder zu
					löschen, gemäß den Paragraphen 8 bis 10 des Telemediengesetzes (TMG).</p>
				<h2>Verantwortung für Links</h2>
				<p>Die Verantwortung für den Inhalt von Links zu Drittanbietern (externer Inhalt) liegt bei den
					jeweiligen Website-Betreibern. Zum Zeitpunkt der Einbindung der Links auf unserer Website wurden in
					ihnen keine illegalen Aktivitäten festgestellt. Sobald wir von illegalen Aktivitäten oder Verstößen
					erfahren, werden wir den entsprechenden Link entfernen.</p>
				<h2>Urheberrecht</h2>
				<p>Meine Websites und deren Inhalt (Text, Fotos, Grafiken, Design) unterliegen dem deutschen
					Urheberrecht. Sofern nicht gesetzlich anders vereinbart, ist die Verwendung, Vervielfältigung, Kopie
					oder Modifikation des Inhalts urheberrechtlich geschützt. Ausnahmen müssen von den
					Website-Betreibern oder Rechteinhabern genehmigt und digital signiert werden. Einzelkopien sind nur
					für den privaten Gebrauch gestattet, sie dürfen nicht direkt oder indirekt für kommerzielle Zwecke
					verwendet werden. Die unbefugte Nutzung urheberrechtlich geschützten Materials wird nach § 106 des
					deutschen Urheberrechtsgesetzes bestraft.</p>
				<h2>Nutzungsbeschränkung</h2>
				<p>Wir übernehmen keine Haftung für Schäden, die durch die Nutzung oder Unmöglichkeit der Nutzung der
					Materialien auf dieser Website entstehen, auch wenn wir oder ein bevollmächtigter Vertreter über die
					Möglichkeit solcher Schäden informiert wurden, sei es mündlich oder schriftlich. Einige
					Rechtsordnungen gestatten keine Einschränkungen implizierter Garantien oder Haftungsbeschränkungen
					für zufällige Schäden, diese Einschränkungen gelten möglicherweise nicht für Sie.</p>
				<h2>Überarbeitungen und Fehlerberichtigungen</h2>
				<p>Die auf meiner Website erscheinenden Materialien können technische, typografische oder fotografische
					Fehler enthalten. Ich verspreche nicht, dass alle Materialien auf dieser Website korrekt,
					vollständig oder aktuell sind. Ich kann die auf seiner Website enthaltenen Materialien jederzeit
					ohne vorherige Ankündigung ändern. Ich verpflichte mich nicht zur Aktualisierung der
					Materialien.</p>
				<h2>Links</h2>
				<p>Ich habe nicht alle Websites überprüft, die mit dieser Website verlinkt sind, und bin nicht für den
					Inhalt einer solchen verlinkten Website verantwortlich. Die Anwesenheit eines Links bedeutet nicht,
					dass ich die Website befürworte. Die Nutzung aller verlinkten Websites erfolgt auf eigenes Risiko
					des Benutzers.</p>
				<h2>Änderungen der Nutzungsbedingungen für die Website</h2>
				<p>Ich kann diese Nutzungsbedingungen jederzeit ohne vorherige Ankündigung überarbeiten. Durch die
					Nutzung dieser Website erklären Sie sich mit der aktuellen Version dieser Nutzungsbedingungen
					einverstanden.</p></div>
		</main>
	);
}

export default Imprint;