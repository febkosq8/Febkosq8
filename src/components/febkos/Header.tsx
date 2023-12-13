import ThemeSwitcher from "@feb/components/ui/ThemeSwitcher";
export default function Header() {
	return (
		<div className="flex text-2xl items-center w-full justify-between px-16 h-16 bg-background border-b-2 sticky top-0">
			<a href="/" className="font-bold">
				Febkosq8
			</a>
			<div className="flex items-center gap-4">
				<a href="#about">About</a>
				<a href="#skillset">Skillset</a>
				<a href="#projects">Projects</a>
				<a href="#socials">Socials</a>
				<ThemeSwitcher />
			</div>
		</div>
	);
}
