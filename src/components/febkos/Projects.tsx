import Card from "@feb/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { clsx } from "clsx";
import DefectListGeneratorImg from "@feb/assets/febkos/DefectListGenerator.png";
import LocalSaveImg from "@feb/assets/febkos/localSave.png";
import JappanImg from "@feb/assets/febkos/Jappan.png";
import smolURLImg from "@feb/assets/febkos/smolURL.png";
import GStatTrackerImg from "@feb/assets/febkos/GStatTracker.png";
import CryptoGIFImg from "@feb/assets/febkos/CryptoGIF.png";
import JavaCryptoMessengerImg from "@feb/assets/febkos/JavaCryptoMessenger.png";
import ToolBoxImg from "@feb/assets/febkos/ToolBox.png";
import CourseContentDeliveryImg from "@feb/assets/febkos/CourseContentDelivery.png";
const projectItems = [
	{
		imgSrc: DefectListGeneratorImg,
		title: "Defect List Generator",
		description: "Internal tool to manage and track security related defects across all products.",
		actions: [],
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
						<FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
					</>
				),
				url: "https://github.com/febkosq8/local-save",
			},
			{ name: "View Demo", url: "https://local-save.febkosq8.me/" },
		],
	},
	{
		imgSrc: ToolBoxImg,
		title: "Tool Box",
		description: "Collection of micro-services to support various tools.",
		actions: [{ name: "View Live Application", url: "https://toolbox.febkosq8.me/" }],
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
						<FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
					</>
				),
				url: "https://github.com/febkosq8/smolURL",
			},
			{ name: "View Live Application", url: "https://smolurl.febkosq8.me/" },
		],
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
						<FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
					</>
				),
				url: "https://github.com/febkosq8/GStatTracker",
			},
			{
				name: "View Live Application",
				url: "https://gstattracker.febkosq8.me",
			},
		],
	},
	{
		imgSrc: CryptoGIFImg,
		title: "CryptoGIF",
		description: "App to save data in images using steganography.",
		actions: [
			{
				name: (
					<>
						View on <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
					</>
				),
				url: "https://github.com/febkosq8/CryptoGIF",
			},
		],
	},
	{
		imgSrc: JavaCryptoMessengerImg,
		title: "Java Cryptographic Messenger",
		description: "Simple and secure messenger app.",
		actions: [
			{
				name: (
					<>
						View on <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
					</>
				),
				url: "https://github.com/febkosq8/java_cryptographic_messenger",
			},
		],
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
		<div
			className="projects p-5 flex flex-col items-center justify-center min-h-[theme(spacing.fit-screen)]"
			id="projects"
		>
			<h1 className="typography-heading-2 mb-10" id="projectsTitle">
				Projects
			</h1>
			<div className="grid gap-3 md:grid-cols-12 grid-cols-6 items-center justify-center">
				{projectItems.map((item, index) => (
					<Card key={index} className="col-span-6 row-span-3 h-[200px] flex overflow-hidden w-[80dvh] !p-0">
						<img
							className="min-w-[theme(spacing.80)] max-w-[theme(spacing.80)] object-center object-cover"
							src={item.imgSrc}
							alt={item.title}
						/>
						<Card.Content className="projectItemBtns px-5 py-3 flex flex-col">
							<h2 className="typography-heading-3">{item.title}</h2>
							<p className="text-lg">{item.description}</p>
							<div className="flex gap-2 mt-auto">
								{item.actions.map((action, index) => (
									<a
										key={`${index}_Project`}
										href={action.url}
										target="_blank"
										rel="noopener noreferrer"
										className={clsx(
											"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
											"bg-primary text-primary-foreground hover:bg-primary/90 text-nowrap",
											"h-10 px-4 py-2 gap-1 w-fit"
										)}
									>
										{action.name}
									</a>
								))}
							</div>
						</Card.Content>
					</Card>
				))}
			</div>
		</div>
	);
}
