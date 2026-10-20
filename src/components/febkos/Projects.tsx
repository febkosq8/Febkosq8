import DefectListGeneratorImg from "@feb/assets/febkos/DefectListGenerator.png";
import GStatTrackerImg from "@feb/assets/febkos/GStatTracker.png";
import JappanImg from "@feb/assets/febkos/Jappan.png";
import LocalSaveImg from "@feb/assets/febkos/localSave.png";
import ArcImg from "@feb/assets/febkos/ARC.png";
import smolURLImg from "@feb/assets/febkos/smolURL.png";
import ToolBoxImg from "@feb/assets/febkos/ToolBox.png";
import { Button, Card, PillLink, TypingAnimation } from "@febkosq8/arc";
import { cx } from "@rinzai/zen";
import { useState } from "react";
import useActiveSectionTitle from "@feb/components/febkos/useActiveSectionTitle";
import { FaCode, FaDiscord, FaGithub, FaInfoCircle, FaNpm } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";
const projectsHeading = ["Things I've built"];
const projectItems = [
	{
		imgSrc: ArcImg,
		title: "A.R.C",
		description: "Reusable React component library powering the UI of all my websites.",
		actions: [
			{
				name: (
					<>
						View on
						<FaNpm className="h-5 w-5" />
					</>
				),
				url: "https://www.npmjs.com/package/@febkosq8/arc",
			},
			{
				name: (
					<>
						View Storybook
						<SiStorybook className="h-5 w-5" />
					</>
				),
				url: "https://arc.febkosq8.me/",
			},
			{
				name: (
					<>
						View on
						<FaGithub className="h-5 w-5" />
					</>
				),
				url: "https://github.com/febkosq8/arc",
			},
		],
		tech: ["React", "TypeScript", "Tailwind CSS", "NPM"],
	},
	{
		imgSrc: DefectListGeneratorImg,
		title: "Defect List Generator",
		description: "Internal tool to manage and track security related defects across all products.",
		actions: [],
		tech: ["React", "Express.js", "MongoDB", "Nginx", "Docker", "Azure"],
	},
	{
		imgSrc: LocalSaveImg,
		title: "local-save",
		description: "Lightweight wrapper around IndexedDB for secure and structured client-side data storage.",
		actions: [
			{
				name: (
					<>
						View on
						<FaNpm className="h-5 w-5" />
					</>
				),
				url: "https://www.npmjs.com/package/@febkosq8/local-save",
			},
			{ name: "View Demo", url: "https://local-save.febkosq8.me/" },
			{
				name: (
					<>
						View on
						<FaGithub className="h-5 w-5" />
					</>
				),
				url: "https://github.com/febkosq8/local-save",
			},
		],
		tech: ["React", "TypeScript", "IndexedDB", "NPM"],
	},
	{
		imgSrc: ToolBoxImg,
		title: "Tool Box",
		description: "Collection of micro-services to support various tools.",
		actions: [{ name: "View Live Application", url: "https://toolbox.febkosq8.me/" }],
		tech: ["React", "Express.js", "MongoDB", "Oracle Cloud"],
	},
	{
		imgSrc: JappanImg,
		title: "Jappan - Discord Bot",
		description: "Discord bot that can do music, fun, leveling & moderation.",
		actions: [
			{
				name: (
					<>
						<FaDiscord className="h-5 w-5" />
						Invite
					</>
				),
				url: "https://discord.com/api/oauth2/authorize?client_id=732230135671029831&permissions=8&scope=applications.commands%20bot",
			},
			{
				name: (
					<>
						View on
						<FaGithub className="h-5 w-5" />
					</>
				),
				url: "https://github.com/febkosq8/jappan",
			},
			{
				name: "Know More",
				url: "https://jappan.febkosq8.me",
			},
		],
		tech: ["Discord.js", "MongoDB", "Google Cloud"],
	},
	{
		imgSrc: smolURLImg,
		title: "smolURL",
		description: "Simple no-signups URL shortener",
		actions: [
			{
				name: (
					<>
						View on
						<FaGithub className="h-5 w-5" />
					</>
				),
				url: "https://github.com/febkosq8/smolURL",
			},
			{ name: "View Live Application", url: "https://smolurl.febkosq8.me/" },
		],
		tech: ["React", "Express.js", "MongoDB", "Oracle Cloud"],
	},
	{
		imgSrc: GStatTrackerImg,
		title: "GStat Tracker",
		description: "App to track your Github statistics.",
		actions: [
			{
				name: (
					<>
						View on
						<FaGithub className="h-5 w-5" />
					</>
				),
				url: "https://github.com/febkosq8/GStatTracker",
			},
			{
				name: "View Live Application",
				url: "https://gstattracker.febkosq8.me",
			},
		],
		tech: ["React", "Express.js", "MongoDB", "Oracle Cloud"],
	},
];
export default function Projects() {
	const sectionRef = useActiveSectionTitle(() => {
		document.title = "Febkosq8 - Projects";
	});
	const [expandedProject, setExpandedProject] = useState<number | null>(null);

	return (
		<div
			ref={sectionRef}
			className="projects flex w-full min-h-fit-screen justify-center p-5"
			id="projects"
			data-title-section
		>
			<div className="w-full max-w-6xl py-10">
				<div className="flex flex-col gap-5 border-b border-border pb-8">
					<div>
						<p className="text-sm font-semibold text-primary uppercase lg:text-base">
							<a
								href="#projects"
								className="flex items-center gap-2 underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-hidden"
							>
								Projects <FaCode />
							</a>
						</p>
						<h2
							className="mt-3 max-w-3xl text-3xl leading-tight font-semibold text-foreground lg:text-5xl"
							id="projectsTitle"
						>
							<TypingAnimation
								strings={projectsHeading}
								placeholder="Things I've built"
								perTick={{ amount: 2, unit: "character" }}
							/>
						</h2>
					</div>
					<p className="max-w-3xl text-base leading-7 text-foreground/80 sm:text-lg lg:text-xl lg:leading-8">
						A selection of web apps, bots, developer tools, and security projects.
					</p>
				</div>

				<div className="mt-8 grid w-full grid-cols-1 items-start gap-3 lg:grid-cols-2">
					{projectItems.map((item, index) => (
						<Card key={index} className="group relative aspect-4/3 min-w-0 overflow-hidden p-0! sm:aspect-video">
							<Button
								variant="ghost"
								type="button"
								aria-label={`Show details for ${item.title}`}
								onClick={() => setExpandedProject(expandedProject === index ? null : index)}
								className="absolute inset-0 size-full cursor-pointer rounded-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white focus-visible:outline-hidden"
							>
								<img
									className={cx(
										"card-image absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105",
									)}
									src={item.imgSrc}
									alt={item.title}
								/>
							</Button>
							<Button
								variant="ghost"
								type="button"
								aria-label={`Show details for ${item.title}`}
								aria-expanded={expandedProject === index}
								onClick={() => setExpandedProject(expandedProject === index ? null : index)}
								className={cx(
									"absolute inset-x-0 bottom-0 h-auto min-h-32 items-end justify-between gap-3 rounded-none bg-linear-to-t from-black/80 via-black/20 to-transparent p-4 text-left transition-opacity duration-300 sm:group-hover:pointer-events-none sm:group-hover:opacity-0",
									expandedProject === index && "pointer-events-none opacity-0",
								)}
							>
								<h3 className="text-xl leading-6 font-semibold text-white">{item.title}</h3>
								<span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-white/25">
									<FaInfoCircle className="h-4 w-4" />
								</span>
							</Button>
							<div
								onClick={() => setExpandedProject(null)}
								className={cx(
									"pointer-events-none absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/95 via-black/75 to-black/5 p-4 opacity-0 transition-opacity duration-300 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100",
									expandedProject === index && "pointer-events-auto opacity-100",
								)}
							>
								<div className="flex flex-col gap-3">
									<h3 className="text-xl leading-6 font-semibold text-white">{item.title}</h3>
									<p className="text-sm leading-5 text-white/85">{item.description}</p>
									{!!item?.tech && item.tech.length > 0 && (
										<div className="flex flex-row flex-wrap gap-2">
											{item.tech.map((tech, index) => (
												<span
													key={`${index}_tech`}
													className="rounded-md bg-white/20 px-2 py-1 text-xs font-semibold whitespace-nowrap text-white shadow-sm"
												>
													{tech}
												</span>
											))}
										</div>
									)}
									{item.actions.length > 0 && (
										<div className="projectItemBtns flex flex-row flex-wrap gap-2">
											{item.actions.map((action, index) => (
												<PillLink
													href={action.url}
													target="_blank"
													rel="noopener noreferrer"
													key={`${index}_Project`}
													variant="outline"
													size="sm"
													className="h-9 w-fit gap-1 border-white/70 bg-black/50 px-3 py-2 text-nowrap text-white hover:bg-white/20 hover:text-white"
												>
													{action.name}
												</PillLink>
											))}
										</div>
									)}
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
