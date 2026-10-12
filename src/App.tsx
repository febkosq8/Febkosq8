import Header from "@feb/components/febkos/Header";
import Febkos from "@feb/pages/Febkos";
import WrongPage from "@feb/pages/WrongPage";
import Button from "@feb/components/ui/Button";
import FunBackground from "@feb/components/ui/FunBackground";
import IconBomb from "@feb/components/ui/IconBomb";
import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const sectionTitles: Record<string, string> = {
	intro: "",
	about: "About",
	skillset: "Skillset",
	projects: "Projects",
	socials: "Socials",
};

function setDocumentTitle(pathname: string, sectionId?: string) {
	const sectionTitle = sectionId === undefined ? undefined : sectionTitles[sectionId];
	const normalizedPath = pathname.replace(/\/$/, "") || "/";

	document.title = sectionTitle
		? `Febkosq8 - ${sectionTitle}`
		: normalizedPath === "/chaos"
			? "Febkosq8 - Chaos"
			: normalizedPath === "/" || normalizedPath === "/cv"
				? "Febkosq8"
				: "404 | Febkosq8";
}

function App() {
	const { hash, pathname } = useLocation();
	const pendingHashNavigation = useRef<string | null>(null);
	const sectionsRef = useRef<HTMLElement[]>([]);
	const [navigationAvailability, setNavigationAvailability] = useState({ up: false, down: false });

	useEffect(() => {
		setDocumentTitle(pathname, hash.toLowerCase().slice(1));
	}, [hash, pathname]);

	useEffect(() => {
		const triggerChaos = (control?: ChaosControl) => {
			document.documentElement.classList.add("chaos-collapse");
			window.dispatchEvent(new CustomEvent<ChaosControl>("chaos-collapse", { detail: control }));
			if (control === undefined) {
				console.info(
					'[chaos] Game reset. Use window["chaos-game"]({ count, state }) to control it.\n' +
						"state: idle | playing | complete\n" +
						'example: window["chaos-game"]({ count: 10, state: "playing" })',
				);
			}
		};

		window["chaos-game"] = triggerChaos;
		return () => {
			if (window["chaos-game"] === triggerChaos) delete window["chaos-game"];
		};
	}, []);

	useEffect(() => {
		if (pathname !== "/chaos") {
			document.documentElement.classList.remove("chaos-collapse");
			return;
		}
		const funModeBeforeChaos = document.documentElement.classList.contains("fun");

		if (window.location.hash) {
			window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}`);
			setDocumentTitle(pathname);
		}
		document.documentElement.classList.add("fun");
		const timeoutId = window.setTimeout(() => {
			window["chaos-game"]?.({});
		}, 0);

		return () => {
			window.clearTimeout(timeoutId);
			document.documentElement.classList.toggle("fun", funModeBeforeChaos);
		};
	}, [pathname]);

	useEffect(() => {
		pendingHashNavigation.current = hash.toLowerCase().slice(1) || null;

		const main = document.querySelector("main");
		if (!main) return;

		const sections = Object.keys(sectionTitles)
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);
		sectionsRef.current = sections;

		const updateTitleFromScroll = () => {
			const mainBounds = main.getBoundingClientRect();
			const midpoint = mainBounds.top + mainBounds.height / 2;
			const activeSection = sections.find((section) => {
				const bounds = section.getBoundingClientRect();
				return bounds.top <= midpoint && bounds.bottom > midpoint;
			});
			const activeSectionIndex = activeSection ? sections.indexOf(activeSection) : -1;
			setNavigationAvailability({
				up: activeSectionIndex > 0,
				down: activeSectionIndex >= 0 && activeSectionIndex < sections.length - 1,
			});

			setDocumentTitle(pathname, activeSection?.id);

			if (!activeSection) return;
			if (pendingHashNavigation.current === activeSection.id) {
				pendingHashNavigation.current = null;
			}
			if (activeSection.id === "intro" && pendingHashNavigation.current) return;

			const nextHash = activeSection.id === "intro" ? "" : `#${activeSection.id}`;
			if (window.location.hash === nextHash) return;

			window.history.replaceState(
				window.history.state,
				"",
				`${window.location.pathname}${window.location.search}${nextHash}`,
			);
			window.dispatchEvent(new HashChangeEvent("hashchange"));
		};

		updateTitleFromScroll();
		main.addEventListener("scroll", updateTitleFromScroll, { passive: true });

		return () => main.removeEventListener("scroll", updateTitleFromScroll);
	}, [hash, pathname]);

	const navigateAdjacentSection = (direction: "up" | "down") => {
		const main = document.querySelector("main");
		const sections = sectionsRef.current;
		if (!main || sections.length === 0) return;

		const midpoint = main.getBoundingClientRect().top + main.clientHeight / 2;
		const activeSectionIndex = sections.findIndex((section) => {
			const bounds = section.getBoundingClientRect();
			return bounds.top <= midpoint && bounds.bottom > midpoint;
		});
		const nextIndex = activeSectionIndex + (direction === "down" ? 1 : -1);

		sections[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	useEffect(() => {
		if (window.location.pathname.replace(/\/$/, "") === "/cv" && window.location.hash !== "#socials") {
			window.history.replaceState(
				window.history.state,
				"",
				`${window.location.pathname}${window.location.search}#socials`,
			);
		}

		const intervalId = setInterval(() => {
			if (window.location.hash) {
				try {
					const element = document.querySelector(window.location.hash);
					if (element) {
						element.scrollIntoView({ behavior: "smooth" });
						clearInterval(intervalId);
					}
				} catch (e) {
					console.error(`Invalid hash in URL: ${window.location.hash}`, e);
				}
			} else {
				clearInterval(intervalId);
			}
		}, 500);
	}, []);

	return (
		<div className="relative flex h-screen w-screen flex-col overflow-hidden bg-background text-slate-600 dark:text-slate-100">
			<FunBackground iconCount={25} showIcons={pathname !== "/chaos"} />
			<Header />
			<main
				className={pathname === "/chaos" ? "relative z-10 h-screen overflow-hidden" : "relative z-10 overflow-y-auto"}
			>
				<Routes>
					<Route path="/" element={<Febkos />} />
					<Route path="/cv" element={<Febkos />} />
					<Route path="/chaos" element={<IconBomb count={40} />} />
					<Route path="*" element={<WrongPage />} />
				</Routes>
			</main>
			{(navigationAvailability.up || navigationAvailability.down) && (
				<div className="fixed right-5 bottom-5 z-50 hidden flex-col gap-2 md:flex">
					{navigationAvailability.up && (
						<Button
							variant="outline"
							size="icon"
							className="rounded-full bg-background/90 shadow-lg backdrop-blur-sm"
							onClick={() => navigateAdjacentSection("up")}
							aria-label="Go to previous section"
							title="Go to previous section"
						>
							<FaChevronUp aria-hidden="true" />
						</Button>
					)}
					{navigationAvailability.down && (
						<Button
							variant="outline"
							size="icon"
							className="rounded-full bg-background/90 shadow-lg backdrop-blur-sm"
							onClick={() => navigateAdjacentSection("down")}
							aria-label="Go to next section"
							title="Go to next section"
						>
							<FaChevronDown aria-hidden="true" />
						</Button>
					)}
				</div>
			)}
		</div>
	);
}

export default App;
