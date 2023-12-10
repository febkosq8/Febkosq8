import ThemeSwitcher from "@feb/components/ui/ThemeSwitcher";
export default function Header() {
	return (
		<div className="flex text-2xl items-center w-full justify-between px-16 h-16 bg-background border-b-2 sticky top-0">
			<div className="flex gap-1">
				<a href="/" className="font-bold">
					Febkosq8
				</a>
				/
				<a href="/ShortURL" className="font-bold">
					ShortURL
				</a>
			</div>

			<div className="flex items-center gap-4">
				<ThemeSwitcher prefix={"shorturl"} />
			</div>
		</div>
	);
}
