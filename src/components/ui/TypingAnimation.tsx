import { useEffect, useState } from "react";

interface TypingAnimationProps {
	strings: string[];
	typingDelay?: number;
	deletingDelay?: number;
	pauseDelay?: number;
}

export default function TypingAnimation({
	strings,
	typingDelay = 110,
	deletingDelay = 55,
	pauseDelay = 1800,
}: TypingAnimationProps) {
	const [currentText, setCurrentText] = useState("");

	useEffect(() => {
		if (strings.length === 0) {
			return;
		}

		let stringIndex = 0;
		let characterIndex = 0;
		let deleting = false;
		let timeout: ReturnType<typeof setTimeout>;

		const animate = () => {
			const string = strings[stringIndex];

			if (!deleting) {
				characterIndex += 1;
				setCurrentText(string.slice(0, characterIndex));
				deleting = characterIndex === string.length;
			} else {
				characterIndex -= 1;
				setCurrentText(string.slice(0, characterIndex));
				if (characterIndex === 0) {
					deleting = false;
					stringIndex = (stringIndex + 1) % strings.length;
				}
			}

			const delay = characterIndex === string.length ? pauseDelay : deleting ? deletingDelay : typingDelay;
			timeout = setTimeout(animate, delay);
		};

		animate();

		return () => clearTimeout(timeout);
	}, [deletingDelay, pauseDelay, strings, typingDelay]);

	return <>{currentText}</>;
}
