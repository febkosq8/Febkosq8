import { useEffect } from "react";

export default function WrongPage() {
	useEffect(() => {
		document.title = "404 | Febkosq8";
	}, []);

	return (
		<div>
			<div className="flex min-h-fit-screen flex-col items-center justify-center">
				<div className="text-center text-5xl font-bold text-slate-600 dark:text-slate-100">404</div>
				<div className="text-center text-2xl font-bold text-slate-600 dark:text-slate-100">Page Not Found</div>
			</div>
		</div>
	);
}
