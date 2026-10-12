import GradientWashBackground from "@feb/components/ui/GradientWashBackground";
import IconBomb from "@feb/components/ui/IconBomb";
import { useEffect, useState } from "react";

interface FunBackgroundProps {
	iconCount?: number;
	showIcons?: boolean;
}

export default function FunBackground({ iconCount = 10, showIcons = true }: FunBackgroundProps) {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(
		() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

		updatePreference();
		mediaQuery.addEventListener("change", updatePreference);
		return () => mediaQuery.removeEventListener("change", updatePreference);
	}, []);

	return (
		<div className="fun-background">
			<GradientWashBackground />
			{showIcons && !prefersReducedMotion && <IconBomb count={iconCount} />}
		</div>
	);
}
