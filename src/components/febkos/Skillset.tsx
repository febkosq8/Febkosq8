import { Button, Card, TypingAnimation } from "@febkosq8/arc";
import { FaTools } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaCss3, FaNetworkWired, FaShieldHalved } from "react-icons/fa6";
import {
	SiBurpsuite,
	SiC,
	SiCloudflare,
	SiCplusplus,
	SiDiscorddotjs,
	SiExpress,
	SiGit,
	SiGithub,
	SiGooglecloud,
	SiHtml5,
	SiImmich,
	SiJavascript,
	SiMarkdown,
	SiMongodb,
	SiNodedotjs,
	SiOpentext,
	SiOwasp,
	SiProxmox,
	SiPython,
	SiReact,
	SiTailscale,
	SiTailwindcss,
	SiTypescript,
	SiUptimekuma,
	SiVite,
	SiVitest,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { useState } from "react";
import useActiveSectionTitle from "@feb/components/febkos/useActiveSectionTitle";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GrOracle } from "react-icons/gr";
import { TbBrandAzure } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

const skillsetHeading = ["What I work with"];
export type SkillItem = {
	name: string;
	icon: IconType;
	url?: string;
	core?: boolean;
	category?: string;
};
const languagesList: SkillItem[] = [
	{
		name: "TypeScript",
		icon: SiTypescript,
		url: "https://www.typescriptlang.org/",
	},
	{
		name: "JavaScript",
		icon: SiJavascript,
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		name: "HTML",
		icon: SiHtml5,
		url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	{
		name: "CSS",
		icon: FaCss3,
		url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		name: "Python",
		icon: SiPython,
		url: "https://www.python.org/",
	},
	{
		name: "Markdown",
		icon: SiMarkdown,
		url: "https://www.markdownguide.org/",
	},
	{
		name: "C++",
		icon: SiCplusplus,
		url: "https://isocpp.org/",
	},
	{
		name: "C",
		icon: SiC,
		url: "https://en.cppreference.com/w/c",
	},
];
const stackList: SkillItem[] = [
	{
		name: "React",
		icon: SiReact,
		url: "https://react.dev/",
		core: true,
	},
	{
		name: "Node.js",
		icon: SiNodedotjs,
		url: "https://nodejs.org/",
		core: true,
	},
	{
		name: "Express.js",
		icon: SiExpress,
		url: "https://expressjs.com/",
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
		url: "https://www.mongodb.com/",
	},
	{
		name: "Tailwind CSS",
		icon: SiTailwindcss,
		url: "https://tailwindcss.com/",
		core: true,
	},
	{
		name: "Vite",
		icon: SiVite,
		url: "https://vite.dev/",
	},
	{
		name: "Vitest",
		icon: SiVitest,
		url: "https://vitest.dev/",
	},
];
const appSecList: SkillItem[] = [
	{
		name: "Burp Suite",
		icon: SiBurpsuite,
		url: "https://portswigger.net/burp",
		core: true,
	},
	{
		name: "OpenText DAST",
		icon: SiOpentext,
		url: "https://www.opentext.com/uk/products/dynamic-application-security-testing",
	},
	{
		name: "OWASP ZAP",
		icon: FaShieldHalved,
		url: "https://www.zaproxy.org/",
	},
	{
		name: "Nmap",
		icon: FaNetworkWired,
		url: "https://nmap.org/",
	},
	{
		name: "OWASP",
		icon: SiOwasp,
		url: "https://owasp.org/",
	},
	{
		name: "MITRE ATT&CK",
		icon: FaShieldHalved,
		url: "https://attack.mitre.org/",
	},
];
const technologiesList: SkillItem[] = [
	{
		name: "Git",
		icon: SiGit,
		url: "https://git-scm.com/",
	},
	{
		name: "GitHub",
		icon: SiGithub,
		url: "https://github.com/",
		core: true,
	},
	{
		name: "Azure DevOps",
		icon: VscAzureDevops,
		url: "https://azure.microsoft.com/products/devops",
	},
	{
		name: "Cloudflare",
		icon: SiCloudflare,
		url: "https://www.cloudflare.com/",
		core: true,
	},
	{
		name: "Azure",
		icon: TbBrandAzure,
		url: "https://azure.microsoft.com/",
	},
	{
		name: "Google Cloud",
		icon: SiGooglecloud,
		url: "https://cloud.google.com/",
	},
	{
		name: "Oracle Cloud",
		icon: GrOracle,
		url: "https://www.oracle.com/cloud/",
		core: true,
	},
	{
		name: "VS Code",
		icon: BiLogoVisualStudio,
		url: "https://code.visualstudio.com/",
		core: true,
	},
];
const selfHostedList: SkillItem[] = [
	{
		name: "Proxmox",
		icon: SiProxmox,
		url: "https://www.proxmox.com/",
		core: true,
	},
	{
		name: "Uptime Kuma",
		icon: SiUptimekuma,
		url: "https://uptime.kuma.pet/",
	},
	{
		name: "Tailscale",
		icon: SiTailscale,
		url: "https://tailscale.com/",
		core: true,
	},
	{
		name: "Immich",
		icon: SiImmich,
		url: "https://immich.app/",
	},
	{
		name: "Discord Bot",
		icon: SiDiscorddotjs,
		url: "https://docs.discord.com/developers/bots/overview",
	},
];

const categories = [
	{ id: "all", label: "All skills", items: [] },
	{ id: "languages", label: "Languages", items: languagesList },
	{ id: "stack", label: "Development", items: stackList },
	{ id: "appSec", label: "AppSec", items: appSecList },
	{ id: "technologies", label: "Platforms & tools", items: technologiesList },
	{ id: "selfHosted", label: "Self-hosted", items: selfHostedList },
] as const;

const allSkills = categories
	.slice(1)
	.flatMap((category) => category.items.map((skill) => ({ ...skill, category: category.label })))
	.sort((a, b) => a.name.localeCompare(b.name));
const coreStack = allSkills.filter((skill) => skill.core).sort((a, b) => a.name.localeCompare(b.name));

function SkillTile({ skill, featured = false }: { skill: SkillItem; featured?: boolean }) {
	const className = `group relative block overflow-hidden rounded-md border border-foreground/15 bg-card p-2 sm:p-3 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-md ${featured ? "sm:min-w-35 sm:flex-1" : ""}`;
	const content = (
		<div className="flex flex-col gap-0.5">
			<div className="flex items-center justify-between gap-2">
				<div className="flex min-w-0 items-center gap-1">
					<span className="min-w-0 text-sm font-semibold text-card-foreground">{skill.name}</span>
					{skill.url && <FaArrowUpRightFromSquare className="size-3 shrink-0" aria-hidden="true" />}
				</div>
				<skill.icon className="size-4 shrink-0" aria-hidden="true" />
			</div>
			{skill.category && <span className="text-xs leading-none text-foreground">{skill.category}</span>}
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
	const sectionRef = useActiveSectionTitle(() => {
		document.title = "Febkosq8 - Skillset";
	});
	const [activeCategory, setActiveCategory] = useState("all");
	const activeCategoryLabel = categories.find((category) => category.id === activeCategory)?.label;
	const visibleSkills =
		activeCategory === "all" ? allSkills : allSkills.filter((skill) => skill.category === activeCategoryLabel);

	return (
		<div
			ref={sectionRef}
			className="skillset flex w-full min-h-fit-screen justify-center p-5"
			id="skillset"
			data-title-section
		>
			<div className="w-full max-w-6xl py-10">
				<div className="flex flex-col gap-5 border-b border-border pb-8">
					<div>
						<p className="text-sm font-semibold text-primary uppercase lg:text-base">
							<a
								href="#skillset"
								className="flex items-center gap-2 underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-hidden"
							>
								Skillset <FaTools />
							</a>
						</p>
						<h2
							className="mt-3 max-w-3xl text-3xl leading-tight font-semibold text-foreground lg:text-5xl"
							id="skillsetTitle"
						>
							<TypingAnimation
								strings={skillsetHeading}
								placeholder="What I work with"
								perTick={{ amount: 2, unit: "character" }}
							/>
						</h2>
					</div>
					<p className="max-w-3xl text-base leading-7 text-foreground/80 sm:text-lg lg:text-xl lg:leading-8">
						A practical toolkit for building web applications, testing their security, and shipping them reliably.
					</p>
				</div>

				<div className="mt-8 w-full">
					<Card hoverLift={false} className="mb-4 border-primary/60 bg-primary/15">
						<div className="mb-4 flex items-end justify-between gap-4">
							<div>
								<p className="text-xs font-semibold tracking-wide text-primary uppercase">Core stack</p>
								<h3 className="mt-1 text-lg font-semibold text-foreground">The tools I reach for most</h3>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
							{coreStack.map((skill) => (
								<SkillTile key={skill.name} skill={skill} featured />
							))}
						</div>
					</Card>

					<div className="mb-4 flex flex-wrap gap-2 pb-1" role="tablist" aria-label="Skill categories">
						{categories.map((category) => {
							const isActive = category.id === activeCategory;
							return (
								<Button
									key={category.id}
									variant={isActive ? "primary" : "outline-secondary"}
									type="button"
									role="tab"
									aria-selected={isActive}
									onClick={() => setActiveCategory(category.id)}
									className={`shrink-0 rounded-full px-3 py-2 text-sm ${isActive ? "border-primary" : "border-foreground/20 bg-background hover:border-primary hover:text-primary"}`}
								>
									{category.label}
								</Button>
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
