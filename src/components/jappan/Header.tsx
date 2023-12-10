import ThemeSwitcher from "@feb/components/ui/ThemeSwitcher";
export default function Header() {
	return (
		<div className="flex text-2xl items-center w-full justify-between px-16 h-16 bg-background border-b-2 sticky top-0">
			<a href="/Jappan" className="font-bold">
				Jappan
			</a>
			<div className="flex items-center gap-4">
				<a href="#about">About</a>
				<a href="#features">Features</a>
				<a href="#team">Team</a>
				<ThemeSwitcher prefix={"jappan"} />
			</div>
		</div>
	);
}
