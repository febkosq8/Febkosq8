import CourseContentDeliveryImg from "@feb/assets/febkos/CourseContentDelivery.png";
import CryptoGIFImg from "@feb/assets/febkos/CryptoGIF.png";
import DefectListGeneratorImg from "@feb/assets/febkos/DefectListGenerator.png";
import GStatTrackerImg from "@feb/assets/febkos/GStatTracker.png";
import JappanImg from "@feb/assets/febkos/Jappan.png";
import JavaCryptoMessengerImg from "@feb/assets/febkos/JavaCryptoMessenger.png";
import LocalSaveImg from "@feb/assets/febkos/localSave.png";
import smolURLImg from "@feb/assets/febkos/smolURL.png";
import ToolBoxImg from "@feb/assets/febkos/ToolBox.png";
import Card from "@feb/components/ui/Card";
import { faDiscord, faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cx } from "@rinzai/zen";
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
						<FontAwesomeIcon icon={faNpm} size="lg" />
					</>
				),
				url: "https://www.npmjs.com/package/@febkosq8/local-save",
			},
			{ name: "View Demo", url: "https://local-save.febkosq8.me/" },
			{
				name: (
					<>
						View on
						<FontAwesomeIcon icon={faGithub} size="lg" />
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
						<FontAwesomeIcon icon={faDiscord} size="lg" />
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
						<FontAwesomeIcon icon={faGithub} size="lg" />
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
						<FontAwesomeIcon icon={faGithub} size="lg" />
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
	{
		imgSrc: CryptoGIFImg,
		title: "CryptoGIF",
		description: "App to save data in images using steganography.",
		actions: [
			{
				name: (
					<>
						View on <FontAwesomeIcon icon={faGithub} size="lg" />
					</>
				),
				url: "https://github.com/febkosq8/CryptoGIF",
			},
		],
		tech: ["HTML", "Python"],
	},
	{
		imgSrc: JavaCryptoMessengerImg,
		title: "Java Cryptographic Messenger",
		description: "Simple and secure messenger app.",
		actions: [
			{
				name: (
					<>
						View on <FontAwesomeIcon icon={faGithub} size="lg" />
					</>
				),
				url: "https://github.com/febkosq8/java_cryptographic_messenger",
			},
		],
		tech: ["Java"],
	},
	{
		imgSrc: CourseContentDeliveryImg,
		title: "Course Content Delivery",
		description: "Workflow to deliver course content digitally to students.",
		actions: [],
	},
];
export default function Projects() {
	return (
		<div className="projects flex min-h-(--spacing-fit-screen) flex-col items-center justify-center p-5" id="projects">
			<h1 className="typography-heading-2 mb-10" id="projectsTitle">
				Projects
			</h1>
			<div className="flex w-full flex-row flex-wrap items-center justify-center gap-2">
				{projectItems.map((item, index) => (
					<Card
						key={index}
						className="col-span-6 row-span-3 flex h-[200px] w-full max-w-[90vw] overflow-clip p-0! sm:w-[700px] sm:max-w-[750px] sm:min-w-[650px]"
					>
						<div className="relative hidden h-full! w-[100px] overflow-hidden sm:block sm:w-auto sm:max-w-[--spacing(80)] sm:min-w-[--spacing(80)]">
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
								<div className="invisible absolute -bottom-[500px] z-10 flex h-full w-full items-center justify-center p-2 transition-all duration-300 group-hover:visible group-hover:bottom-0">
									<div className="flex flex-row flex-wrap items-center justify-center-safe gap-2 whitespace-pre-wrap">
										{item.tech.map((tech, index) => (
											<span
												key={`${index}_tech`}
												className="size-fit rounded-md bg-secondary px-2 py-1 text-xs font-semibold whitespace-nowrap text-secondary-foreground"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							)}
						</div>

						<div className="card-body flex h-full w-full flex-col items-start py-2">
							<Card.Header>{item.title}</Card.Header>
							<Card.Content>{item.description}</Card.Content>
							{item.actions.length > 0 && (
								<Card.Footer className="projectItemBtns flex flex-row gap-2">
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
	);
}
