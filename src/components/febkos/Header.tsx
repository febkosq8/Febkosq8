import { Button, LinkPill, Menu, ThemeSwitcher } from "@febkosq8/arc";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { ImExit } from "react-icons/im";

interface ChaosStats {
	charges: number;
	elapsed: string;
	active: boolean;
}

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
		// Start animation letter by letter after 500ms
		const startDelay = setTimeout(() => {
			// Start each letter with a 750ms delay between them
			text.split("").forEach((_, index) => {
				setTimeout(() => {
					setAnimatingLetters((prev) => [...prev, index]);
				}, index * 750);
			});
		}, 500);

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
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [currHref, setCurrHref] = useState(window.location.hash);
	const [chaosStats, setChaosStats] = useState<ChaosStats | null>(null);
	const isChaos = pathname === "/chaos";

	useEffect(() => {
		window.addEventListener("hashchange", () => {
			setCurrHref(window.location.hash);
		});
	}, []);

	useEffect(() => {
		const handleChaosStats = (event: Event) => {
			setChaosStats((event as CustomEvent<ChaosStats>).detail);
		};
		window.addEventListener("chaos-stats", handleChaosStats);
		return () => window.removeEventListener("chaos-stats", handleChaosStats);
	}, []);

	const navigationItems = [
		{ href: "#about", label: "About" },
		{ href: "#skillset", label: "Skillset" },
		{ href: "#projects", label: "Projects" },
		{ href: "#socials", label: "Socials" },
	];

	return (
		<div
			data-site-header
			className="relative z-50 flex w-full shrink-0 items-center justify-between border border-b-2 bg-background px-2 py-0.5 text-sm sm:px-8 sm:py-1 sm:text-lg lg:text-2xl"
		>
			<a href="/" className="font-bold">
				<AnimatedText text="Febkosq8" />
			</a>
			{isChaos && (
				<div className="chaos-header-center static left-auto flex translate-x-0 items-center gap-1 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:gap-2">
					<span className="whitespace-nowrap text-[0.625rem] font-bold uppercase tracking-[0.04em] sm:text-xs sm:tracking-[0.08em]">
						Chaos Control
					</span>
					{chaosStats?.active && (
						<>
							<span aria-hidden="true" className="h-5 w-px bg-border" />
							<div className="chaos-header-stats" aria-live="polite">
								<span>
									<span className="text-primary">{chaosStats.charges}</span> charges remain
								</span>
								<span>
									<span className="text-primary">{chaosStats.elapsed}</span> elapsed
								</span>
							</div>
						</>
					)}
					<span aria-hidden="true" className="h-5 w-px bg-border" />
					<Button
						className="chaos-header-exit"
						type="button"
						variant="outline-secondary"
						size="icon-md"
						aria-label="Exit chaos mission"
						title="Exit chaos mission"
						onClick={() => navigate("/")}
					>
						<ImExit aria-hidden="true" />
					</Button>
				</div>
			)}
			<div className="flex items-center gap-2">
				{!isChaos && (
					<>
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
							<Menu className="text-sm sm:text-xl" buttonText={<FaBars />}>
								{navigationItems.map((item) => (
									<Menu.Item key={item.label} asChild>
										<a
											href={item.href}
											className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-primary ${
												currHref === item.href ? "font-semibold text-primary" : "text-foreground"
											}`}
										>
											{item.label}
										</a>
									</Menu.Item>
								))}
							</Menu>
						</div>
					</>
				)}

				<ThemeSwitcher />
			</div>
		</div>
	);
}
