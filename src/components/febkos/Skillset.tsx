import Card from "@feb/components/ui/Card";
const languagesList = [
	{
		badge:
			"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
		name: "JavaScript",
		bgColor: "#323330",
	},
	{
		badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
		name: "HTML",
		bgColor: "#E34F26",
	},
	{
		badge: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
		name: "CSS",
		bgColor: "#1572B6",
	},
	{
		badge: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
		name: "C++",
		bgColor: "#00599C",
	},
	{
		badge: "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
		name: "C",
		bgColor: "#00599C",
	},
	{
		badge: "https://img.shields.io/badge/markdown-3848AC.svg?style=for-the-badge&logo=markdown&logoColor=white",
		name: "Markdown",
		bgColor: "#3848AC",
	},
	{
		badge: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
		name: "TypeScript",
		bgColor: "#007ACC",
	},
	{
		badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
		name: "Python",
		bgColor: "#3670A0",
	},
];
const frameworksList = [
	{
		badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
		name: "React",
		bgColor: "#20232A",
	},
	{
		badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
		name: "Tailwind CSS",
		bgColor: "#38B2AC",
	},
	{
		badge: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
		name: "Express.js",
		bgColor: "#404D59",
	},
	{
		badge: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
		name: "Node.js",
		bgColor: "#6DA55F",
	},
	{
		badge: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
		name: "Bootstrap",
		bgColor: "#563D7C",
	},
	{
		badge: "https://img.shields.io/badge/Next-646CFF?style=for-the-badge&logo=next.js&logoColor=white",
		name: "Next.js",
		bgColor: "#646CFF",
	},
];
const technologiesList = [
	{
		badge: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
		name: "Git",
		bgColor: "#E44C30",
	},
	{
		badge: "https://img.shields.io/badge/GitHub-330F63?style=for-the-badge&logo=github&logoColor=white",
		name: "GitHub",
		bgColor: "#330F63",
	},
	{
		badge: "https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white",
		name: "Google",
		bgColor: "#4285F4",
	},
	{
		badge: "https://img.shields.io/badge/Azure_DevOps-0078D7?style=for-the-badge&logo=azure-devops&logoColor=white",
		name: "Azure DevOps",
		bgColor: "#0078D7",
	},
	{
		badge: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
		name: "Vite",
		bgColor: "#646CFF",
	},
	{
		badge: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
		name: "MongoDB",
		bgColor: "#4EA94B",
	},
	{
		badge: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white",
		name: "Cloudflare",
		bgColor: "#F38020",
	},
	{
		badge: "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
		name: "Heroku",
		bgColor: "#430098",
	},
	{
		badge:
			"https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
		name: "Microsoft Excel",
		bgColor: "#217346",
	},
	{
		badge:
			"https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",
		name: "Visual Studio Code",
		bgColor: "#0078D7",
	},
	{
		badge:
			"https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white",
		name: "Windows Terminal",
		bgColor: "#4D4D4D",
	},
];
export default function Skillset() {
	return (
		<div className="skillset flex min-h-(--spacing-fit-screen) flex-col items-center justify-center p-5" id="skillset">
			<h2 className="typography-heading-2 mb-10 flex" id="skillsetTitle">
				Skillset
			</h2>
			<div className="grid grid-cols-12 gap-3">
				<Card className="col-span-12 row-span-3 flex flex-col justify-between">
					<Card.Header>Languages</Card.Header>
					<Card.Content>
						<div className="grid grid-flow-row grid-cols-2 gap-2 lg:grid-cols-4">
							{languagesList.map((language) => {
								return (
									<div key={`${language.name}_Badge`} style={{ backgroundColor: `${language.bgColor}` }}>
										<img
											className="h-auto w-auto"
											src={language.badge}
											alt={language.name}
											title={language.name}
											width={100}
											height={50}
										/>
									</div>
								);
							})}
						</div>
					</Card.Content>
				</Card>
				<Card className="col-span-12 row-span-3 flex flex-col justify-between">
					<Card.Header>Frameworks</Card.Header>
					<Card.Content>
						<div className="grid grid-flow-row grid-cols-2 gap-2 lg:grid-cols-4">
							{frameworksList.map((framwork) => {
								return (
									<div key={`${framwork.name}_Badge`} style={{ backgroundColor: `${framwork.bgColor}` }}>
										<img
											className="h-auto w-auto"
											src={framwork.badge}
											alt={framwork.name}
											title={framwork.name}
											width={100}
											height={50}
										/>
									</div>
								);
							})}
						</div>
					</Card.Content>
				</Card>
				<Card className="col-span-12 row-span-3 flex flex-col justify-between">
					<Card.Header>Technologies</Card.Header>
					<Card.Content>
						<div className="grid grid-flow-row grid-cols-2 gap-2 lg:grid-cols-4">
							{technologiesList.map((technology) => {
								return (
									<div key={`${technology.name}_Badge`} style={{ backgroundColor: `${technology.bgColor}` }}>
										<img
											className="h-auto w-auto"
											src={technology.badge}
											alt={technology.name}
											title={technology.name}
											width={100}
											height={50}
										/>
									</div>
								);
							})}
						</div>
					</Card.Content>
				</Card>
			</div>
		</div>
	);
}
