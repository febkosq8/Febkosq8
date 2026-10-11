import Button from "@feb/components/ui/Button";
import TypingAnimation from "@feb/components/ui/TypingAnimation";

const selfDescriptions = [
	"Security Engineer",
	"Software Developer",
	"Coder",
	"Problem Solver",
	"Homelab Enthusiast",
	"Gamer",
];

export default function Intro() {
	return (
		<div className="intro flex min-h-fit-screen items-center p-5 text-foreground" id="intro">
			<div className="w-full max-w-5xl">
				<p className="mb-4 text-sm font-semibold text-primary uppercase">Hello, I'm</p>
				<h1 className="max-w-4xl text-5xl leading-none font-semibold sm:text-6xl lg:text-8xl">Febin Koshy Philip</h1>
				<p className="mt-6 flex items-baseline gap-3 text-2xl lg:text-4xl">
					<span className="text-primary">A</span>
					<TypingAnimation pauseDelay={2000} strings={selfDescriptions} />
				</p>
				<p className="mt-8 text-base leading-7 text-muted-foreground sm:text-lg">
					I enjoy solving problems and building applications that turn ideas into practical solutions.
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
