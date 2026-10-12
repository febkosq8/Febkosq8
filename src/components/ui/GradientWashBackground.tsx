import { useEffect, useRef, useState } from "react";

const gradientColors = [
	"hsl(338 82% 58% / 0.22)",
	"hsl(47 92% 58% / 0.22)",
	"hsl(173 54% 45% / 0.22)",
	"hsl(200 72% 48% / 0.22)",
];

type GradientParticle = {
	id: number;
	x: number;
	y: number;
	anchorX: number;
	anchorY: number;
	scale: number;
};

const edgePositions = [
	{ x: 18, y: 82 },
	{ x: 82, y: 82 },
	{ x: 82, y: 18 },
	{ x: 18, y: 18 },
];
const journeyDurationMs = 6000;
const returnHandoffProgress = 0.9;

function createGradientParticles(): GradientParticle[] {
	return [
		{ id: 0, x: 15, y: 85, anchorX: 15, anchorY: 85, scale: 1 },
		{ id: 1, x: 85, y: 85, anchorX: 85, anchorY: 85, scale: 1 },
		{ id: 2, x: 85, y: 15, anchorX: 85, anchorY: 15, scale: 1 },
		{ id: 3, x: 15, y: 15, anchorX: 15, anchorY: 15, scale: 1 },
	];
}

export default function GradientWashBackground() {
	const [gradients, setGradients] = useState<GradientParticle[]>(() => createGradientParticles());
	const gradientsRef = useRef(gradients);
	const journeyRef = useRef({ index: 0, startedAt: 0 });

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		journeyRef.current.startedAt = performance.now();
		let frameId = 0;
		const tick = (time: number) => {
			const journey = journeyRef.current;
			const elapsed = time - journey.startedAt;
			const handoffDuration = journeyDurationMs * (1 + returnHandoffProgress);
			if (elapsed >= handoffDuration) {
				journey.index = (journey.index + 1) % gradientsRef.current.length;
				journey.startedAt = time;
			}

			const activeElapsed = time - journey.startedAt;
			const isReturning = activeElapsed >= journeyDurationMs;
			const linearProgress = Math.min(
				(isReturning ? activeElapsed - journeyDurationMs : activeElapsed) / journeyDurationMs,
				1,
			);
			const progress = linearProgress * linearProgress * (3 - 2 * linearProgress);
			const activeGradient = gradientsRef.current[journey.index];
			const edgePosition = edgePositions[journey.index];
			const activeX = isReturning
				? edgePosition.x + (activeGradient.anchorX - edgePosition.x) * progress
				: activeGradient.anchorX + (edgePosition.x - activeGradient.anchorX) * progress;
			const activeY = isReturning
				? edgePosition.y + (activeGradient.anchorY - edgePosition.y) * progress
				: activeGradient.anchorY + (edgePosition.y - activeGradient.anchorY) * progress;
			const activeScale = 1 + Math.sin((activeElapsed / handoffDuration) * Math.PI) * 0.18;
			const nextGradients = gradientsRef.current.map((gradient, index) =>
				index === journey.index
					? { ...gradient, x: activeX, y: activeY, scale: activeScale }
					: { ...gradient, x: gradient.anchorX, y: gradient.anchorY, scale: 1 },
			);
			gradientsRef.current = nextGradients;
			setGradients(nextGradients);
			frameId = requestAnimationFrame(tick);
		};
		frameId = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frameId);
	}, []);

	return (
		<div className="fun-background__wash">
			{gradientColors.map((color, index) => (
				<span
					key={color}
					className="fun-background__gradient"
					style={
						{
							"--gradient-color": color,
							"--gradient-left": `${gradients[index].x}%`,
							"--gradient-top": `${gradients[index].y}%`,
							"--gradient-scale": gradients[index].scale,
						} as React.CSSProperties
					}
				/>
			))}
		</div>
	);
}
