import { Button, Card, TypingAnimation } from "@febkosq8/arc";
import ButtonLink from "@feb/components/ui/ButtonLink";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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
	FaArrowUpRightFromSquare,
	FaYoutube,
} from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import useActiveSectionTitle from "@feb/components/febkos/useActiveSectionTitle";

const funModeStorageKey = "fun-mode";
const funIconColors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#a855f7", "#ec4899"];

function getRandomFunIconColor() {
	return funIconColors[Math.floor(Math.random() * funIconColors.length)];
}

const socialsHeading = ["Let's connect"];
export default function Socials() {
	const sectionRef = useActiveSectionTitle(() => {
		document.title = "Febkosq8 - Socials";
	});
	const navigate = useNavigate();
	const [funMode, setFunMode] = useState(() => localStorage.getItem(funModeStorageKey) === "true");
	const [funIconColor, setFunIconColor] = useState(getRandomFunIconColor);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(
		() => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
	);
	useEffect(() => {
		document.documentElement.classList.toggle("fun", funMode);
		localStorage.setItem(funModeStorageKey, String(funMode));
	}, [funMode]);
	useEffect(() => {
		if (!funMode) {
			setFunIconColor("var(--primary)");
			return;
		}

		const intervalId = setInterval(() => {
			setFunIconColor(getRandomFunIconColor());
		}, 500);

		return () => clearInterval(intervalId);
	}, [funMode]);
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

		mediaQuery.addEventListener("change", updatePreference);
		return () => mediaQuery.removeEventListener("change", updatePreference);
	}, []);

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
		<div
			ref={sectionRef}
			className="socials flex w-full min-h-fit-screen justify-center p-5 pb-16"
			id="socials"
			data-title-section
		>
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
						<h2
							className="mt-3 max-w-3xl text-3xl leading-tight font-semibold text-foreground lg:text-5xl"
							id="socialsTitle"
						>
							<TypingAnimation
								strings={socialsHeading}
								placeholder="Let's connect"
								perTick={{ amount: 2, unit: "character" }}
							/>
						</h2>
					</div>
					<p className="max-w-3xl text-base leading-7 text-foreground/80 sm:text-lg lg:text-xl lg:leading-8">
						Find me online, get in touch, or support the work behind these projects.
					</p>
				</div>

				<Card hoverLift={false} className="mt-8 border-primary/60 bg-primary/5">
					<Card.Header className="flex-row items-center gap-2">
						<span className="text-primary" aria-hidden="true">
							<FaHeartbeat />
						</span>
						Live service status
					</Card.Header>
					<Card.Content className="flex flex-col gap-3">
						<p className="text-sm leading-6 text-foreground/70">
							A live view of my services and infrastructure, monitored with Uptime Kuma.
						</p>
						<ButtonLink href="https://status.febkosq8.me/" target="_blank" rel="noreferrer" className="w-fit gap-2">
							View live status
							<FaArrowUpRightFromSquare aria-hidden="true" />
						</ButtonLink>
					</Card.Content>
				</Card>

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
										<ButtonLink
											href={link.href}
											target={link.href.startsWith("mailto:") ? undefined : "_blank"}
											rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
											variant="outline"
											key={link.label}
											className="h-10 gap-2 px-3 py-2 text-sm leading-none"
										>
											<span className="flex items-center text-base leading-none text-primary" aria-hidden="true">
												{link.icon}
											</span>
											{link.label}
										</ButtonLink>
									))}
									{group.title === "Explore" && (
										<Button
											variant="outline-secondary"
											className="h-10 gap-2 px-3 py-2 text-sm leading-none"
											onClick={() => setFunMode((enabled) => !enabled)}
											onDoubleClick={() => {
												if (!prefersReducedMotion) {
													navigate("/chaos", { replace: true });
												}
											}}
											aria-pressed={funMode}
											title={`${funMode ? "Turn off" : "Turn on"} fun mode.${prefersReducedMotion ? " Reduced motion preferred; icons will be disabled." : ""}\nDouble click to unleash chaos.`}
										>
											<span className="flex items-center text-base leading-none text-primary" aria-hidden="true">
												<GiPartyPopper
													className="text-(--fun-icon-color)"
													style={{ "--fun-icon-color": funIconColor } as React.CSSProperties}
												/>
											</span>
											{funMode ? "I can't handle it" : "Go Crazy"}
											{prefersReducedMotion && funMode && (
												<span className="text-xs opacity-75">Reduced motion preferred - no icons deployed</span>
											)}
										</Button>
									)}
								</div>
							</Card.Content>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
