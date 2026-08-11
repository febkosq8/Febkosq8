import Button from "@feb/components/ui/Button";
import Card from "@feb/components/ui/Card";
import {
	FaAmazon,
	FaBlogger,
	FaDiscord,
	FaGithub,
	FaHandHoldingDollar,
	FaInstagram,
	FaLinkedin,
	FaRegEnvelope,
	FaRegFilePdf,
	FaSteam,
	FaYoutube,
} from "react-icons/fa6";
export default function Socials() {
	return (
		<div className="socials flex min-h-fit-screen flex-col items-center justify-center p-5 pb-16" id="socials">
			<h2 className="typography-heading-2 mb-10 flex" id="socialsTitle">
				Socials
			</h2>
			<div className="flex w-full flex-col gap-3">
				<Card className="flex flex-col justify-between">
					<Card.Header>Know more</Card.Header>
					<Card.Content className="flex gap-2">
						<div className="flex flex-wrap gap-2">
							<a href="https://www.youtube.com/@Febkosq8DoesStuff" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FaYoutube className="h-5 w-5" /> YouTube
								</Button>
							</a>
							<a href="https://github.com/febkosq8" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FaGithub className="h-5 w-5" /> GitHub
								</Button>
							</a>
							<a href="https://www.linkedin.com/in/febkosq8" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FaLinkedin className="h-5 w-5" /> LinkedIn
								</Button>
							</a>
							{document.location.href.includes("/cv") && (
								<a
									href="https://drive.google.com/file/d/1zwQyTgVGklY2cdqoIK_QhESIPULzu_4A/view?usp=share_link"
									target="_blank"
									rel="noreferrer"
								>
									<Button className="gap-2">
										<FaRegFilePdf className="h-5 w-5" /> CV
									</Button>
								</a>
							)}
							<a href="https://blog.febkosq8.me" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FaBlogger className="h-5 w-5" /> Blog
								</Button>
							</a>
						</div>
					</Card.Content>
				</Card>
				<Card className="flex flex-col justify-between">
					<Card.Header>Contact me through</Card.Header>
					<Card.Content className="flex gap-2">
						<div className="flex flex-wrap gap-2">
							<a href="mailto:contact@febkosq8.me" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FaRegEnvelope className="h-5 w-5" /> contact@febkosq8.me
								</Button>
							</a>
							<a href="https://discord.com/users/407819516513484801" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FaDiscord className="h-5 w-5" /> Febkosq8
								</Button>
							</a>
							<a href="https://www.instagram.com/febkosq8/" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FaInstagram className="h-5 w-5" /> Febkosq8
								</Button>
							</a>
							<a href="https://steamcommunity.com/id/febkosq8" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FaSteam className="h-5 w-5" /> Febkosq8
								</Button>
							</a>
						</div>
					</Card.Content>
				</Card>
				<Card className="flex flex-col justify-between">
					<Card.Header>Support me</Card.Header>
					<Card.Content className="flex gap-2">
						<div className="flex flex-wrap gap-2">
							<a href="https://www.buymeacoffee.com/febkosq8" target="_blank" rel="noreferrer">
								<Button className="gap-2">
									<FaHandHoldingDollar className="h-5 w-5" /> Buy me a Coffee
								</Button>
							</a>
							<a
								href="https://www.amazon.in/?&_encoding=UTF8&tag=febkosq8-21&linkCode=ur2&linkId=6ca0201a93375f6dc35cf60102034cb3&camp=3638&creative=24630ffiliate"
								target="_blank"
								rel="noreferrer"
							>
								<Button className="gap-2">
									<FaAmazon className="h-5 w-5" /> Amazon.in Affiliate
								</Button>
							</a>
						</div>
					</Card.Content>
				</Card>
			</div>
		</div>
	);
}
