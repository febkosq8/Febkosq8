import Header from "@feb/components/febkos/Header";
import Febkos from "@feb/pages/Febkos";
import WrongPage from "@feb/pages/WrongPage";
import { useEffect } from "react";
import { Route, Routes } from "react-router";

function App() {
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (window.location.hash) {
				try {
					const element = document.querySelector(window.location.hash);
					if (element) {
						element.scrollIntoView({ behavior: "smooth" });
						clearInterval(intervalId);
					}
				} catch (e) {}
			} else {
				clearInterval(intervalId);
			}
		}, 500);
	}, []);
	return (
		<div className="bg-background text-slate-600 dark:text-slate-100">
			<Header />
			<Routes>
				<Route path="/" element={<Febkos />} />
				<Route path="/cv" element={<Febkos />} />
				<Route path="*" element={<WrongPage />} />
			</Routes>
		</div>
	);
}

export default App;
