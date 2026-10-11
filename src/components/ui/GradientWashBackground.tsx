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
	vx: number;
	vy: number;
	scale: number;
	scaleVelocity: number;
	radius: number;
};

function createGradientParticles(): GradientParticle[] {
	return [
		{ id: 0, x: 14, y: 86, anchorX: 14, anchorY: 86, vx: 1.4, vy: -1, scale: 1, scaleVelocity: 0.08, radius: 10 },
		{ id: 1, x: 86, y: 86, anchorX: 86, anchorY: 86, vx: -1.2, vy: -1.1, scale: 1, scaleVelocity: -0.07, radius: 10 },
		{ id: 2, x: 86, y: 14, anchorX: 86, anchorY: 14, vx: -1, vy: 1.2, scale: 1, scaleVelocity: 0.06, radius: 10 },
		{ id: 3, x: 14, y: 14, anchorX: 14, anchorY: 14, vx: 1.2, vy: 1, scale: 1, scaleVelocity: -0.09, radius: 10 },
	];
}

function resolveGradientCollisions(gradients: GradientParticle[]) {
	for (let first = 0; first < gradients.length; first += 1) {
		for (let second = first + 1; second < gradients.length; second += 1) {
			const a = gradients[first];
			const b = gradients[second];
			const dx = b.x - a.x;
			const dy = b.y - a.y;
			const distance = Math.hypot(dx, dy);
			const minimumDistance = a.radius + b.radius;
			if (distance === 0 || distance >= minimumDistance) continue;
			const normalX = dx / distance;
			const normalY = dy / distance;
			const relativeVelocity = (b.vx - a.vx) * normalX + (b.vy - a.vy) * normalY;
			if (relativeVelocity < 0) {
				const impulseX = relativeVelocity * normalX;
				const impulseY = relativeVelocity * normalY;
				a.vx += impulseX;
				a.vy += impulseY;
				b.vx -= impulseX;
				b.vy -= impulseY;
			}
			const separation = (minimumDistance - distance) / 2;
			a.x -= normalX * separation;
			a.y -= normalY * separation;
			b.x += normalX * separation;
			b.y += normalY * separation;
		}
	}
}

export default function GradientWashBackground() {
	const [gradients, setGradients] = useState<GradientParticle[]>(() => createGradientParticles());
	const gradientsRef = useRef(gradients);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let frameId = 0;
		let previousTime = performance.now();
		const tick = (time: number) => {
			const delta = Math.min((time - previousTime) / 1000, 0.04);
			previousTime = time;
			const current = gradientsRef.current;
			current.forEach((gradient) => {
				gradient.vx += (gradient.anchorX - gradient.x) * 0.8 * delta;
				gradient.vy += (gradient.anchorY - gradient.y) * 0.8 * delta;
				gradient.vx *= 0.995;
				gradient.vy *= 0.995;
				gradient.scale += gradient.scaleVelocity * delta;
				if (gradient.scale <= 0.82 || gradient.scale >= 1.18) {
					gradient.scale = Math.max(0.82, Math.min(1.18, gradient.scale));
					gradient.scaleVelocity *= -1;
				}
				gradient.x += gradient.vx * delta;
				gradient.y += gradient.vy * delta;
				if (gradient.x <= gradient.radius || gradient.x >= 100 - gradient.radius) {
					gradient.x = Math.max(gradient.radius, Math.min(100 - gradient.radius, gradient.x));
					gradient.vx *= -1;
				}
				if (gradient.y <= gradient.radius || gradient.y >= 100 - gradient.radius) {
					gradient.y = Math.max(gradient.radius, Math.min(100 - gradient.radius, gradient.y));
					gradient.vy *= -1;
				}
			});
			resolveGradientCollisions(current);
			setGradients(current.map((gradient) => ({ ...gradient })));
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
