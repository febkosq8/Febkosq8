import DefectListGeneratorImg from "@feb/assets/febkos/DefectListGenerator.png";
import GStatTrackerImg from "@feb/assets/febkos/GStatTracker.png";
import JappanImg from "@feb/assets/febkos/Jappan.png";
import LocalSaveImg from "@feb/assets/febkos/localSave.png";
import smolURLImg from "@feb/assets/febkos/smolURL.png";
import ToolBoxImg from "@feb/assets/febkos/ToolBox.png";
import Card from "@feb/components/ui/Card";
import { cx } from "@rinzai/zen";
import { FaDiscord, FaGithub, FaNpm } from "react-icons/fa";
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
	return (
		<div className="projects flex min-h-fit-screen justify-center p-5" id="projects">
			<div className="w-full max-w-6xl py-10">
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
						A selection of web applications, developer tools, and security-focused projects.
					</p>
				</div>

				<div className="mt-8 grid w-full grid-cols-1 items-start gap-3 lg:grid-cols-2">
					{projectItems.map((item, index) => (
						<Card key={index} className="flex min-w-0 flex-col overflow-clip p-0!">
							<div className="relative aspect-16/5 w-full shrink-0 overflow-hidden">
								<img
									className={cx(
										"card-image size-full object-cover transition-[scale,filter] duration-300",
										!!item?.tech && item.tech.length > 0
											? "group-hover:scale-250 group-hover:object-center group-hover:blur-xs"
											: "",
									)}
									src={item.imgSrc}
									alt={item.title}
								/>
								{!!item?.tech && item.tech.length > 0 && (
									<div className="invisible absolute -bottom-125 z-10 flex h-full w-full items-center justify-center p-2 transition-all duration-300 group-hover:visible group-hover:bottom-0">
										<div className="flex flex-row flex-wrap items-center justify-center-safe gap-2 whitespace-pre-wrap">
											{item.tech.map((tech, index) => (
												<span
													key={`${index}_tech`}
													className="size-fit rounded-md bg-secondary px-2 py-1.5 text-sm font-semibold whitespace-nowrap text-secondary-foreground"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								)}
							</div>

							<div className="card-body flex min-w-0 w-full flex-1 flex-col items-start">
								<Card.Header className="px-4 py-3! text-lg! leading-6! font-semibold!">{item.title}</Card.Header>
								<Card.Content className="px-4 py-3! text-base! leading-6!">{item.description}</Card.Content>
								{item.actions.length > 0 && (
									<Card.Footer className="projectItemBtns flex flex-row flex-wrap gap-2 px-4 py-3!">
										{item.actions.map((action, index) => (
											<a
												key={`${index}_Project`}
												href={action.url}
												target="_blank"
												rel="noopener noreferrer"
												className={cx(
													"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
													"bg-primary text-nowrap text-primary-foreground hover:bg-primary/90",
													"h-10 w-fit gap-1 px-3 py-2",
												)}
											>
												{action.name}
											</a>
										))}
									</Card.Footer>
								)}
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
