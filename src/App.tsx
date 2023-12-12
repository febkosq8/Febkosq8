import Febkos from "@feb/pages/Febkos";
import ShortURL from "@feb/pages/ShortURL";
import WrongPage from "@feb/pages/WrongPage";
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
			<Routes>
				<Route path="/" element={<Febkos />} />
				<Route path="/shorturl/:redirectUrl?" element={<ShortURL />} />
				<Route path="*" element={<WrongPage />} />
			</Routes>
		</div>
	);
}

export default App;
