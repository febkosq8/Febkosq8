import React from "react";
import gstImage from "../../assets/Febkosq8/GStatTracker.jpeg";
import cryptoGifImage from "../../assets/Febkosq8/CryptoGIF.png";
import javaCryptoMessengerImage from "../../assets/Febkosq8/jcm.png";
import jappanImage from "../../assets/Febkosq8/jdb.png";
import dlgImage from "../../assets/Febkosq8/dlg.png";
import shortURLImage from "../../assets/Febkosq8/ShortURL.png";
import CourseContentDelivery from "../../assets/Febkosq8/CourseContentDelivery.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { css, cx } from "@emotion/css";
export default function Projects() {
	const projectItems = [
		{
			imgSrc: dlgImage,
			title: "Defect List Generator",
			btnName1: "",
			btn1Url: "",
			btnName2: "",
			btn2Url: "",
		},
		{
			imgSrc: jappanImage,
			title: "Jappan - Discord Bot",
			btnName1: (
				<>
					<FontAwesomeIcon icon={faDiscord} /> Invite
				</>
			),
			btn1Url:
				"https://discord.com/api/oauth2/authorize?client_id=732230135671029831&permissions=8&scope=applications.commands%20bot",
			btnName2: "Know More",
			btn2Url: "/Jappan",
		},
		{
			imgSrc: shortURLImage,
			title: "ShortURL",
			btnName1: "View Live Application",
			btn1Url: "/ShortURL",
			btnName2: "",
			btn2Url: "",
		},
		{
			imgSrc: gstImage,
			title: "GStat Tracker",
			btn1Url: "https://github.com/febkosq8/GStatTracker",
			btnName1: (
				<>
					View on
					<FontAwesomeIcon className="ms-2" icon={faGithub} /> GitHub
				</>
			),
			btnName2: "View Live Application",
			btn2Url: "https://gstattracker.febkosq8.me/",
		},
		{
			imgSrc: cryptoGifImage,
			title: "CryptoGIF",
			btn1Url: "https://github.com/febkosq8/CryptoGIF",
			btnName1: (
				<>
					View on
					<FontAwesomeIcon className="ms-2" icon={faGithub} /> GitHub
				</>
			),
			btnName2: "",
			btn2Url: "",
		},
		{
			imgSrc: javaCryptoMessengerImage,
			title: "Java Cryptographic Messenger",
			btn1Url: "https://github.com/febkosq8/java_cryptographic_messenger",
			btnName1: (
				<>
					View on
					<FontAwesomeIcon className="ms-2" icon={faGithub} /> GitHub
				</>
			),
			btnName2: "",
			btn2Url: "",
		},
		{
			imgSrc: CourseContentDelivery,
			title: "Course Content Delivery",
			btn1Url: "",
			btnName1: "",
			btnName2: "",
			btn2Url: "",
		},
	];
	return (
		<section align="left" className="section d-flex flex-column w-100" style={{ paddingTop: "40px" }}>
			<h2 className="display-1 fw-bold" align="center" id="projects">
				Projects <FontAwesomeIcon icon={faListCheck} color="black" />
			</h2>
			<div
				className={cx(
					"feb-projects overflow-auto d-grid pe-5",
					css`
						grid-gap: 10px;
						grid-template-columns: 1fr 1fr;
						height: 710px;
					`
				)}
			>
				{projectItems.map((item) => {
					return (
						<div
							key={projectItems.title}
							className="card text-bg-dark d-flex pt-3 flex-column align-items-center justify-content-center"
							style={{ height: "350px", width: "450px" }}
						>
							<img
								src={item.imgSrc}
								className={cx(
									"card-img-top p-2",
									css`
										aspect-ratio: 1.78;
									`
								)}
								alt={item.title}
							/>
							<div className="d-flex flex-column align-items-center card-body">
								<p className="card-title">{item.title}</p>
								<div className=" gap-2 d-flex flex-row" style={{ alignItems: "center", justifyContent: "center" }}>
									{item.btn1Url !== "" ? (
										<a href={item.btn1Url} className="btn-outline-light btn">
											{item.btnName1}
										</a>
									) : (
										<></>
									)}
									{item.btn2Url !== "" ? (
										<a href={item.btn2Url} className="btn-outline-light btn">
											{item.btnName2}
										</a>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
