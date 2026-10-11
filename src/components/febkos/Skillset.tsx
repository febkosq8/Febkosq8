import Card from "@feb/components/ui/Card";
import TypingAnimation from "@feb/components/ui/TypingAnimation";
import { useState } from "react";

export type SkillItem = {
	name: string;
	bgColor: string;
	url?: string;
	core?: boolean;
};
const languagesList: SkillItem[] = [
	{
		name: "TypeScript",
		bgColor: "#007ACC",
		url: "https://www.typescriptlang.org/",
		core: true,
	},
	{
		name: "JavaScript",
		bgColor: "#3A3A3A",
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		name: "HTML",
		bgColor: "#E34F26",
		url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	{
		name: "CSS",
		bgColor: "#663399",
		url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		name: "Python",
		bgColor: "#3670A0",
		url: "https://www.python.org/",
	},
	{
		name: "Markdown",
		bgColor: "#3F4F8C",
		url: "https://www.markdownguide.org/",
	},
	{
		name: "C++",
		bgColor: "#00599C",
		url: "https://isocpp.org/",
	},
	{
		name: "C",
		bgColor: "#4B6B8A",
		url: "https://en.cppreference.com/w/c",
	},
];
const stackList: SkillItem[] = [
	{
		name: "React",
		bgColor: "#20232A",
		url: "https://react.dev/",
		core: true,
	},
	{
		name: "Node.js",
		bgColor: "#6DA55F",
		url: "https://nodejs.org/",
		core: true,
	},
	{
		name: "Express.js",
		bgColor: "#404D59",
		url: "https://expressjs.com/",
	},
	{
		name: "MongoDB",
		bgColor: "#3F8F4B",
		url: "https://www.mongodb.com/",
	},
	{
		name: "Tailwind CSS",
		bgColor: "#38B2AC",
		url: "https://tailwindcss.com/",
	},
	{
		name: "Vite",
		bgColor: "#646CFF",
		url: "https://vite.dev/",
	},
	{
		name: "Vitest",
		bgColor: "#252529",
		url: "https://vitest.dev/",
	},
];
const appSecList: SkillItem[] = [
	{
		name: "Burp Suite",
		bgColor: "#E85D2A",
		url: "https://portswigger.net/burp",
		core: true,
	},
	{
		name: "OpenText DAST",
		bgColor: "#1A2A4A",
		url: "https://www.opentext.com/uk/products/dynamic-application-security-testing",
	},
	{
		name: "OWASP ZAP",
		bgColor: "#1E3A5F",
		url: "https://www.zaproxy.org/",
	},
	{
		name: "Nmap",
		bgColor: "#2C5282",
		url: "https://nmap.org/",
	},
	{
		name: "OWASP",
		bgColor: "#2D2D2D",
		url: "https://owasp.org/",
	},
	{
		name: "MITRE ATT&CK",
		bgColor: "#7A1A28",
		url: "https://attack.mitre.org/",
	},
];
const technologiesList: SkillItem[] = [
	{
		name: "Git",
		bgColor: "#D94C3A",
		url: "https://git-scm.com/",
		core: true,
	},
	{
		name: "GitHub",
		bgColor: "#4C2A85",
		url: "https://github.com/",
	},
	{
		name: "Azure DevOps",
		bgColor: "#2F6FB2",
		url: "https://azure.microsoft.com/products/devops",
	},
	{
		name: "Cloudflare",
		bgColor: "#E07A2F",
		url: "https://www.cloudflare.com/",
	},
	{
		name: "Azure",
		bgColor: "#2C5DAA",
		url: "https://azure.microsoft.com/",
		core: true,
	},
	{
		name: "Google Cloud",
		bgColor: "#3A78D1",
		url: "https://cloud.google.com/",
	},
	{
		name: "Oracle Cloud",
		bgColor: "#C74634",
		url: "https://www.oracle.com/cloud/",
	},
	{
		name: "Visual Studio Code",
		bgColor: "#2FA4A9",
		url: "https://code.visualstudio.com/",
	},
];

const categories = [
	{ id: "all", label: "All skills", items: [] },
	{ id: "languages", label: "Languages", items: languagesList },
	{ id: "stack", label: "Development", items: stackList },
	{ id: "appSec", label: "AppSec", items: appSecList },
	{ id: "technologies", label: "Platforms & tools", items: technologiesList },
] as const;

const allSkills = categories.slice(1).flatMap((category) => category.items);
const coreStack = allSkills.filter((skill) => skill.core);

function SkillTile({ skill, featured = false }: { skill: SkillItem; featured?: boolean }) {
	const className = `group relative block overflow-hidden rounded-md border border-foreground/15 bg-card p-3 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-md ${featured ? "sm:min-w-35 sm:flex-1" : ""}`;
	const content = (
		<div className="mb-3 flex items-center justify-between gap-2">
			<span className="text-sm font-semibold text-card-foreground">{skill.name}</span>
			<span
				className="size-3 shrink-0 rounded-full ring-1 ring-foreground/45 dark:brightness-150"
				style={{ backgroundColor: skill.bgColor }}
				aria-hidden="true"
			/>
		</div>
	);

	return skill.url ? (
		<a
			className={className}
			href={skill.url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Learn more about ${skill.name}`}
		>
			{content}
		</a>
	) : (
		<div className={className}>{content}</div>
	);
}

export default function Skillset() {
	const [activeCategory, setActiveCategory] = useState("all");
	const visibleSkills =
		activeCategory === "all" ? allSkills : (categories.find((category) => category.id === activeCategory)?.items ?? []);

	return (
		<div className="skillset flex w-full min-h-fit-screen justify-center p-5" id="skillset">
			<div className="w-full max-w-6xl py-10">
				<div className="flex flex-col gap-5 border-b border-border pb-8">
					<div>
						<p className="text-sm font-semibold text-primary uppercase lg:text-base">
							<a href="#skillset" className="transition-colors hover:text-primary focus-visible:outline-hidden">
								Skillset
							</a>
						</p>
						<h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold lg:text-5xl" id="skillsetTitle">
							<TypingAnimation
								strings={["What I work with"]}
								placeholder="What I work with"
								perTick={{ update: 2, unit: "character" }}
							/>
						</h2>
					</div>
					<p className="max-w-3xl text-base leading-7 text-foreground/70 sm:text-lg lg:text-xl lg:leading-8">
						A practical toolkit for building web applications, testing their security, and shipping them reliably.
					</p>
				</div>

				<div className="mt-8 w-full">
					<Card hoverLift={false} className="mb-4 border-primary/40 bg-primary/5">
						<div className="mb-4 flex items-end justify-between gap-4">
							<div>
								<p className="text-xs font-semibold tracking-wide text-primary uppercase">Core stack</p>
								<h3 className="mt-1 text-lg font-semibold">The tools I reach for most</h3>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
							{coreStack.map((skill) => (
								<SkillTile key={skill.name} skill={skill} featured />
							))}
						</div>
					</Card>

					<div className="mb-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Skill categories">
						{categories.map((category) => {
							const isActive = category.id === activeCategory;
							return (
								<button
									key={category.id}
									type="button"
									role="tab"
									aria-selected={isActive}
									onClick={() => setActiveCategory(category.id)}
									className={`shrink-0 rounded-full border px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden ${isActive ? "border-primary bg-primary text-primary-foreground" : "border-foreground/20 bg-background hover:border-primary hover:text-primary"}`}
								>
									{category.label}
								</button>
							);
						})}
					</div>

					<div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
						{visibleSkills.map((skill) => (
							<SkillTile key={skill.name} skill={skill} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
