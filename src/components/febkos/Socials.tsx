import { Button } from "@feb/components/ui/Button";
import Card from "@feb/components/ui/Card";
import {
	faAmazon,
	faBlogger,
	faDiscord,
	faGithub,
	faInstagram,
	faLinkedin,
	faSteam,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Socials() {
	return (
		<div
			className="socials p-5 flex flex-col items-center justify-center min-h-[theme(spacing.fit-screen)]"
			id="socials"
		>
			<h2 className="typography-heading-2 flex mb-10" id="socialsTitle">
				Socials
			</h2>
			<div className="grid gap-3 grid-cols-4 grid-rows-8">
				<Card className="col-span-4 row-span-2 justify-between flex flex-col">
					<Card.Header>Know more</Card.Header>
					<Card.Content className="flex gap-2">
						<div className="flex gap-2">
							<a href="https://www.youtube.com/@Febkosq8DoesStuff" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FontAwesomeIcon icon={faYoutube} className="h-5 w-5" /> YouTube
								</Button>
							</a>
							<a href="https://github.com/febkosq8" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FontAwesomeIcon icon={faGithub} className="h-5 w-5" /> GitHub
								</Button>
							</a>
							<a href="https://www.linkedin.com/in/febkosq8" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" /> LinkedIn
								</Button>
							</a>
							<a
								href="https://drive.google.com/file/d/1zwQyTgVGklY2cdqoIK_QhESIPULzu_4A/view?usp=share_link"
								target="_blank"
								rel="noreferrer"
							>
								<Button className="gap-2">
									<FontAwesomeIcon icon={faFilePdf} className="h-5 w-5" /> CV
								</Button>
							</a>
							<a href="https://blog.febkosq8.me" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FontAwesomeIcon icon={faBlogger} className="h-5 w-5" /> Blog
								</Button>
							</a>
						</div>
					</Card.Content>
				</Card>
				<Card className="col-span-4 row-span-2 justify-between flex flex-col">
					<Card.Header>Contact me through</Card.Header>
					<Card.Content className="flex gap-2">
						<div className="flex gap-2">
							<a href="mailto:febkosq8@yahoo.com" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" /> febkosq8@yahoo.com
								</Button>
							</a>
							<a href="https://discord.com/users/407819516513484801" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FontAwesomeIcon icon={faDiscord} className="h-5 w-5" /> Febkosq8
								</Button>
							</a>
							<a href="https://www.instagram.com/febkosq8/" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FontAwesomeIcon icon={faInstagram} className="h-5 w-5" /> Febkosq8
								</Button>
							</a>
							<a href="https://steamcommunity.com/id/febkosq8" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FontAwesomeIcon icon={faSteam} className="h-5 w-5" /> Febkosq8
								</Button>
							</a>
						</div>
					</Card.Content>
				</Card>
				<Card className="col-span-4 row-span-2 justify-between flex flex-col">
					<Card.Header>Support me</Card.Header>
					<Card.Content className="flex gap-2">
						<div className="flex gap-2">
							<a href="https://www.buymeacoffee.com/febkosq8" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FontAwesomeIcon icon={faHandHoldingDollar} className="h-5 w-5" /> Buy me a Coffee
								</Button>
							</a>
							<a
								href="https://www.amazon.in/?&_encoding=UTF8&tag=febkosq8-21&linkCode=ur2&linkId=6ca0201a93375f6dc35cf60102034cb3&camp=3638&creative=24630ffiliate"
								target="_blank"
								rel="noreferrer"
							>
								<Button className="gap-2">
									<FontAwesomeIcon icon={faAmazon} className="h-5 w-5" /> Amazon.in Affiliate
								</Button>
							</a>
						</div>
					</Card.Content>
				</Card>
			</div>
		</div>
	);
}
