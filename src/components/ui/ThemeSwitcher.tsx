import { Menu } from "@feb/components/ui/Menu";
import Pill from "@feb/components/ui/Pill";
import { useEffect, useState } from "react";
import { FaLaptop, FaMoon, FaSun } from "react-icons/fa6";
type Color = "light" | "dark" | "system";
const themeStorageKey = "theme";

export default function ThemeSwitcher() {
	const colorModeIcon: Record<Color, React.ElementType> = { light: FaSun, dark: FaMoon, system: FaLaptop };
	const storedTheme = localStorage.getItem(themeStorageKey);
	const initialColorMode: Color = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "system";
	useEffect(() => {
		if (!(themeStorageKey in localStorage)) {
			localStorage.setItem(themeStorageKey, "system");
		}
	}, []);
	const [colorMode, setColorMode] = useState<Color>(initialColorMode);
	useEffect(() => {
		document.documentElement.classList.remove("dark");
		if (colorMode === "dark") {
			document.documentElement.classList.add("dark");
		} else if (colorMode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.documentElement.classList.add("dark");
		}
		localStorage.setItem(themeStorageKey, colorMode);
	}, [colorMode]);
	const Icon = colorModeIcon[colorMode] || FaLaptop;
	return (
		<Menu buttonText={<Icon />}>
			<Menu.Item className="rounded-t-md">
				<Pill
					active={colorMode === "system"}
					title="System Theme"
					onClick={() => {
						setColorMode("system");
					}}
					className="flex w-full rounded-t-md p-6 whitespace-nowrap"
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
			<Menu.Item className="rounded-b-md">
				<Pill
					active={colorMode === "dark"}
					title="Dark Theme"
					onClick={() => {
						setColorMode("dark");
					}}
					className="flex w-full rounded-b-md p-6 whitespace-nowrap"
				>
					<FaMoon className={`inline-block transform rounded-xs transition`} />
				</Pill>
			</Menu.Item>
		</Menu>
	);
}
