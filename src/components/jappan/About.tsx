import profile from "@feb/assets/jappan/Profile.png";
import { Button } from "@feb/components/ui/Button";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBullhorn, faHandshakeAngle, faLayerGroup, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function About() {
	return (
		<div className="about p-5 flex flex-col items-center justify-center min-h-[theme(spacing.fit-screen)]" id="about">
			<h2 className="typography-heading-1 flex mb-10 items-center gap-2" id="aboutJappanTitle">
				About Jappan <FontAwesomeIcon icon={faRobot} />
			</h2>
			<div className="flex flex-col items-center justify-center gap-2 text-xl">
				<img className="rounded-full w-2/6" src={profile} alt="Avatar" />
				<p>A simple discord bot made to make someone's life easier</p>
				<p>Currently features Music Playback, Fun Commands, Leveling System & Moderation Tools</p>
				<p>Built using Discord.js, Node.js and hosted on Heroku</p>
				<div className="flex gap-1">
					<a
						href="https://discord.com/api/oauth2/authorize?client_id=732230135671029831&permissions=8&scope=applications.commands%20bot"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<Button className="gap-2">
							<FontAwesomeIcon icon={faDiscord} /> Invite Jappan
						</Button>
					</a>
					<a href="/Jappan/#features" className="ms-2 btn-outline-dark btn">
						<Button className="gap-2">
							<FontAwesomeIcon icon={faLayerGroup} /> Features
						</Button>
					</a>{" "}
					<a href="https://github.com/febkosq8/Jappan" className="ms-2 btn-outline-dark btn">
						<Button className="gap-2">
							<FontAwesomeIcon icon={faGithub} /> GitHub Repo
						</Button>
					</a>{" "}
					<a
						href="https://discord.gg/3mRbVCjvmz"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<Button className="gap-2">
							<FontAwesomeIcon icon={faBullhorn} /> Status Updates
						</Button>
					</a>{" "}
					<a
						href="https://discord.gg/rhk7STH5py"
						target="_blank"
						rel="noreferrer"
						className="ms-2 btn-outline-dark btn"
					>
						<Button className="gap-2">
							<FontAwesomeIcon icon={faHandshakeAngle} /> Support Server
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}
