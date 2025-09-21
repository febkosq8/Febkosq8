import LinkPill from "@feb/components/ui/LinkPill";
import { Menu } from "@feb/components/ui/Menu";
import ThemeSwitcher from "@feb/components/ui/ThemeSwitcher";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function AnimatedText({ text }: { text: string }) {
	const [colorIndex, setColorIndex] = useState(0);
	const [animatingLetters, setAnimatingLetters] = useState<number[]>([]);
	const colors = [
		"text-red-500",
		"text-blue-500",
		"text-green-500",
		"text-yellow-500",
		"text-purple-500",
		"text-pink-500",
		"text-cyan-500",
		"text-indigo-500",
		"text-orange-500",
		"text-teal-500",
		"text-rose-500",
		"text-lime-500",
		"text-fuchsia-500",
		"text-emerald-500",
		"text-violet-500",
	];

	useEffect(() => {
		// Start animation letter by letter after 5000ms
		const startDelay = setTimeout(() => {
			// Start each letter with a 750ms delay between them
			text.split("").forEach((_, index) => {
				setTimeout(() => {
					setAnimatingLetters((prev) => [...prev, index]);
				}, index * 750);
			});
		}, 5000);

		return () => clearTimeout(startDelay);
	}, [text]);

	useEffect(() => {
		if (animatingLetters.length === 0) return;

		const interval = setInterval(() => {
			setColorIndex((prev) => (prev + 1) % colors.length);
		}, 1500); // Change letter color every 1500ms

		return () => clearInterval(interval);
	}, [colors.length, animatingLetters.length]);

	return (
		<span>
			{text.split("").map((letter, index) => (
				<span
					key={index}
					className={`transition-colors duration-500 ${
						animatingLetters.includes(index) ? colors[(colorIndex + index) % colors.length] : "text-foreground"
					}`}
				>
					{letter}
				</span>
			))}
		</span>
	);
}

export default function Header() {
	const [currHref, setCurrHref] = useState(window.location.hash);
	useEffect(() => {
		window.addEventListener("hashchange", () => {
			setCurrHref(window.location.hash);
		});
	}, []);

	const navigationItems = [
		{ href: "#about", label: "About" },
		{ href: "#skillset", label: "Skillset" },
		{ href: "#projects", label: "Projects" },
		{ href: "#socials", label: "Socials" },
	];

	return (
		<div className="z-50 flex w-full items-center justify-between border border-b-2 bg-background px-8 py-1 text-lg lg:text-2xl">
			<a href="/" className="font-bold">
				<AnimatedText text="Febkosq8" />
			</a>
			<div className="flex items-center gap-2">
				{/* Desktop Navigation - Hidden on small screens */}
				<div className="hidden items-center gap-2 md:flex">
					{navigationItems.map((item) => (
						<LinkPill key={item.label} active={currHref === item.href} href={item.href}>
							{item.label}
						</LinkPill>
					))}
				</div>

				{/* Mobile Navigation - Dropdown menu for small screens */}
				<div className="md:hidden">
					<Menu buttonText={<FontAwesomeIcon icon={faBars} />}>
						{navigationItems.map((item) => (
							<Menu.Item key={item.label} asChild>
								<a
									href={item.href}
									className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-primary ${
										currHref === item.href ? "font-bold text-primary" : "text-foreground"
									}`}
								>
									{item.label}
								</a>
							</Menu.Item>
						))}
					</Menu>
				</div>

				<ThemeSwitcher />
			</div>
		</div>
	);
}
