import { useEffect, useRef, useState } from "react";

type PerTickUnit = "character" | "word";

interface TypingAnimationProps {
	strings: string[];
	placeholder?: string;
	perTick?: {
		update?: number;
		unit?: PerTickUnit;
	};
	delay?: {
		typing?: number;
		deleting?: number;
		pause?: number;
	};
	startWhenVisible?: boolean;
	pauseWhenHidden?: boolean;
	loop?: boolean;
	visibilityThreshold?: number;
}

function getNextIndex(text: string, index: number, amount: number, unit: PerTickUnit, direction: 1 | -1) {
	if (unit === "character") {
		return Math.max(0, Math.min(text.length, index + amount * direction));
	}

	const wordBoundaries = [...text.matchAll(/\S+\s*/g)].map((match) => match.index! + match[0].length);
	let nextIndex = index;

	for (let step = 0; step < amount; step += 1) {
		if (direction === 1) {
			nextIndex = wordBoundaries.find((boundary) => boundary > nextIndex) ?? text.length;
		} else {
			nextIndex = [...wordBoundaries].reverse().find((boundary) => boundary < nextIndex) ?? 0;
		}
	}

	return nextIndex;
}

export default function TypingAnimation({
	strings,
	placeholder,
	perTick,
	delay,
	startWhenVisible = true,
	pauseWhenHidden = true,
	loop = strings.length > 1,
	visibilityThreshold = 0,
}: TypingAnimationProps) {
	const typingDelay = delay?.typing ?? 110;
	const deletingDelay = delay?.deleting ?? 55;
	const pauseDelay = delay?.pause ?? 1800;
	const tickUpdate = perTick?.update ?? 1;
	const tickAmount = Number.isFinite(tickUpdate) ? Math.max(1, Math.floor(tickUpdate)) : 1;
	const tickUnit = perTick?.unit ?? "character";
	const [currentText, setCurrentText] = useState("");
	const [isVisible, setIsVisible] = useState(!startWhenVisible);
	const containerRef = useRef<HTMLSpanElement>(null);
	const stringIndexRef = useRef(0);
	const characterIndexRef = useRef(0);
	const deletingRef = useRef(false);

	useEffect(() => {
		if (!startWhenVisible) return;

		const element = containerRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				} else if (pauseWhenHidden) {
					setIsVisible(false);
				}
			},
			{ root: element.closest("main"), threshold: visibilityThreshold },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, [pauseWhenHidden, startWhenVisible, visibilityThreshold]);

	useEffect(() => {
		if (!isVisible || strings.length === 0) {
			return;
		}

		let timeout: ReturnType<typeof setTimeout>;

		const animate = () => {
			if (!loop && stringIndexRef.current >= strings.length) return;

			const string = strings[stringIndexRef.current];

			if (!deletingRef.current) {
				characterIndexRef.current = getNextIndex(string, characterIndexRef.current, tickAmount, tickUnit, 1);
				setCurrentText(string.slice(0, characterIndexRef.current));
				deletingRef.current =
					characterIndexRef.current === string.length && (loop || stringIndexRef.current < strings.length - 1);
			} else {
				characterIndexRef.current = getNextIndex(string, characterIndexRef.current, tickAmount, tickUnit, -1);
				setCurrentText(string.slice(0, characterIndexRef.current));
				if (characterIndexRef.current === 0) {
					deletingRef.current = false;
					stringIndexRef.current = (stringIndexRef.current + 1) % strings.length;
				}
			}

			const delay =
				characterIndexRef.current >= string.length ? pauseDelay : deletingRef.current ? deletingDelay : typingDelay;
			timeout = setTimeout(animate, delay);
		};

		animate();

		return () => clearTimeout(timeout);
	}, [deletingDelay, isVisible, loop, pauseDelay, strings, tickAmount, tickUnit, typingDelay]);

	return (
		<span ref={containerRef} className="inline-grid align-top">
			<span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-pre-line">
				{placeholder ?? strings[0]}
			</span>
			<span className="col-start-1 row-start-1 whitespace-pre-line">{currentText}</span>
		</span>
	);
}
