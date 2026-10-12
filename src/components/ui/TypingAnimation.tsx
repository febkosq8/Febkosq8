import { useEffect, useRef, useState } from "react";

type PerTickUnit = "character" | "word";
type PostStringFinish = "clear" | "newline" | "comma";

function getPostStringSeparator(postStringFinish: PostStringFinish) {
	if (postStringFinish === "newline") return "\n";
	if (postStringFinish === "comma") return ", ";
	return "";
}

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
	postStringFinish?: PostStringFinish;
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
	postStringFinish = "clear",
}: TypingAnimationProps) {
	const typingDelay = delay?.typing ?? 110;
	const deletingDelay = delay?.deleting ?? 55;
	const pauseDelay = delay?.pause ?? 1800;
	const tickUpdate = perTick?.update ?? 1;
	const tickAmount = Number.isFinite(tickUpdate) ? Math.max(1, Math.floor(tickUpdate)) : 1;
	const tickUnit = perTick?.unit ?? "character";
	const [currentText, setCurrentText] = useState("");
	const [finishedStrings, setFinishedStrings] = useState<string[]>([]);
	const [isVisible, setIsVisible] = useState(!startWhenVisible);
	const containerRef = useRef<HTMLDivElement | HTMLSpanElement>(null);
	const setContainerRef = (element: HTMLDivElement | HTMLSpanElement | null) => {
		containerRef.current = element;
	};
	const stringIndexRef = useRef(0);
	const characterIndexRef = useRef(0);
	const delayRemainingRef = useRef(0);
	const delayOutputRef = useRef("");
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
		const accumulate = postStringFinish !== "clear";
		stringIndexRef.current = 0;
		characterIndexRef.current = 0;
		delayRemainingRef.current = 0;
		delayOutputRef.current = "";
		deletingRef.current = false;
		setCurrentText("");
		setFinishedStrings([]);

		const animate = () => {
			if (!loop && stringIndexRef.current >= strings.length) return;

			const string = strings[stringIndexRef.current];
			const delayMatch = string.match(/^<--delay-(\d+)-->$/);
			if (delayMatch) {
				if (delayRemainingRef.current === 0) {
					delayRemainingRef.current = Number(delayMatch[1]);
					delayOutputRef.current = "";
				}
				if (delayRemainingRef.current <= 0) {
					stringIndexRef.current += 1;
					timeout = setTimeout(animate, typingDelay);
					return;
				}
				delayOutputRef.current += `${delayOutputRef.current ? " " : ""}.`;
				setCurrentText(delayOutputRef.current);
				delayRemainingRef.current -= 1;
				if (delayRemainingRef.current === 0) {
					stringIndexRef.current += 1;
				}
				timeout = setTimeout(animate, 1000);
				return;
			}
			if (accumulate && string === "<--clearAll-->") {
				setFinishedStrings([]);
				setCurrentText("");
				stringIndexRef.current += 1;
				characterIndexRef.current = 0;
				timeout = setTimeout(animate, pauseDelay);
				return;
			}

			if (!deletingRef.current) {
				characterIndexRef.current = getNextIndex(string, characterIndexRef.current, tickAmount, tickUnit, 1);
				setCurrentText(string.slice(0, characterIndexRef.current));
				deletingRef.current =
					!accumulate &&
					characterIndexRef.current === string.length &&
					(loop || stringIndexRef.current < strings.length - 1);
				if (!accumulate && characterIndexRef.current === string.length && !deletingRef.current && !loop) return;
				if (accumulate && characterIndexRef.current === string.length) {
					setFinishedStrings((current) => [...current, string]);
					setCurrentText("");
					stringIndexRef.current += 1;
					characterIndexRef.current = 0;
				}
			} else {
				characterIndexRef.current = getNextIndex(string, characterIndexRef.current, tickAmount, tickUnit, -1);
				setCurrentText(string.slice(0, characterIndexRef.current));
				if (characterIndexRef.current === 0) {
					deletingRef.current = false;
					stringIndexRef.current = (stringIndexRef.current + 1) % strings.length;
				}
			}

			const delay =
				characterIndexRef.current >= string.length || (accumulate && characterIndexRef.current === 0)
					? pauseDelay
					: deletingRef.current
						? deletingDelay
						: typingDelay;
			timeout = setTimeout(animate, delay);
		};

		animate();

		return () => clearTimeout(timeout);
	}, [deletingDelay, isVisible, loop, pauseDelay, postStringFinish, strings, tickAmount, tickUnit, typingDelay]);

	const isAccumulating = postStringFinish !== "clear";
	const separator = getPostStringSeparator(postStringFinish);
	const rollOffset = finishedStrings.reduce((lineCount, string) => lineCount + string.split("\n").length, 0);

	if (isAccumulating) {
		return (
			<div
				ref={setContainerRef}
				className="chaos-credits__roll"
				style={{ "--roll-offset": rollOffset } as React.CSSProperties}
			>
				<div className="chaos-credits__line">
					{finishedStrings.join(separator)}
					{currentText && `${finishedStrings.length > 0 ? separator : ""}${currentText}`}
				</div>
			</div>
		);
	}

	return (
		<span ref={setContainerRef} className="inline-grid align-top">
			<span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-pre-line">
				{placeholder ?? strings[0]}
			</span>
			<span className="col-start-1 row-start-1 whitespace-pre-line">{currentText}</span>
		</span>
	);
}
