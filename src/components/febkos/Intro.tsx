import TypingAnimation from "@feb/components/ui/TypingAnimation";

const skills = ["Security Engineer", "Software Developer", "Coder", "Problem Solver", "Homelab Enthusiast", "Gamer"];

export default function Intro() {
	return (
		<div
			className="intro flex min-h-fit-screen flex-col items-center justify-center p-5 text-center text-3xl whitespace-pre-wrap lg:text-5xl"
			id="intro"
		>
			<p>Hello</p>
			<p>I'm Febin Koshy Philip</p>
			<p>
				A <TypingAnimation pauseDelay={2000} strings={skills} />
			</p>
		</div>
	);
}
