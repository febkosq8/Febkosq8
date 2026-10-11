import Button from "@feb/components/ui/Button";
import TypingAnimation from "@feb/components/ui/TypingAnimation";

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
	return (
		<div className="intro flex w-full min-h-fit-screen items-center justify-center p-5 text-foreground" id="intro">
			<div className="w-full max-w-6xl">
				<p className="mb-4 text-sm font-semibold text-primary uppercase lg:text-base">Hello, I'm</p>
				<h1 className="max-w-4xl text-5xl leading-none font-semibold sm:text-6xl lg:text-8xl">
					<TypingAnimation
						strings={["Febin Koshy Philip"]}
						placeholder="Febin Koshy Philip"
						perTick={{ update: 2, unit: "character" }}
					/>
				</h1>
				<p className="mt-6 flex items-baseline gap-3 text-2xl lg:text-4xl">
					<span className="text-primary">A</span>
					<TypingAnimation strings={selfDescriptions} />
				</p>
				<p className="mt-8 text-base leading-7 text-foreground/70 sm:text-lg lg:text-xl lg:leading-8 xl:whitespace-nowrap">
					I build things to understand them, turning complicated problems into practical tools and curiosity into better
					systems.
				</p>
				<div className="mt-8 flex flex-wrap gap-3">
					<Button asChild>
						<a href="#projects">View projects</a>
					</Button>
					<Button asChild variant="outline">
						<a href="#about">About me</a>
					</Button>
				</div>
			</div>
		</div>
	);
}
