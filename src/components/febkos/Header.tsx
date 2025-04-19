import LinkPill from "@feb/components/ui/LinkPill";
import ThemeSwitcher from "@feb/components/ui/ThemeSwitcher";
import { useEffect, useState } from "react";

export default function Header() {
	const [currHref, setCurrHref] = useState(window.location.hash);
	useEffect(() => {
		window.addEventListener("hashchange", () => {
			setCurrHref(window.location.hash);
		});
	}, []);
	return (
		<div className="sticky top-0 flex h-16 w-full items-center justify-between border-b-2 bg-background px-16 text-2xl">
			<a href="/" className="font-bold">
				Febkosq8
			</a>
			<div className="flex items-center gap-4">
				<LinkPill active={currHref === "#about"} href="#about">
					About
				</LinkPill>
				<LinkPill active={currHref === "#skillset"} href="#skillset">
					Skillset
				</LinkPill>
				<LinkPill active={currHref === "#projects"} href="#projects">
					Projects
				</LinkPill>
				<LinkPill active={currHref === "#socials"} href="#socials">
					Socials
				</LinkPill>
				<ThemeSwitcher />
			</div>
		</div>
	);
}
