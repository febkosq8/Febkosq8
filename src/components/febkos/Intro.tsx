import { TypingAnimation } from "@febkosq8/arc";
import ButtonLink from "@feb/components/ui/ButtonLink";
import useActiveSectionTitle from "@feb/components/febkos/useActiveSectionTitle";

const introName = ["Febin Koshy Philip"];
const selfDescriptions = [
	"Security Engineer",
	"Software Developer",
	"Coder",
	"Builder",
	"Breaker",
	"Problem Solver",
	"Homelab Enthusiast",
	"Gamer",
];

export default function Intro() {
	const sectionRef = useActiveSectionTitle(() => {
		document.title = "Febkosq8";
	});

	return (
		<div
			ref={sectionRef}
			className="intro flex w-full min-h-fit-screen items-center justify-center p-5 text-foreground"
			id="intro"
			data-title-section
		>
			<div className="w-full max-w-6xl">
				<p className="mb-4 text-sm font-semibold text-primary uppercase lg:text-base">Hello, I'm</p>
				<h1 className="max-w-4xl text-5xl leading-none font-semibold sm:text-6xl lg:text-8xl">
					<TypingAnimation
						strings={introName}
						placeholder="Febin Koshy Philip"
						perTick={{ amount: 2, unit: "character" }}
					/>
				</h1>
				<p className="mt-6 flex items-baseline gap-3 text-2xl text-primary lg:text-4xl">
					<span className="text-foreground">A</span>
					<TypingAnimation strings={selfDescriptions} trailingDot />
				</p>
				<p className="mt-8 text-base leading-7 text-foreground/80 sm:text-lg lg:text-xl lg:leading-8 xl:whitespace-nowrap">
					I build things to understand them, turning complicated problems into practical tools and curiosity into better
					systems.
				</p>
				<div className="mt-8 flex flex-wrap gap-3">
					<ButtonLink href="#projects">View projects</ButtonLink>
					<ButtonLink href="#about" variant="outline">
						About me
					</ButtonLink>
				</div>
			</div>
		</div>
	);
}
