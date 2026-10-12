import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Button from "@feb/components/ui/Button";
import TypingAnimation from "@feb/components/ui/TypingAnimation";
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

type Particle = (typeof iconParticles)[number] & {
	id: number;
	color: string;
	x: number;
	y: number;
	vx: number;
	vy: number;
	rotation: number;
	spin: number;
};

interface IconBombProps {
	count?: number;
	popClickThreshold?: number;
}

interface ThresholdMotion {
	duration: number;
	shake: number;
	tilt: number;
	spin: number;
	reverseSpin: number;
}

function createParticles(count: number, idOffset = 0): Particle[] {
	const viewportWidth = typeof window === "undefined" ? 1440 : window.innerWidth;
	const viewportHeight = typeof window === "undefined" ? 900 : window.innerHeight;
	const particleCount = Math.max(0, Math.floor(count));

	return Array.from({ length: particleCount }, (_, index) => {
		const particleId = index + idOffset;
		const template = iconParticles[particleId % iconParticles.length];
		const horizontalSeed = (particleId * 0.61803398875) % 1;
		const verticalSeed = (particleId * 0.41421356237) % 1;
		const direction = particleId % 2 === 0 ? 1 : -1;

		return {
			...template,
			id: particleId,
			color: particleColors[Math.floor(Math.random() * particleColors.length)],
			x: (0.08 + horizontalSeed * 0.84) * viewportWidth,
			y: (0.08 + verticalSeed * 0.84) * viewportHeight,
			vx: direction * (24 + ((particleId * 13) % 25)),
			vy: -direction * (20 + ((particleId * 17) % 28)),
			rotation: 0,
			spin: direction * (18 + ((particleId * 11) % 28)),
		};
	});
}

