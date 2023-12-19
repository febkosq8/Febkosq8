import Menu from "@feb/components/ui/Menu";
import ThemeSwitcher from "@feb/components/ui/ThemeSwitcher";

export default function Header() {
	return (
		<div className="flex text-2xl items-center w-full justify-between px-16 h-16 bg-background border-b-2 sticky top-0">
			<a href="/" className="font-bold">
				Febkosq8
			</a>
			<div className="flex items-center gap-4">
				<Menu href="#about" buttonContent={"About"} />
				<Menu href="#skillset" buttonContent={"Skillset"} />
				<Menu href="#projects" buttonContent={"Projects"} />
				<Menu href="#socials" buttonContent={"Socials"} />
				<ThemeSwitcher />
			</div>
		</div>
	);
}
