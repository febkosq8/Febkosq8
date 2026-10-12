import { useEffect, useMemo, useRef, useState } from "react";
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

const minimumPlayableWidth = 320;
const minimumPlayableHeight = 480;
const minimumPlayableArea = minimumPlayableWidth * minimumPlayableHeight;
const playableAreaPerIcon = 180 * 180;
const iconSpawnAnimation = {
	intervalMs: 600,
	durationMs: 1000,
} as const;
const iconCapture = {
	requiredClicks: 4,
	durationMs: 2000,
	responseDelayMs: 220,
} as const;
const particleClickShakeDurationMs = 420;
const gameplayElapsedUpdateIntervalMs = 300;

function getPlayableDimensions() {
	const headerBottom = document.querySelector<HTMLElement>("[data-site-header]")?.getBoundingClientRect().bottom ?? 0;
	return {
		width: window.innerWidth,
		height: Math.max(0, window.innerHeight - headerBottom),
	};
}

function getPlayableArea() {
	const { width, height } = getPlayableDimensions();
	return width * height;
}

function isViewportTooSmall() {
	const { width, height } = getPlayableDimensions();
	return width < minimumPlayableWidth || height < minimumPlayableHeight || width * height < minimumPlayableArea;
}

function getVisibleParticleLimit(availableCount: number) {
	if (availableCount <= 0) return 0;
	return Math.min(Math.floor(getPlayableArea() / playableAreaPerIcon), availableCount);
}

