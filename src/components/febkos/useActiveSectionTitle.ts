import { useEffect, useRef } from "react";

export default function useActiveSectionTitle(setTitle: () => void) {
	const sectionRef = useRef<HTMLDivElement>(null);
	const setTitleRef = useRef(setTitle);
	setTitleRef.current = setTitle;

	useEffect(() => {
		const section = sectionRef.current;
		const main = section?.closest("main");
		if (!section || !main) return;

		const updateTitleFromScroll = () => {
			const mainBounds = main.getBoundingClientRect();
			const midpoint = mainBounds.top + mainBounds.height / 2;
			const activeSection = Array.from(main.querySelectorAll<HTMLElement>("[data-title-section]")).find((candidate) => {
				const bounds = candidate.getBoundingClientRect();
				return bounds.top <= midpoint && bounds.bottom > midpoint;
			});

			if (!activeSection) {
				document.title = "Febkosq8";
			} else if (activeSection === section) {
				setTitleRef.current();
			}
		};

		updateTitleFromScroll();
		main.addEventListener("scroll", updateTitleFromScroll, { passive: true });

		return () => main.removeEventListener("scroll", updateTitleFromScroll);
	}, []);

	return sectionRef;
}
