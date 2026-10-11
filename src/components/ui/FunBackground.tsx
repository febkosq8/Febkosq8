import { useEffect, useRef, useState } from "react";
import { BsEmojiSunglasses, BsLightningChargeFill } from "react-icons/bs";
import {
	FaCircle,
	FaCode,
	FaFire,
	FaGem,
	FaGlobe,
	FaLeaf,
	FaLightbulb,
	FaKeyboard,
	FaMoon,
	FaMusic,
	FaPuzzlePiece,
	FaRocket,
	FaSnowflake,
	FaSun,
	FaDice,
} from "react-icons/fa6";
import { FiAperture, FiCoffee } from "react-icons/fi";
import { GiTrophy, GiUnicorn } from "react-icons/gi";
import { MdAutoAwesome, MdOutlineSportsEsports } from "react-icons/md";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { TbPalette } from "react-icons/tb";
import { FcDvdLogo } from "react-icons/fc";

const iconParticles = [
	{ Icon: GiUnicorn, size: "2.2rem", radius: 22 },
	{ Icon: BsLightningChargeFill, size: "2.8rem", radius: 26 },
	{ Icon: BsEmojiSunglasses, size: "2rem", radius: 20 },
	{ Icon: FaRocket, size: "3rem", radius: 30 },
	{ Icon: MdOutlineSportsEsports, size: "2.6rem", radius: 28 },
	{ Icon: FaCode, size: "2rem", radius: 20 },
	{ Icon: GiTrophy, size: "2.4rem", radius: 24 },
	{ Icon: FaFire, size: "2.3rem", radius: 23 },
	{ Icon: FaMusic, size: "2.1rem", radius: 21 },
	{ Icon: FaCircle, size: "1.4rem", radius: 15 },
	{ Icon: RiNeteaseCloudMusicLine, size: "2.5rem", radius: 25 },
	{ Icon: FcDvdLogo, size: "2.4rem", radius: 24 },
	{ Icon: FaGem, size: "2.2rem", radius: 22 },
	{ Icon: FaGlobe, size: "2.4rem", radius: 24 },
	{ Icon: FaLeaf, size: "2.1rem", radius: 21 },
	{ Icon: FaMoon, size: "2.3rem", radius: 23 },
	{ Icon: TbPalette, size: "2.6rem", radius: 26 },
	{ Icon: FaPuzzlePiece, size: "2.3rem", radius: 23 },
	{ Icon: FaSnowflake, size: "2.4rem", radius: 24 },
	{ Icon: FaSun, size: "2.7rem", radius: 27 },
	{ Icon: MdAutoAwesome, size: "2.5rem", radius: 25 },
	{ Icon: FiAperture, size: "2.4rem", radius: 24 },
	{ Icon: FaDice, size: "2.3rem", radius: 23 },
	{ Icon: FaKeyboard, size: "2.2rem", radius: 22 },
	{ Icon: FaLightbulb, size: "2.5rem", radius: 25 },
	{ Icon: FiCoffee, size: "2.4rem", radius: 24 },
];

const particleColors = [
	"hsl(338 82% 58%)",
	"hsl(47 92% 48%)",
	"hsl(173 54% 38%)",
	"hsl(283 64% 58%)",
	"hsl(190 70% 40%)",
	"hsl(24 95% 53%)",
	"hsl(142 58% 40%)",
	"hsl(240 65% 58%)",
	"hsl(200 72% 48%)",
	"hsl(195 80% 52%)",
	"hsl(12 70% 42%)",
];

type IconTemplate = (typeof iconParticles)[number];
type Particle = IconTemplate & {
	color: string;
	x: number;
	y: number;
	vx: number;
	vy: number;
	rotation: number;
	spin: number;
};

function createParticles(count: number): Particle[] {
	const viewportWidth = typeof window === "undefined" ? 1440 : window.innerWidth;
	const viewportHeight = typeof window === "undefined" ? 900 : window.innerHeight;
	const particleCount = Math.max(0, Math.floor(count));

	return Array.from({ length: particleCount }, (_, index) => {
		const template = iconParticles[index % iconParticles.length];
		const horizontalSeed = (index * 0.61803398875) % 1;
		const verticalSeed = (index * 0.41421356237) % 1;
		const direction = index % 2 === 0 ? 1 : -1;

		return {
			...template,
			color: particleColors[Math.floor(Math.random() * particleColors.length)],
			x: (0.08 + horizontalSeed * 0.84) * viewportWidth,
			y: (0.08 + verticalSeed * 0.84) * viewportHeight,
			vx: direction * (24 + ((index * 13) % 25)),
			vy: -direction * (20 + ((index * 17) % 28)),
			rotation: 0,
			spin: direction * (18 + ((index * 11) % 28)),
		};
	});
}

interface FunBackgroundProps {
	iconCount?: number;
}

export default function FunBackground({ iconCount = 10 }: FunBackgroundProps) {
	const [particles, setParticles] = useState<Particle[]>(() => createParticles(iconCount));
	const particlesRef = useRef(particles);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let frameId = 0;
		let previousTime = performance.now();
		const tick = (time: number) => {
			const delta = Math.min((time - previousTime) / 1000, 0.04);
			previousTime = time;
			const current = particlesRef.current;
			const width = window.innerWidth;
			const height = window.innerHeight;
			const headerBottom =
				document.querySelector<HTMLElement>("[data-site-header]")?.getBoundingClientRect().bottom ?? 0;

			current.forEach((particle) => {
				particle.x += particle.vx * delta;
				particle.y += particle.vy * delta;
				particle.rotation += particle.spin * delta;
				if (particle.x <= particle.radius || particle.x >= width - particle.radius) {
					particle.x = Math.max(particle.radius, Math.min(width - particle.radius, particle.x));
					particle.vx *= -1;
				}
				if (particle.y <= headerBottom + particle.radius || particle.y >= height - particle.radius) {
					particle.y = Math.max(headerBottom + particle.radius, Math.min(height - particle.radius, particle.y));
					particle.vy *= -1;
				}
			});

			for (let first = 0; first < current.length; first += 1) {
				for (let second = first + 1; second < current.length; second += 1) {
					const a = current[first];
					const b = current[second];
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

			setParticles(current.map((particle) => ({ ...particle })));
			frameId = requestAnimationFrame(tick);
		};
		frameId = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frameId);
	}, []);

	return (
		<div className="fun-background" aria-hidden="true">
			<div className="fun-background__wash" />
			<div className="fun-background__icons">
				{particles.map(({ Icon, ...particle }, index) => (
					<span
						key={index}
						className="fun-background__icon"
						style={
							{
								"--icon-top": `${particle.y}px`,
								"--icon-left": `${particle.x}px`,
								"--icon-size": particle.size,
								"--icon-color": particle.color,
								"--icon-rotation": `${particle.rotation}deg`,
							} as React.CSSProperties
						}
					>
						<Icon />
					</span>
				))}
			</div>
		</div>
	);
}
