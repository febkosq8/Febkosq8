import Header from "@feb/components/febkos/Header";
import Febkos from "@feb/pages/Febkos";
import WrongPage from "@feb/pages/WrongPage";
import FunBackground from "@feb/components/ui/FunBackground";
import IconBomb from "@feb/components/ui/IconBomb";
import { Button, navigateToHashOnLoad, updateHashOnScroll } from "@febkosq8/arc";
import { cx } from "@rinzai/zen";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const sectionIds = ["intro", "about", "skillset", "projects", "socials"];

function App() {
	const { hash, pathname } = useLocation();
	const sectionsRef = useRef<HTMLElement[]>([]);
	const [navigationAvailability, setNavigationAvailability] = useState({ up: false, down: false });

	useLayoutEffect(() => {
		document.title = "Febkosq8";
	}, []);

	useLayoutEffect(() => {
		if (pathname.replace(/\/$/, "") === "/cv" && window.location.hash !== "#socials") {
			window.history.replaceState(
				window.history.state,
				"",
				`${window.location.pathname}${window.location.search}#socials`,
			);
		}
	}, [pathname]);

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
		}
		document.documentElement.classList.add("fun");

		return () => {
			document.documentElement.classList.toggle("fun", funModeBeforeChaos);
		};
	}, [pathname]);

	useEffect(() => {
		const main = document.querySelector("main");
		if (!main) return;

		return updateHashOnScroll({
			container: main,
			sectionIds,
			hashFirstSection: false,
			onActiveChange: (activeSectionIndex, sections) => {
				sectionsRef.current = sections;
				setNavigationAvailability({
					up: activeSectionIndex > 0,
					down: activeSectionIndex >= 0 && activeSectionIndex < sections.length - 1,
				});
			},
		});
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

	useEffect(() => navigateToHashOnLoad(), [pathname]);

	return (
		<div className="relative flex h-screen w-screen flex-col overflow-hidden bg-background text-foreground">
			<FunBackground iconCount={30} showIcons={pathname !== "/chaos"} />
			<Header />
			<main
				className={cx("relative z-10 min-h-0 flex-1", pathname === "/chaos" ? "overflow-hidden" : "overflow-y-auto")}
			>
				<Routes>
					<Route path="/" element={<Febkos />} />
					<Route path="/cv" element={<Febkos />} />
					<Route path="/chaos" element={<IconBomb count={50} />} />
					<Route path="*" element={<WrongPage />} />
				</Routes>
			</main>
			{(navigationAvailability.up || navigationAvailability.down) && (
				<div className="fixed right-5 bottom-5 z-50 hidden flex-col gap-2 md:flex">
					{navigationAvailability.up && (
						<Button
							variant="outline-secondary"
							size="icon-md"
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
							variant="outline-secondary"
							size="icon-md"
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