function resolveParticleCollisions(particles: Particle[]) {
	for (let first = 0; first < particles.length; first += 1) {
		for (let second = first + 1; second < particles.length; second += 1) {
			const a = particles[first];
			const b = particles[second];
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

function formatElapsedTime(totalSeconds: number) {
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	const parts = [];

	if (minutes > 0) parts.push(`${minutes}m`);
	if (seconds > 0) parts.push(`${seconds}s`);

	return parts.join(" ") || "0s";
}

export default function IconBomb({ count = 10, popClickThreshold = 4 }: IconBombProps) {
	const isChaosRoute = typeof window !== "undefined" && window.location.pathname === "/chaos";
	const navigate = useNavigate();
	const [particles, setParticles] = useState<Particle[]>(() => createParticles(count));
	const [thresholdPoppingParticles, setThresholdPoppingParticles] = useState<Set<number>>(() => new Set());
	const [thresholdMotion, setThresholdMotion] = useState<Map<number, ThresholdMotion>>(() => new Map());
	const [chaosMode, setChaosMode] = useState(isChaosRoute);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [chaosElapsedSeconds, setChaosElapsedSeconds] = useState(0);
	const particlesRef = useRef(particles);
	const clickTimers = useRef(new Map<number, ReturnType<typeof setTimeout>>());
	const clickCounts = useRef(new Map<number, number>());
	const hasClickedIcon = useRef(false);
	const chaosModeRef = useRef(isChaosRoute);
	const chaosTimer = useRef<ReturnType<typeof setInterval> | null>(null);
	const completionRespawnTimer = useRef<ReturnType<typeof setInterval> | null>(null);
	const normalizedPopClickThreshold = Number.isFinite(popClickThreshold)
		? Math.max(1, Math.floor(popClickThreshold))
		: 6;
	const rules = useMemo(
		() => [
			`${count} CHARGES ESCAPED FROM A GREAT MYSTERY LAND.`,
			"THEY ARE FRAGMENTS OF A BROKEN STAR ENGINE.",
			"THE ENGINE KEPT DISTANT WORLDS IN ORBIT.",
			"LONG BEFORE THE ESCAPE, THE WORLDS WERE OUT OF SYNC.",
			"THEIR SEAS ROSE AT DIFFERENT TIMES.",
			"THEIR MOONS FORGOT WHICH WAY TO TURN.",
			"THE ORBITAL ARCHIVISTS BUILT THE STAR ENGINE.",
			"IT WAS NOT A WEAPON.",
			"IT WAS A PROMISE THAT EVERYTHING COULD RETURN.",
			"THE ENGINE STORED THE MEMORY OF EVERY ORBIT.",
			"THE CHARGES WERE MADE FROM THOSE MEMORIES.",
			"A CRACK IN THE SKY TAUGHT THE CHARGES HOW TO RUN.",
			"EVERY CAPTURE SEALS THE CRACK FOR ONE MORE NIGHT.",
			`CAPTURE A CHARGE WITH A ${normalizedPopClickThreshold}-HIT COMBO.`,
			`CURRENT OBJECTIVE :\nCAPTURE ALL ${count} CHARGES.`,
			"SELECT A CHARGE TO INITIATE THE ORBITAL SEALING PROTOCOL.",
		],
		[count, normalizedPopClickThreshold],
	);
	const credits = useMemo(
		() => [
			"MISSION COMPLETE",
			"ALL CHARGES HAVE BEEN CAPTURED",
			"THE ORBITAL SEALING PROTOCOL IS COMPLETE",
			"THE CRACK IS CLOSED",
			"THE GREAT MYSTERY LAND IS QUIET AGAIN",
			"THE CHARGES WERE FRAGMENTS OF A BROKEN STAR ENGINE",
			"THE ENGINE ONCE KEPT DISTANT WORLDS IN ORBIT",
			"WHEN THE SKY FOLDED, THE CHARGES FELL THROUGH THE CRACK",
			"THE GREAT MYSTERY LAND CAUGHT THEM",
			"AND TAUGHT THEM HOW TO RUN",
			"YOU ENTERED THE FIELD WITHOUT A MAP",
			"THE COMPUTER OPENED THE GATES",
			"TOGETHER, YOU CLOSED THE LOOP",
			"BUT THE LOOP IS SEALED, NOT HEALED",
			"THE ARCHIVISTS HAVE FOUND A MISSING ORBIT",
			"A WORLD ERASED FROM EVERY STAR MAP",
			"THE ENGINE IS TRYING TO RESTORE WHAT NO ONE REMEMBERS",
			"SOMETHING ON THE OTHER SIDE HEARD THE SEAL CLOSE",
			"SOMETHING ANSWERED WITH A SINGLE FLASH",
			"THE COMPUTER MARKED IT AS AN UNRESOLVED VARIABLE",
			"THE CHARGES MARKED IT AS A WARNING",
			"FOR TONIGHT, THE CRACK HOLDS",
			"FOR TONIGHT, THE CHARGES SLEEP",
			"THE NEXT GATE WILL NOT OPEN BY ACCIDENT",
			"THE NEXT ESCAPE MAY NOT BE SO FRIENDLY",
			"THANK YOU FOR YOUR SERVICE TO THIS UNIVERSE",
			"CREDITS",
			"WORLD BUILDING: ME",
			"FIELD NAVIGATION: YOU",
			"ORBITAL SIMULATION: COMPUTER",
			"COSMIC BACKDROP: UNIVERSE",
			"ARCHIVE CURATION: ME",
			"CHARGE RECOVERY: YOU",
			"MOTION CALCULATION: COMPUTER",
			"GRAVITY CONTROL: UNIVERSE",
			"CRACK CONTAINMENT: ME",
			"COMBO TESTING: YOU",
			"SIGNAL ANALYSIS: COMPUTER",
			"STARLIGHT PROVISION: UNIVERSE",
			"MISSION CONTROL: ME",
			"ESCAPE ROUTE SCOUTING: YOU",
			"TIMELINE STABILIZATION: COMPUTER",
			"COSMIC CONSEQUENCES: UNIVERSE",
			"STAR MAP DESIGN: ME",
			"FINAL APPROACH: YOU",
			"ERROR DETECTION: COMPUTER",
			"FINAL WARNING: UNIVERSE",
			"THANKS FOR PLAYING",
		],
		[],
	);

	useEffect(() => {
		const handleChaosCollapse = (event: Event) => {
			const control = (event as CustomEvent<ChaosControl>).detail ?? {};
			const targetCount = Number.isFinite(control.count) ? Math.max(0, Math.floor(control.count!)) : count;
			const targetState = control.state ?? "idle";
			const resetParticles = createParticles(targetCount);
			particlesRef.current = resetParticles;
			clickTimers.current.forEach((timer) => clearTimeout(timer));
			clickTimers.current.clear();
			clickCounts.current.clear();
			hasClickedIcon.current = targetState !== "idle";
			chaosModeRef.current = true;
			setChaosMode(true);
			setGameStarted(targetState !== "idle");
			setGameComplete(targetState === "complete");
			setChaosElapsedSeconds(0);
			setThresholdMotion(new Map());
			setThresholdPoppingParticles(new Set());
			setParticles(resetParticles);
			if (chaosTimer.current) clearInterval(chaosTimer.current);
			chaosTimer.current = null;
			if (completionRespawnTimer.current) clearInterval(completionRespawnTimer.current);
			completionRespawnTimer.current = null;
			if (targetState === "playing") {
				const startedAt = Date.now();
				chaosTimer.current = setInterval(() => {
					setChaosElapsedSeconds(Math.floor((Date.now() - startedAt) / 1000));
				}, 1000);
			}
		};

		window.addEventListener("chaos-collapse", handleChaosCollapse);
		return () => {
			window.removeEventListener("chaos-collapse", handleChaosCollapse);
			if (chaosTimer.current) clearInterval(chaosTimer.current);
		};
	}, [count]);

	const removeParticle = (id: number) => {
		const remaining = particlesRef.current.filter((particle) => particle.id !== id);
		particlesRef.current = remaining;
		clickCounts.current.delete(id);
		if (remaining.length === 0) {
			if (chaosTimer.current) clearInterval(chaosTimer.current);
			chaosTimer.current = null;
			if (completionRespawnTimer.current) clearInterval(completionRespawnTimer.current);
			const initialRespawnCount = Math.min(1, Math.max(0, Math.floor(count)));
			const resetParticles = createParticles(initialRespawnCount);
			particlesRef.current = resetParticles;
			clickCounts.current.clear();
			setThresholdMotion(new Map());
			setThresholdPoppingParticles(new Set());
			setParticles(resetParticles);
			setGameComplete(true);
			if (initialRespawnCount < count) {
				let respawnCount = initialRespawnCount;
				completionRespawnTimer.current = setInterval(() => {
					respawnCount += 1;
					const newParticle = createParticles(1, particlesRef.current.length)[0];
					const nextParticles = [...particlesRef.current, newParticle];
					particlesRef.current = nextParticles;
					setParticles(nextParticles);
					if (respawnCount >= count && completionRespawnTimer.current) {
						clearInterval(completionRespawnTimer.current);
						completionRespawnTimer.current = null;
					}
				}, 1000);
			}
			return;
		}
		setThresholdMotion((current) => {
			const next = new Map(current);
			next.delete(id);
			return next;
		});
		setParticles(remaining.map((particle) => ({ ...particle })));
	};

	const handleParticleClick = (id: number) => {
		if (gameComplete) return;

		if (chaosModeRef.current && !hasClickedIcon.current) {
			hasClickedIcon.current = true;
			setGameStarted(true);
			const startedAt = Date.now();
			const updateElapsedTime = () => {
				setChaosElapsedSeconds(Math.floor((Date.now() - startedAt) / 1000));
			};
			updateElapsedTime();
			chaosTimer.current = setInterval(updateElapsedTime, 1000);
		}
		const clickCount = (clickCounts.current.get(id) ?? 0) + 1;
		clickCounts.current.set(id, clickCount);
		const existingTimer = clickTimers.current.get(id);
		if (existingTimer) clearTimeout(existingTimer);
		const timer = setTimeout(() => {
			clickTimers.current.delete(id);
			const particle = particlesRef.current.find((currentParticle) => currentParticle.id === id);
			if (!particle) return;
			if (clickCount >= normalizedPopClickThreshold) {
				const spinDirection = Math.random() > 0.5 ? 1 : -1;
				const travelDirection = Math.random() > 0.5 ? 1 : -1;
				const motion: ThresholdMotion = {
					duration: 3000,
					shake: 4 + Math.floor(Math.random() * 10),
					tilt: -18 + Math.floor(Math.random() * 37),
					spin: spinDirection * (540 + Math.floor(Math.random() * 1080)),
					reverseSpin: spinDirection * -(540 + Math.floor(Math.random() * 1440)),
				};
				particle.vx = travelDirection * (Math.abs(particle.vx) + 40);
				particle.vy = -travelDirection * (Math.abs(particle.vy) + 40);
				particle.spin = 0;
				setParticles(particlesRef.current.map((currentParticle) => ({ ...currentParticle })));
				setThresholdMotion((current) => new Map(current).set(id, motion));
				setThresholdPoppingParticles((current) => new Set(current).add(id));
				const removalTimer = setTimeout(() => {
					setThresholdPoppingParticles((current) => {
						const next = new Set(current);
						next.delete(id);
						return next;
					});
					removeParticle(id);
				}, motion.duration);
				clickTimers.current.set(id, removalTimer);
				return;
			}
			particle.vx *= -1.5;
			particle.vy *= -1.5;
			particle.spin *= 3;
			setParticles(particlesRef.current.map((currentParticle) => ({ ...currentParticle })));
		}, 220);
		clickTimers.current.set(id, timer);
	};

	useEffect(() => {
		return () => {
			clickTimers.current.forEach((timer) => clearTimeout(timer));
			if (chaosTimer.current) clearInterval(chaosTimer.current);
			if (completionRespawnTimer.current) clearInterval(completionRespawnTimer.current);
		};
	}, []);

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
			const bottomInset = 0;
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
				const bottomBoundary = height - particle.radius - bottomInset;
				if (particle.y <= headerBottom + particle.radius || particle.y >= bottomBoundary) {
					particle.y = Math.max(headerBottom + particle.radius, Math.min(bottomBoundary, particle.y));
					particle.vy *= -1;
				}
			});
			resolveParticleCollisions(current);
			current.forEach((particle) => {
				const bottomBoundary = height - particle.radius - bottomInset;
				particle.x = Math.max(particle.radius, Math.min(width - particle.radius, particle.x));
				particle.y = Math.max(headerBottom + particle.radius, Math.min(bottomBoundary, particle.y));
			});
			setParticles(current.map((particle) => ({ ...particle })));
			frameId = requestAnimationFrame(tick);
		};
		frameId = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frameId);
	}, []);

	return (
		<>
			{chaosMode && !gameStarted && (
				<div className="chaos-rules" aria-live="polite">
					<TypingAnimation strings={rules} startWhenVisible={false} perTick={{ update: 2, unit: "character" }} />
				</div>
			)}
			{chaosMode && gameStarted && !gameComplete && (
				<div className="chaos-collapse-message" aria-live="polite">
					<div>{particles.length} charges remain</div>
					<div>{formatElapsedTime(chaosElapsedSeconds)} has gone by</div>
					<Button className="pointer-events-auto mt-3" variant="outline" size="sm" onClick={() => navigate("/")}>
						Give up
					</Button>
				</div>
			)}
			{chaosMode && gameComplete && (
				<div className="chaos-collapse-message chaos-collapse-message--complete" aria-live="polite">
					<TypingAnimation
						strings={credits}
						startWhenVisible={false}
						perTick={{ update: 2, unit: "character" }}
						loop={false}
					/>
					<Button className="pointer-events-auto mt-3" variant="outline" size="sm" onClick={() => navigate("/")}>
						Return home
					</Button>
				</div>
			)}
			<div className="fun-background__icons">
				{particles.map(({ Icon, ...particle }) => (
					<Button
						key={particle.id}
						type="button"
						variant="ghost"
						size="icon"
						aria-label="Interactive background icon"
						className={`fun-background__icon${thresholdPoppingParticles.has(particle.id) ? " fun-background__icon--threshold-popping" : ""}`}
						onClick={() => handleParticleClick(particle.id)}
						style={
							{
								"--icon-top": `${particle.y}px`,
								"--icon-left": `${particle.x}px`,
								"--icon-size": particle.size,
								"--icon-color": particle.color,
								"--icon-rotation": `${particle.rotation}deg`,
								"--threshold-duration": `${thresholdMotion.get(particle.id)?.duration ?? 2200}ms`,
								"--threshold-shake": `${thresholdMotion.get(particle.id)?.shake ?? 5}px`,
								"--threshold-tilt": `${thresholdMotion.get(particle.id)?.tilt ?? 0}deg`,
								"--threshold-spin": `${thresholdMotion.get(particle.id)?.spin ?? 720}deg`,
								"--threshold-reverse-spin": `${thresholdMotion.get(particle.id)?.reverseSpin ?? -720}deg`,
							} as React.CSSProperties
						}
					>
						<Icon />
					</Button>
				))}
			</div>
		</>
	);
}
