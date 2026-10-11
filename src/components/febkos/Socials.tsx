import Card from "@feb/components/ui/Card";
import TypingAnimation from "@feb/components/ui/TypingAnimation";
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
	FaRocket,
	FaShare,
	FaSteam,
	FaYoutube,
} from "react-icons/fa6";
const socialsHeading = ["Let's connect"];
export default function Socials() {
	const groups = [
		{
			title: "Explore",
			description: "Projects, writing, and things I make.",
			icon: <FaRocket />,
			links: [
				{ label: "YouTube", href: "https://www.youtube.com/@Febkosq8DoesStuff", icon: <FaYoutube /> },
				{ label: "GitHub", href: "https://github.com/febkosq8", icon: <FaGithub /> },
				...(document.location.href.includes("/cv")
					? [
							{
								label: "CV",
								href: "https://drive.google.com/file/d/1zwQyTgVGklY2cdqoIK_QhESIPULzu_4A/view?usp=share_link",
								icon: <FaRegFilePdf />,
							},
						]
					: []),
				{ label: "Blog", href: "https://blog.febkosq8.me", icon: <FaBlogger /> },
			],
		},
		{
			title: "Contact",
			description: "Reach me wherever you are most comfortable.",
			icon: <FaRegEnvelope />,
			links: [
				{ label: "contact@febkosq8.me", href: "mailto:contact@febkosq8.me", icon: <FaRegEnvelope /> },
				{ label: "Discord", href: "https://discord.com/users/407819516513484801", icon: <FaDiscord /> },
				{ label: "LinkedIn", href: "https://www.linkedin.com/in/febkosq8", icon: <FaLinkedin /> },
				{ label: "Instagram", href: "https://www.instagram.com/febkosq8/", icon: <FaInstagram /> },
				{ label: "Steam", href: "https://steamcommunity.com/id/febkosq8", icon: <FaSteam /> },
			],
		},
		{
			title: "Support",
			description: "Help keep the experiments moving.",
			icon: <FaHandHoldingDollar />,
			links: [
				{ label: "Buy me a coffee", href: "https://www.buymeacoffee.com/febkosq8", icon: <FaHandHoldingDollar /> },
				{
					label: "Amazon.in Affiliate",
					href: "https://www.amazon.in/?&_encoding=UTF8&tag=febkosq8-21&linkCode=ur2&linkId=6ca0201a93375f6dc35cf60102034cb3&camp=3638&creative=24630ffiliate",
					icon: <FaAmazon />,
				},
			],
		},
	];

	return (
		<div className="socials flex w-full min-h-fit-screen justify-center p-5 pb-16" id="socials">
			<div className="w-full max-w-6xl py-10">
				<div className="flex flex-col gap-5 border-b border-border pb-8">
					<div>
						<p className="text-sm font-semibold text-primary uppercase lg:text-base">
							<a
								href="#socials"
								className="flex items-center gap-2 underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-hidden"
							>
								Socials <FaShare />
							</a>
						</p>
						<h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold lg:text-5xl" id="socialsTitle">
							<TypingAnimation
								strings={socialsHeading}
								placeholder="Let's connect"
								perTick={{ update: 2, unit: "character" }}
							/>
						</h2>
					</div>
					<p className="max-w-3xl text-base leading-7 text-foreground/70 sm:text-lg lg:text-xl lg:leading-8">
						Find me online, get in touch, or support the work behind these projects.
					</p>
				</div>

				<div className="mt-8 flex flex-col gap-3">
					{groups.map((group) => (
						<Card key={group.title} hoverLift={false} className="flex flex-col">
							<Card.Header className="flex-row items-center gap-2">
								<span className="text-primary" aria-hidden="true">
									{group.icon}
								</span>
								{group.title}
							</Card.Header>
							<Card.Content className="flex flex-col gap-3">
								<p className="text-sm leading-6 text-foreground/60">{group.description}</p>
								<div className="flex flex-wrap gap-2">
									{group.links.map((link) => (
										<a
											key={link.label}
											href={link.href}
											target={link.href.startsWith("mailto:") ? undefined : "_blank"}
											rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
											className="group/button inline-flex min-h-10 items-center gap-2 rounded-md border border-foreground/25 bg-card px-3 py-2 text-sm font-medium transition-[border-color,background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden"
										>
											<span
												className="text-base text-primary transition-colors group-hover/button:text-primary-foreground"
												aria-hidden="true"
											>
												{link.icon}
											</span>
											{link.label}
										</a>
									))}
								</div>
							</Card.Content>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
