/// <reference types="vite/client" />

type ChaosGameState = "idle" | "playing" | "complete";

interface ChaosControl {
	count?: number;
	state?: ChaosGameState;
}

interface Window {
	"chaos-game"?: (control?: ChaosControl) => void;
}