function randomBetween(minimum: number, maximum: number) {
	return minimum + Math.random() * (maximum - minimum);
}

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
	const headerBottom =
		typeof document === "undefined"
			? 0
			: (document.querySelector<HTMLElement>("[data-site-header]")?.getBoundingClientRect().bottom ?? 0);
	const particleCount = Math.max(0, Math.floor(count));

	return Array.from({ length: particleCount }, (_, index) => {
		const particleId = index + idOffset;
		const template = iconParticles[Math.floor(Math.random() * iconParticles.length)];
		const direction = Math.random() > 0.5 ? 1 : -1;

		return {
			...template,
			id: particleId,
			color: particleColors[Math.floor(Math.random() * particleColors.length)],
			x: randomBetween(template.radius, Math.max(template.radius, viewportWidth - template.radius)),
			y: randomBetween(
				headerBottom + template.radius,
				Math.max(headerBottom + template.radius, viewportHeight - template.radius),
			),
			vx: direction * randomBetween(24, 49),
			vy: randomBetween(-48, 48),
			rotation: randomBetween(0, 360),
			spin: direction * randomBetween(18, 46),
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

export default function IconBomb({ count = 10 }: IconBombProps) {
	const isChaosRoute = typeof window !== "undefined" && window.location.pathname === "/chaos";
	useEffect(() => {
		if (isChaosRoute) document.title = "Febkosq8 - Chaos Control";
	}, [isChaosRoute]);
	const [funModeEnabled, setFunModeEnabled] = useState(
		() => typeof document !== "undefined" && document.documentElement.classList.contains("fun"),
	);
	const [particles, setParticles] = useState<Particle[]>(() => createParticles(count));
	const [thresholdPoppingParticles, setThresholdPoppingParticles] = useState<Set<number>>(() => new Set());
	const [clickedParticles, setClickedParticles] = useState<Map<number, number>>(() => new Map());
	const [thresholdMotion, setThresholdMotion] = useState<Map<number, ThresholdMotion>>(() => new Map());
	const [chaosMode, setChaosMode] = useState(isChaosRoute);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [handlingClickIds, setHandlingClickIds] = useState<Set<number>>(() => new Set());
	const [dialogueResetKey, setDialogueResetKey] = useState(0);
	const [enteringParticles, setEnteringParticles] = useState<Set<number>>(() => new Set());
	const [visibleParticleCount, setVisibleParticleCount] = useState(0);
	const visibleParticleCountRef = useRef(0);
	const [viewportTooSmall, setViewportTooSmall] = useState(false);
	const [chaosElapsedSeconds, setChaosElapsedSeconds] = useState(0);
	const particlesRef = useRef(particles);
	const handlingClickIdsRef = useRef(new Set<number>());
	const clickTimers = useRef(new Map<number, ReturnType<typeof setTimeout>>());
	const clickCounts = useRef(new Map<number, number>());
	const hasClickedIcon = useRef(false);
	const chaosModeRef = useRef(isChaosRoute);
	const viewportTooSmallRef = useRef(false);
	const chaosTimer = useRef<ReturnType<typeof setInterval> | null>(null);
	const completionRespawnTimer = useRef<ReturnType<typeof setInterval> | null>(null);
	const enteringParticleTimers = useRef(new Map<number, ReturnType<typeof setTimeout>>());
	const clickShakeTimers = useRef(new Map<number, ReturnType<typeof setTimeout>>());
	const pointerActivatedParticles = useRef(new Set<number>());
	const preludeRevealTimer = useRef<ReturnType<typeof setInterval> | null>(null);
	const setVisibleCount = (nextCount: number) => {
		visibleParticleCountRef.current = nextCount;
		setVisibleParticleCount(nextCount);
	};
	const clearClickTimers = () => {
		clickTimers.current.forEach((timer) => clearTimeout(timer));
		clickTimers.current.clear();
	};
	const startClickHandling = (id: number) => {
		if (handlingClickIdsRef.current.has(id)) return false;
		const nextHandlingClickIds = new Set(handlingClickIdsRef.current);
		nextHandlingClickIds.add(id);
		handlingClickIdsRef.current = nextHandlingClickIds;
		setHandlingClickIds(nextHandlingClickIds);
		return true;
	};
	const finishClickHandling = (id: number) => {
		if (!handlingClickIdsRef.current.has(id)) return;
		const nextHandlingClickIds = new Set(handlingClickIdsRef.current);
		nextHandlingClickIds.delete(id);
		handlingClickIdsRef.current = nextHandlingClickIds;
		setHandlingClickIds(nextHandlingClickIds);
	};
	const clearChaosTimers = () => {
		if (chaosTimer.current) clearInterval(chaosTimer.current);
		if (completionRespawnTimer.current) clearInterval(completionRespawnTimer.current);
		chaosTimer.current = null;
		completionRespawnTimer.current = null;
	};
	const setParticleState = (nextParticles: Particle[]) => {
		particlesRef.current = nextParticles;
		setParticles(nextParticles);
	};
	const resetParticleEffects = () => {
		setClickedParticles(new Map());
		setThresholdMotion(new Map());
		setThresholdPoppingParticles(new Set());
	};
	const markParticleClicked = (id: number) => {
		setClickedParticles((current) => {
			const next = new Map(current);
			next.set(id, (next.get(id) ?? 0) + 1);
			return next;
		});
		const existingTimer = clickShakeTimers.current.get(id);
		if (existingTimer) clearTimeout(existingTimer);
		const timer = setTimeout(() => {
			clickShakeTimers.current.delete(id);
			setClickedParticles((current) => {
				const next = new Map(current);
				next.delete(id);
				return next;
			});
		}, particleClickShakeDurationMs);
		clickShakeTimers.current.set(id, timer);
	};
	const markParticlesEntering = (ids: number[]) => {
		setEnteringParticles((current) => new Set([...current, ...ids]));
		ids.forEach((id) => {
			const existingTimer = enteringParticleTimers.current.get(id);
			if (existingTimer) clearTimeout(existingTimer);
			const timer = setTimeout(() => {
				enteringParticleTimers.current.delete(id);
				setEnteringParticles((current) => {
					const next = new Set(current);
					next.delete(id);
					return next;
				});
			}, iconSpawnAnimation.durationMs);
			enteringParticleTimers.current.set(id, timer);
		});
	};
	const startIconSpawn = (targetCount: number) => {
		if (preludeRevealTimer.current) clearInterval(preludeRevealTimer.current);
		const maximumCount = Math.max(0, Math.floor(targetCount));
		const visibleLimit = getVisibleParticleLimit(maximumCount);
		let revealedCount = Math.min(1, visibleLimit);
		const firstParticle = particlesRef.current[0];
		if (firstParticle) markParticlesEntering([firstParticle.id]);
		setVisibleCount(revealedCount);
		if (revealedCount >= visibleLimit) return;
		preludeRevealTimer.current = setInterval(() => {
			revealedCount += 1;
			const particle = particlesRef.current[revealedCount - 1];
			if (particle) markParticlesEntering([particle.id]);
			setVisibleCount(revealedCount);
			if (revealedCount >= visibleLimit && preludeRevealTimer.current) {
				clearInterval(preludeRevealTimer.current);
				preludeRevealTimer.current = null;
			}
		}, iconSpawnAnimation.intervalMs);
	};

	useEffect(() => {
		if (isChaosRoute || !funModeEnabled) return;
		startIconSpawn(count);
		return () => {
			if (preludeRevealTimer.current) clearInterval(preludeRevealTimer.current);
		};
	}, [count, funModeEnabled, isChaosRoute]);

	useEffect(() => {
		if (typeof document === "undefined") return;
		const observer = new MutationObserver(() => {
			setFunModeEnabled(document.documentElement.classList.contains("fun"));
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
		return () => observer.disconnect();
	}, []);
	const prelude = useMemo(
		() => [
			"<--delay-2-->",
			"TRANSMISSION INCOMING",
			"<--delay-2-->",
			"TRANSMISSION RECEIVED FROM THE GREAT MYSTERY LAND.",
			`${count} CHARGES ARE MOVING THROUGH THE FIELD.`,
			"THEY ARE FRAGMENTS OF A BROKEN STAR ENGINE.",
			"THE ENGINE ONCE KEPT DISTANT WORLDS IN ORBIT.",
			"<--delay-2-->",
			"THE WORLDS FELL OUT OF SYNC",
			"<--delay-2-->",
			"THEIR SEAS ROSE AT DIFFERENT TIMES.",
			"THEIR MOONS FORGOT WHICH WAY TO TURN.",
			"THE ORBITAL ARCHIVISTS BUILT THE ENGINE TO RESTORE THE PATTERN.",
			"IT WAS NOT A WEAPON.",
			"IT WAS A PROMISE THAT EVERYTHING COULD RETURN",
			"<--delay-2-->",
			"THEN A CRACK OPENED IN THE SKY",
			"<--delay-2-->",
			"THE CHARGES LEARNED HOW TO RUN",
			"<--delay-2-->",
			"EVERY CAPTURE SEALS THE CRACK FOR ONE MORE NIGHT.",
			"<--delay-6-->",
			"<--clearAll-->",
			"FIELD CONTROL TRANSFERRED TO YOU.",
			`OBJECTIVE :\nCAPTURE ALL ${count} CHARGES.`,
			`${iconCapture.requiredClicks} CLICKS SEAL A CHARGE.`,
			"SELECT A CHARGE TO BEGIN.",
		],
		[count],
	);
	const credits = useMemo(
		() => [
			"MISSION COMPLETE",
			`ALL ${count} CHARGES HAVE BEEN CAPTURED`,
			"THE ORBITAL SEALING PROTOCOL IS COMPLETE",
			"THE CRACK IS CLOSED",
			"THE GREAT MYSTERY LAND IS QUIET AGAIN",
			"YOU ENTERED THE FIELD WITHOUT A MAP",
			"THE COMPUTER OPENED THE GATES",
			"YOU FOUND THE CHARGES",
			"TOGETHER, YOU CLOSED THE LOOP",
			"BUT THE LOOP IS SEALED, NOT HEALED",
			"THE ARCHIVISTS HAVE FOUND A MISSING ORBIT",
			"A WORLD ERASED FROM EVERY STAR MAP",
			"THE ENGINE IS TRYING TO RESTORE WHAT NO ONE REMEMBERS",
			"<--delay-3-->",
			"SOMETHING ON THE OTHER SIDE HEARD THE SEAL CLOSE",
			"<--delay-2-->",
			"SOMETHING ANSWERED WITH A SINGLE FLASH",
			"<--delay-2-->",
			"THE COMPUTER MARKED IT AS AN UNRESOLVED VARIABLE",
			"THE CHARGES MARKED IT AS A WARNING",
			"FOR TONIGHT, THE CRACK HOLDS",
			"FOR TONIGHT, THE CHARGES SLEEP",
			"THE NEXT GATE WILL NOT OPEN BY ACCIDENT",
			"THE NEXT ESCAPE MAY NOT BE SO FRIENDLY",
			"THANK YOU FOR YOUR SERVICE TO THIS UNIVERSE",
			"<--delay-6-->",
			"<--clearAll-->",
			"<--delay-2-->",
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
			"<--delay-6-->",
			"<--clearAll-->",
			"THANKS FOR PLAYING",
		],
		[count],
	);

	useEffect(() => {
		const handleChaosCollapse = (event: Event) => {
			const control = (event as CustomEvent<ChaosControl>).detail ?? {};
			const targetCount = Number.isFinite(control.count) ? Math.max(0, Math.floor(control.count!)) : count;
			const targetState = control.state ?? "idle";
			const viewportIsTooSmall = isViewportTooSmall();
			const resetParticles = createParticles(targetCount);
			setDialogueResetKey((current) => current + 1);
			handlingClickIdsRef.current = new Set();
			setHandlingClickIds(new Set());
			viewportTooSmallRef.current = viewportIsTooSmall;
			setParticleState(resetParticles);
			clearClickTimers();
			clickCounts.current.clear();
			hasClickedIcon.current = targetState !== "idle";
			chaosModeRef.current = true;
			setChaosMode(true);
			setGameStarted(!viewportIsTooSmall && targetState !== "idle");
			setGameComplete(!viewportIsTooSmall && targetState === "complete");
			setViewportTooSmall(viewportIsTooSmall);
			setChaosElapsedSeconds(0);
			resetParticleEffects();
			if (targetState === "idle" && !viewportIsTooSmall) {
				startIconSpawn(targetCount);
			} else {
				if (preludeRevealTimer.current) clearInterval(preludeRevealTimer.current);
				setVisibleCount(viewportIsTooSmall ? 0 : getVisibleParticleLimit(targetCount));
				markParticlesEntering(resetParticles.map((particle) => particle.id));
			}
			if (viewportIsTooSmall) setParticles([]);
			clearChaosTimers();
			if (!viewportIsTooSmall && targetState === "playing") {
				const startedAt = Date.now();
				chaosTimer.current = setInterval(() => {
					setChaosElapsedSeconds(Math.floor((Date.now() - startedAt) / 1000));
				}, gameplayElapsedUpdateIntervalMs);
			}
		};

		window.addEventListener("chaos-collapse", handleChaosCollapse);
		return () => {
			window.removeEventListener("chaos-collapse", handleChaosCollapse);
			if (chaosTimer.current) clearInterval(chaosTimer.current);
		};
	}, [count]);

	useEffect(() => {
		const handleViewportResize = () => {
			if (!chaosModeRef.current) {
				setVisibleCount(getVisibleParticleLimit(particlesRef.current.length));
				return;
			}

			window["chaos-game"]?.({});
		};

		window.addEventListener("resize", handleViewportResize);
		return () => window.removeEventListener("resize", handleViewportResize);
	}, []);

	const removeParticle = (id: number) => {
		const remaining = particlesRef.current.filter((particle) => particle.id !== id);
		particlesRef.current = remaining;
		clickCounts.current.delete(id);
		if (remaining.length === 0) {
			clearChaosTimers();
			const initialRespawnCount = Math.min(1, Math.max(0, Math.floor(count)));
			const resetParticles = createParticles(initialRespawnCount);
			setParticleState(resetParticles);
			clickCounts.current.clear();
			resetParticleEffects();
			markParticlesEntering(resetParticles.map((particle) => particle.id));
			setGameComplete(true);
			if (initialRespawnCount < count) {
				let respawnCount = initialRespawnCount;
				completionRespawnTimer.current = setInterval(() => {
					respawnCount += 1;
					const newParticle = createParticles(1, particlesRef.current.length)[0];
					const nextParticles = [...particlesRef.current, newParticle];
					setParticleState(nextParticles);
					markParticlesEntering([newParticle.id]);
					if (respawnCount >= count && completionRespawnTimer.current) {
						clearInterval(completionRespawnTimer.current);
						completionRespawnTimer.current = null;
					}
				}, iconSpawnAnimation.intervalMs);
			}
			return;
		}
		setThresholdMotion((current) => {
			const next = new Map(current);
			next.delete(id);
			return next;
		});
		const nextVisibleCount = getVisibleParticleLimit(remaining.length);
		if (remaining.length >= visibleParticleCount && remaining[nextVisibleCount - 1]) {
			markParticlesEntering([remaining[nextVisibleCount - 1].id]);
		}
		setVisibleCount(nextVisibleCount);
		setParticleState(remaining.map((particle) => ({ ...particle })));
	};

	const handleParticleClick = (id: number) => {
		if (gameComplete || !startClickHandling(id)) return;
		markParticleClicked(id);

		if (chaosModeRef.current && !hasClickedIcon.current) {
			hasClickedIcon.current = true;
			setGameStarted(true);
			if (preludeRevealTimer.current) clearInterval(preludeRevealTimer.current);
			const hiddenParticles = particlesRef.current.slice(visibleParticleCount);
			markParticlesEntering(hiddenParticles.map((particle) => particle.id));
			setVisibleCount(getVisibleParticleLimit(particlesRef.current.length));
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
			if (!particle) {
				finishClickHandling(id);
				return;
			}
			const launchAngle = Math.random() * Math.PI * 2;
			const launchSpeed = randomBetween(260, 620);
			const spinIntensity = Math.min(clickCount, 3);
			particle.vx = Math.cos(launchAngle) * launchSpeed;
			particle.vy = Math.sin(launchAngle) * launchSpeed;
			particle.spin = (Math.random() > 0.5 ? 1 : -1) * randomBetween(120, 360) * spinIntensity;
			if (clickCount >= iconCapture.requiredClicks) {
				const spinDirection = Math.random() > 0.5 ? 1 : -1;
				const motion: ThresholdMotion = {
					duration: iconCapture.durationMs,
					shake: 4 + Math.floor(Math.random() * 10),
					tilt: -18 + Math.floor(Math.random() * 37),
					spin: spinDirection * (540 + Math.floor(Math.random() * 1080)),
					reverseSpin: spinDirection * -(540 + Math.floor(Math.random() * 1440)),
				};
				setParticleState(particlesRef.current.map((currentParticle) => ({ ...currentParticle })));
				setThresholdMotion((current) => new Map(current).set(id, motion));
				setThresholdPoppingParticles((current) => new Set(current).add(id));
				const removalTimer = setTimeout(() => {
					setThresholdPoppingParticles((current) => {
						const next = new Set(current);
						next.delete(id);
						return next;
					});
					removeParticle(id);
					finishClickHandling(id);
				}, motion.duration);
				clickTimers.current.set(id, removalTimer);
				return;
			}
			particle.vx *= -1.15;
			setParticleState(particlesRef.current.map((currentParticle) => ({ ...currentParticle })));
			const unlockTimer = setTimeout(
				() => {
					clickTimers.current.delete(id);
					finishClickHandling(id);
				},
				Math.max(0, particleClickShakeDurationMs - iconCapture.responseDelayMs),
			);
			clickTimers.current.set(id, unlockTimer);
		}, iconCapture.responseDelayMs);
		clickTimers.current.set(id, timer);
	};
	const handleParticlePointerDown = (id: number) => {
		pointerActivatedParticles.current.add(id);
		handleParticleClick(id);
	};
	const handleParticleKeyboardClick = (id: number) => {
		if (pointerActivatedParticles.current.delete(id)) return;
		handleParticleClick(id);
	};

	useEffect(() => {
		window.dispatchEvent(
			new CustomEvent("chaos-stats", {
				detail: {
					charges: particles.length,
					elapsed: formatElapsedTime(chaosElapsedSeconds),
					active: chaosMode && gameStarted && !gameComplete,
				},
			}),
		);
	}, [chaosElapsedSeconds, chaosMode, gameComplete, gameStarted, particles.length]);

	useEffect(() => {
		return () => {
			window.dispatchEvent(new CustomEvent("chaos-stats", { detail: { active: false } }));
			clearClickTimers();
			clickShakeTimers.current.forEach((timer) => clearTimeout(timer));
			clickShakeTimers.current.clear();
			enteringParticleTimers.current.forEach((timer) => clearTimeout(timer));
			if (preludeRevealTimer.current) clearInterval(preludeRevealTimer.current);
			clearChaosTimers();
		};
	}, []);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let frameId = 0;
		let previousTime = performance.now();
		const tick = (time: number) => {
			const delta = Math.min((time - previousTime) / 1000, 0.04);
			previousTime = time;
			const current = particlesRef.current.slice(0, visibleParticleCountRef.current);
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
			setParticles(particlesRef.current.map((particle) => ({ ...particle })));
			frameId = requestAnimationFrame(tick);
		};
		frameId = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frameId);
	}, []);

	return (
		<>
			{chaosMode && viewportTooSmall && (
				<div className="chaos-collapse-message chaos-collapse-message--error" aria-live="assertive">
					<div>THE ORBITAL WINDOW COLLAPSED.</div>
					<div>THE COMPUTER CANNOT VERIFY THIS ESCAPE PATH.</div>
					<div>THE MISSION MUST BE ABORTED.</div>
				</div>
			)}
			{chaosMode && !viewportTooSmall && !gameStarted && (
				<div className="chaos-rules" aria-live="polite">
					<TypingAnimation
						key={dialogueResetKey}
						strings={prelude}
						startWhenVisible={false}
						perTick={{ update: 2, unit: "character" }}
						delay={{ pause: 520 }}
						loop={false}
						postStringFinish="newline"
					/>
				</div>
			)}
			{chaosMode && gameComplete && (
				<div className="chaos-collapse-message chaos-collapse-message--complete" aria-live="polite">
					<div className="chaos-credits" aria-label="Mission credits">
						<TypingAnimation
							key={dialogueResetKey}
							strings={credits}
							startWhenVisible={false}
							perTick={{ update: 2, unit: "character" }}
							delay={{ pause: 360 }}
							loop={false}
							postStringFinish="newline"
						/>
					</div>
				</div>
			)}
			{!viewportTooSmall && (
				<div className="fun-background__icons">
					{particles.slice(0, visibleParticleCount).map(({ Icon, ...particle }) => (
						<Button
							key={particle.id}
							type="button"
							variant="ghost"
							size="icon"
							aria-label="Interactive background icon"
							className={`fun-background__icon${handlingClickIds.has(particle.id) ? " fun-background__icon--handling" : ""}${enteringParticles.has(particle.id) ? " fun-background__icon--entering" : ""}${clickedParticles.has(particle.id) ? " fun-background__icon--clicked" : ""}${(clickedParticles.get(particle.id) ?? 0) % 2 === 0 && clickedParticles.has(particle.id) ? " fun-background__icon--clicked-alt" : ""}${thresholdPoppingParticles.has(particle.id) ? " fun-background__icon--threshold-popping" : ""}`}
							onPointerDown={() => handleParticlePointerDown(particle.id)}
							onClick={() => handleParticleKeyboardClick(particle.id)}
							style={
								{
									"--icon-top": `${particle.y}px`,
									"--icon-left": `${particle.x}px`,
									"--icon-size": particle.size,
									"--icon-color": particle.color,
									"--icon-rotation": `${particle.rotation}deg`,
									"--threshold-duration": `${thresholdMotion.get(particle.id)?.duration ?? iconCapture.durationMs}ms`,
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
			)}
		</>
	);
}
