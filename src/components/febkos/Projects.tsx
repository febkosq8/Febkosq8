import DefectListGeneratorImg from "@feb/assets/febkos/DefectListGenerator.png";
import GStatTrackerImg from "@feb/assets/febkos/GStatTracker.png";
import JappanImg from "@feb/assets/febkos/Jappan.png";
import LocalSaveImg from "@feb/assets/febkos/localSave.png";
import smolURLImg from "@feb/assets/febkos/smolURL.png";
import ToolBoxImg from "@feb/assets/febkos/ToolBox.png";
import Card from "@feb/components/ui/Card";
import { cx } from "@rinzai/zen";
import { useState } from "react";
import { FaArrowRight, FaDiscord, FaGithub, FaNpm } from "react-icons/fa";
const projectItems = [
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
	const [expandedProject, setExpandedProject] = useState<number | null>(null);

	return (
		<div className="projects flex w-full min-h-fit-screen justify-center p-5" id="projects">
			<div className="w-full max-w-7xl py-10">
				<div className="flex flex-col gap-5 border-b border-border pb-8">
					<div>
						<p className="text-sm font-semibold text-primary uppercase lg:text-base">
							<a href="#projects" className="transition-colors hover:text-primary focus-visible:outline-hidden">
								Projects
							</a>
						</p>
						<h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold lg:text-5xl" id="projectsTitle">
							Things I&apos;ve built
						</h2>
					</div>
					<p className="max-w-3xl text-base leading-7 text-foreground/70 sm:text-lg lg:text-xl lg:leading-8">
						A selection of web apps, bots, developer tools, and security projects.
					</p>
				</div>

				<div className="mt-8 grid w-full grid-cols-1 items-start gap-3 lg:grid-cols-2">
					{projectItems.map((item, index) => (
						<Card key={index} className="group relative aspect-4/3 min-w-0 overflow-hidden p-0! sm:aspect-video">
							<button
								type="button"
								aria-label={`Show details for ${item.title}`}
								onClick={() => setExpandedProject(expandedProject === index ? null : index)}
								className="absolute inset-0 size-full cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white focus-visible:outline-hidden"
							>
								<img
									className={cx(
										"card-image absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105",
									)}
									src={item.imgSrc}
									alt={item.title}
								/>
							</button>
							<button
								type="button"
								aria-label={`Show details for ${item.title}`}
								aria-expanded={expandedProject === index}
								onClick={() => setExpandedProject(expandedProject === index ? null : index)}
								className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-linear-to-t from-black/90 to-transparent p-4 text-left max-sm:pointer-events-none max-sm:opacity-0"
							>
								<h3 className="text-xl leading-6 font-semibold text-white">{item.title}</h3>
								<span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-white/25">
									<FaArrowRight className="h-4 w-4" />
								</span>
							</button>
							<div
								className={cx(
									"absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/95 via-black/75 to-black/5 p-4 transition-opacity duration-300 max-sm:pointer-events-auto max-sm:opacity-100 sm:pointer-events-none sm:group-hover:pointer-events-auto sm:group-hover:opacity-100",
									expandedProject === index ? "opacity-100 sm:pointer-events-auto" : "opacity-0",
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
													className="rounded-md bg-white/15 px-2 py-1 text-xs font-semibold whitespace-nowrap text-white backdrop-blur-sm"
												>
													{tech}
												</span>
											))}
										</div>
									)}
									{item.actions.length > 0 && (
										<div className="projectItemBtns flex flex-row flex-wrap gap-2">
											{item.actions.map((action, index) => (
												<a
													key={`${index}_Project`}
													href={action.url}
													target="_blank"
													rel="noopener noreferrer"
													className={cx(
														"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
														"bg-primary text-nowrap text-primary-foreground hover:bg-primary/90",
														"h-9 w-fit gap-1 px-3 py-2",
													)}
												>
													{action.name}
												</a>
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
