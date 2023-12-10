import About from "@feb/components/jappan/About";
import Features from "@feb/components/jappan/Features";
import Header from "@feb/components/jappan/Header";
import Team from "@feb/components/jappan/Team";
import { useEffect } from "react";
export default function Jappan() {
	//set favicon to jappan favicon
	useEffect(() => {
		const favicon = document.getElementById("favicon") as HTMLLinkElement;
		favicon.href = "/src/assets/jappan/jappanFavicon.ico";
	}, []);

	return (
		<div className="jappan flex flex-col justify-center items-center">
			<Header />
			<About />
			<Features />
			<Team />
		</div>
	);
}
