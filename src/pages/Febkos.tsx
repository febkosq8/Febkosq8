import About from "@feb/components/febkos/About";
import Intro from "@feb/components/febkos/Intro";
import Projects from "@feb/components/febkos/Projects";
import Skillset from "@feb/components/febkos/Skillset";
import Socials from "@feb/components/febkos/Socials";

export default function Febkos() {
	return (
		<div className="febkos flex flex-col items-center justify-center">
			<Intro />
			<About />
			<Skillset />
			<Projects />
			<Socials />
		</div>
	);
}
