import BadgeDisplay from "@feb/components/ui/BadgeDisplay";
import Card from "@feb/components/ui/Card";

export type SkillItem = {
	badge: string;
	name: string;
	bgColor: string;
};
const languagesList: SkillItem[] = [
	{
		badge: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
		name: "TypeScript",
		bgColor: "#007ACC",
	},
	{
		badge: "https://img.shields.io/badge/JavaScript-3A3A3A?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
		name: "JavaScript",
		bgColor: "#3A3A3A",
	},
	{
		badge: "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white",
		name: "HTML",
		bgColor: "#E34F26",
	},
	{
		badge: "https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white",
		name: "CSS",
		bgColor: "#663399",
	},
	{
		badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
		name: "Python",
		bgColor: "#3670A0",
	},
	{
		badge: "https://img.shields.io/badge/markdown-3F4F8C.svg?style=for-the-badge&logo=markdown&logoColor=white",
		name: "Markdown",
		bgColor: "#3F4F8C",
	},
	{
		badge: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
		name: "C++",
		bgColor: "#00599C",
	},
	{
		badge: "https://img.shields.io/badge/C-%234B6B8A.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
		name: "C",
		bgColor: "#4B6B8A",
	},
];
const stackList: SkillItem[] = [
	{
		badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
		name: "React",
		bgColor: "#20232A",
	},
	{
		badge: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
		name: "Node.js",
		bgColor: "#6DA55F",
	},
	{
		badge: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
		name: "Express.js",
		bgColor: "#404D59",
	},
	{
		badge: "https://img.shields.io/badge/MongoDB-3F8F4B?style=for-the-badge&logo=mongodb&logoColor=white",
		name: "MongoDB",
		bgColor: "#3F8F4B",
	},
	{
		badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
		name: "Tailwind CSS",
		bgColor: "#38B2AC",
	},
	{
		badge: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
		name: "Vite",
		bgColor: "#646CFF",
	},
	{
		badge: "https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B",
		name: "Vitest",
		bgColor: "#252529",
	},
];
const appSecList: SkillItem[] = [
	{
		badge: "https://img.shields.io/badge/Burp%20Suite-E85D2A?style=for-the-badge&logo=burpsuite&logoColor=white",
		name: "Burp Suite",
		bgColor: "#E85D2A",
	},
	{
		badge: "https://img.shields.io/badge/OpenText%20DAST-1A2A4A?style=for-the-badge&logoColor=white",
		name: "OpenText DAST",
		bgColor: "#1A2A4A",
	},
	{
		badge: "https://img.shields.io/badge/OWASP%20ZAP-1E3A5F?style=for-the-badge&logo=owasp&logoColor=white",
		name: "OWASP ZAP",
		bgColor: "#1E3A5F",
	},
	{
		badge: "https://img.shields.io/badge/Nmap-2C5282?style=for-the-badge&logoColor=white",
		name: "Nmap",
		bgColor: "#2C5282",
	},
	{
		badge: "https://img.shields.io/badge/OWASP-2D2D2D?style=for-the-badge&logo=owasp&logoColor=white",
		name: "OWASP",
		bgColor: "#2D2D2D",
	},
	{
		badge: "https://img.shields.io/badge/MITRE%20ATT%26CK-7A1A28?style=for-the-badge&logoColor=white",
		name: "MITRE ATT&CK",
		bgColor: "#7A1A28",
	},
];
const technologiesList: SkillItem[] = [
	{
		badge: "https://img.shields.io/badge/Git-D94C3A?style=for-the-badge&logo=git&logoColor=white",
		name: "Git",
		bgColor: "#D94C3A",
	},
	{
		badge: "https://img.shields.io/badge/GitHub-4C2A85?style=for-the-badge&logo=github&logoColor=white",
		name: "GitHub",
		bgColor: "#4C2A85",
	},
	{
		badge: "https://img.shields.io/badge/Azure%20DevOps-2F6FB2?style=for-the-badge&logo=azure-devops&logoColor=white",
		name: "Azure DevOps",
		bgColor: "#2F6FB2",
	},
	{
		badge: "https://img.shields.io/badge/Cloudflare-E07A2F?style=for-the-badge&logo=cloudflare&logoColor=white",
		name: "Cloudflare",
		bgColor: "#E07A2F",
	},
	{
		badge: "https://img.shields.io/badge/Azure-2C5DAA?style=for-the-badge&logo=microsoftazure&logoColor=white",
		name: "Azure",
		bgColor: "#2C5DAA",
	},
	{
		badge: "https://img.shields.io/badge/Google%20Cloud-3A78D1?style=for-the-badge&logo=google-cloud&logoColor=white",
		name: "Google Cloud",
		bgColor: "#3A78D1",
	},
	{
		badge: "https://img.shields.io/badge/VS%20Code-2FA4A9?style=for-the-badge&logo=visual-studio-code&logoColor=white",
		name: "Visual Studio Code",
		bgColor: "#2FA4A9",
	},
];
export default function Skillset() {
	return (
		<div className="skillset flex min-h-fit-screen flex-col items-center justify-center p-5" id="skillset">
			<h2 className="typography-heading-2 mb-10 flex" id="skillsetTitle">
				Skillset
			</h2>
			<div className="grid grid-cols-12 gap-3">
				<Card className="col-span-12 row-span-3 flex flex-col justify-between">
					<Card.Header>Languages</Card.Header>
					<Card.Content>
						<BadgeDisplay badgeList={languagesList} topic={"languages"} />
					</Card.Content>
				</Card>
				<Card className="col-span-12 row-span-3 flex flex-col justify-between">
					<Card.Header>Stack</Card.Header>
					<Card.Content>
						<BadgeDisplay badgeList={stackList} topic={"stack"} />
					</Card.Content>
				</Card>
				<Card className="col-span-12 row-span-3 flex flex-col justify-between">
					<Card.Header>AppSec</Card.Header>
					<Card.Content>
						<BadgeDisplay badgeList={appSecList} topic={"appSec"} />
					</Card.Content>
				</Card>
				<Card className="col-span-12 row-span-3 flex flex-col justify-between">
					<Card.Header>Platforms & Tools</Card.Header>
					<Card.Content>
						<BadgeDisplay badgeList={technologiesList} topic={"technologies"} />
					</Card.Content>
				</Card>
			</div>
		</div>
	);
}
