import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faBlogger,
	faDiscord,
	faLinkedin,
	faAmazon,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSquareShareNodes, faFilePdf, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
export default function Socials() {
	return (
		<section align="left" className="section px-2" id="socials">
			<h2 className="display-1 fw-bold" align="center">
				Socials <FontAwesomeIcon icon={faSquareShareNodes} color="black" />
			</h2>

			<h4>
				<div className="blockquote">
					Know more
					<br />
					<a
						href="https://www.youtube.com/@Febkosq8DoesStuff"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<FontAwesomeIcon icon={faYoutube} /> YouTube
					</a>
					<a href="https://github.com/febkosq8" target="_blank" rel="noreferrer" className="ms-2 btn-outline-dark btn">
						<FontAwesomeIcon icon={faGithub} /> GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/febkosq8/"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<FontAwesomeIcon icon={faLinkedin} /> LinkedIn
					</a>
					<a
						href="https://drive.google.com/file/d/1zwQyTgVGklY2cdqoIK_QhESIPULzu_4A/view?usp=share_link"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<FontAwesomeIcon icon={faFilePdf} /> CV
					</a>
					<a href="http://www.febkosq8.tk/" target="_blank" rel="noreferrer" className="ms-2 btn-outline-dark btn">
						<FontAwesomeIcon icon={faBlogger} /> Blog
					</a>
				</div>
				<div className="blockquote">
					Contact me through <br />
					<a href="mailto:febkosq8@yahoo.com" target="_blank" rel="noreferrer" className="ms-2 btn-outline-dark btn">
						<FontAwesomeIcon icon={faEnvelope} /> febkosq8@yahoo.com
					</a>
					<a
						href="https://discord.gg/rhk7STH5py"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<FontAwesomeIcon icon={faDiscord} /> Febkosq8#8685
					</a>
					<a
						href="https://www.instagram.com/febkosq8/"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<FontAwesomeIcon icon={faInstagram} /> Febkosq8
					</a>
				</div>
				<div className="blockquote">
					Support me <br />
					<a
						href="https://www.buymeacoffee.com/febkosq8"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<FontAwesomeIcon icon={faHandHoldingDollar} /> Buy me a Coffee
					</a>
					<a
						href="https://www.amazon.in/?&_encoding=UTF8&tag=febkosq8-21&linkCode=ur2&linkId=6ca0201a93375f6dc35cf60102034cb3&camp=3638&creative=24630ffiliate"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<FontAwesomeIcon icon={faAmazon} /> Amazon.in Affiliate
					</a>
				</div>
			</h4>
		</section>
	);
}
