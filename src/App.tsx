import { Route, Routes } from "react-router-dom";
import Febkos from "@feb/pages/Febkos";
import Jappan from "@feb/pages/Jappan";
import WrongPage from "@feb/pages/WrongPage";
import ShortURL from "@feb/pages/ShortURL";
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
				<Route path="/jappan" element={<Jappan />} />
				<Route path="/shorturl/:redirectUrl?" element={<ShortURL />} />
				<Route path="*" element={<WrongPage />} />
			</Routes>
		</div>
	);
}

export default App;
