import "./Febkosq8.css";
import React, { useEffect } from "react";
import Header from "../../components/Febkosq8/Header";
import Intro from "../../components/Febkosq8/Intro";
import About from "../../components/Febkosq8/About";
import Languages from "../../components/Febkosq8/Languages";
import Services from "../../components/Febkosq8/Services";
import Platforms from "../../components/Febkosq8/Platforms";
import Projects from "../../components/Febkosq8/Projects";
import Gaming from "../../components/Febkosq8/Gaming";
import Socials from "../../components/Febkosq8/Socials";
import scrollWatcher from "../../handlers/ScrollWatcher";
const Febkosq8 = () => {
	document.title = "Febkosq8";
	useEffect(() => {
		const scroll = scrollWatcher("#navbar-febkosq8");
		return () => scroll.disconnect();
	}, []);
	return (
		<div className="App pt-4">
			<Header />

			<div className="body-container" tabIndex="0">
				<Intro />
				<About />
				<Languages />
				<Services />
				<Platforms />
				<Projects />
				<Gaming />
				<Socials />
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default Febkosq8;
