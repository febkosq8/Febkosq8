import { Menu } from "@feb/components/ui/Menu";
import Pill from "@feb/components/ui/Pill";
import { useEffect, useState } from "react";
import { FaLaptop, FaMoon, FaSun } from "react-icons/fa6";
type Color = "light" | "dark" | "system";
const themeStorageKey = "theme";

export default function ThemeSwitcher() {
	const colorModeIcon: Record<Color, React.ElementType> = { light: FaSun, dark: FaMoon, system: FaLaptop };
	useEffect(() => {
		if (!(themeStorageKey in localStorage)) {
			localStorage.setItem(themeStorageKey, "system");
		}
	}, []);
	const [colorMode, setColorMode] = useState<Color>((localStorage.getItem(themeStorageKey) as Color) ?? "system");
	useEffect(() => {
		if (["light", "dark"].includes(colorMode)) {
			if (colorMode === "dark") {
				document.documentElement.classList.add("dark");
				setColorMode("dark");
			} else if (colorMode === "light") {
				document.documentElement.classList.remove("dark");
				setColorMode("light");
			}
			localStorage.setItem(themeStorageKey, colorMode);
		} else {
			const isSystemThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			if (isSystemThemeDark) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			localStorage.setItem(themeStorageKey, "system");
		}
	}, [colorMode]);
	const Icon = colorModeIcon[colorMode] || FaLaptop;
	return (
		<Menu buttonText={<Icon />}>
			<Menu.Item>
				<Pill
					active={colorMode === "system"}
					title="System Theme"
					onClick={() => {
						setColorMode("system");
					}}
					className="flex w-full rounded-t-sm p-6 whitespace-nowrap"
				>
					<FaLaptop className={`inline-block transform rounded-xs transition`} />
				</Pill>
			</Menu.Item>
			<Menu.Item>
				<Pill
					active={colorMode === "light"}
					title="Light Theme"
					onClick={() => {
						setColorMode("light");
					}}
					className="flex w-full p-6 whitespace-nowrap"
				>
					<FaSun className={`inline-block transform rounded-xs transition`} />
				</Pill>
			</Menu.Item>
			<Menu.Item>
				<Pill
					active={colorMode === "dark"}
					title="Dark Theme"
					onClick={() => {
						setColorMode("dark");
					}}
					className="flex w-full rounded-b-sm p-6 whitespace-nowrap"
				>
					<FaMoon className={`inline-block transform rounded-xs transition`} />
				</Pill>
			</Menu.Item>
		</Menu>
	);
}
