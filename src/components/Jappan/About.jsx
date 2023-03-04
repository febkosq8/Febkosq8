import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRobot, faLayerGroup, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import profile from "../../assets/Jappan/ProfIle.png";
export default function About() {
	return (
		<section align="left" className="section px-2" id="about">
			<h2 className="display-1" align="center">
				About Jappan <FontAwesomeIcon icon={faRobot} color="black" />
			</h2>

			<img className="profileImg" src={profile} alt="Avatar"></img>
			<br />
			<p>A simple discord bot made to make someone's life easier</p>
			<p>Currently features Music Playback, Fun Commands, Leveling System & Moderation Tools</p>
			<p>Built using Discord.js, Node.js and hosted on Heroku.</p>
			<div className="d-grid gap-2 d-md-block">
				<a
					href="https://discord.com/api/oauth2/authorize?client_id=732230135671029831&permissions=8&scope=applications.commands%20bot"
					target="_blank"
					rel="noreferrer"
					className="ms-2 btn-outline-dark btn"
				>
					<FontAwesomeIcon icon={faDiscord} /> Invite Jappan
				</a>
				<a href="/Jappan/#features" className="ms-2 btn-outline-dark btn">
					<FontAwesomeIcon icon={faLayerGroup} /> Features
				</a>{" "}
				<a href="https://github.com/febkosq8/Jappan" className="ms-2 btn-outline-dark btn">
					<FontAwesomeIcon icon={faGithub} /> GitHub Repo
				</a>{" "}
				<a href="https://discord.gg/3mRbVCjvmz" target="_blank" rel="noreferrer" className="ms-2 btn-outline-dark btn">
					<FontAwesomeIcon icon={faBullhorn} /> Status Updates
				</a>
			</div>
		</section>
	);
}
