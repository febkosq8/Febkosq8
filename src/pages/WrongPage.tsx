import ThemeSwitcher from "@feb/components/ui/ThemeSwitcher";
export default function WrongPage() {
	return (
		<div>
			<div className="flex text-2xl items-center w-full justify-between px-16 h-16 bg-background border-b-2 sticky top-0">
				<a href="/" className="font-bold">
					Febkosq8
				</a>
				<ThemeSwitcher prefix={"feb"} />
			</div>
			<div className="flex flex-col items-center justify-center min-h-[theme(spacing.fit-screen)]">
				<div className="text-5xl font-bold text-center text-slate-600 dark:text-slate-100">404</div>
				<div className="text-2xl font-bold text-center text-slate-600 dark:text-slate-100">Page Not Found</div>
			</div>
		</div>
	);
}
