import Febkos from "@feb/pages/Febkos";
import WrongPage from "@feb/pages/WrongPage";
import Header from "@feb/components/febkos/Header";
import { Route, Routes } from "react-router-dom";
if (window.location.hash) {
	const element = document.querySelector(window.location.hash);
	if (element) {
		element.scrollIntoView();
	}
}
function App() {
	return (
		<div className="text-slate-600 dark:text-slate-100 bg-background">
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
