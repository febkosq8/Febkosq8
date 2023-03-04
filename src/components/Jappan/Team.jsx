import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import febProfile from "../../assets/Jappan/febkosq8Profile.gif";
import rinProfile from "../../assets/Jappan/rinzaiProfile.jpeg";
import inconProfile from "../../assets/Jappan/inconsistentProfile.jpg";
export default function Team() {
	return (
		<section align="left" className="section px-2" id="team">
			<h2 className="display-1" align="center">
				<FontAwesomeIcon icon={faTerminal} color="black" /> Team <FontAwesomeIcon icon={faPeopleGroup} color="black" />
			</h2>
			<div className="card-group">
				<div
					className="card border-info bg-light d-flex flex-column align-items-center justify-content-center col-3"
					style={{ maxWidth: "18rem" }}
				>
					<div className="d-flex flex-column align-items-center card-body">
						<img className="profileImg" style={{ width: "65%" }} src={febProfile} alt="Avatar"></img>
						Lead Developer
						<br />
						<p className="card-title">
							<a href="http://www.febkosq8.me/" target="_blank" rel="noreferrer" className="ms-2 btn-outline-dark btn">
								Febkosq8#8685
							</a>
						</p>
						<div className=" gap-2 d-flex flex-row" style={{ alignItems: "center", justifyContent: "center" }}></div>
					</div>
				</div>
				<div
					className="card border-info bg-light d-flex flex-column align-items-center justify-content-center col-3"
					style={{ maxWidth: "18rem" }}
				>
					<div className="d-flex flex-column align-items-center card-body">
						<img className="profileImg" style={{ width: "65%" }} src={rinProfile} alt="Avatar"></img>
						Senior Developer
						<br />
						<p className="card-title">
							<a
								href="https://github.com/r1nzai"
								target="_blank"
								rel="noreferrer"
								className="ms-2 btn-outline-dark btn"
							>
								Rinzai#0368
							</a>
						</p>
						<div className=" gap-2 d-flex flex-row" style={{ alignItems: "center", justifyContent: "center" }}></div>
					</div>
				</div>
				<div
					className="card border-info bg-light d-flex flex-column align-items-center justify-content-center col-3"
					style={{ maxWidth: "18rem" }}
				>
					<div className="d-flex flex-column align-items-center card-body">
						<img className="profileImg" style={{ width: "65%" }} src={inconProfile} alt="Avatar"></img>
						QA Tester
						<br />
						<p className="card-title">
							<a
								href="https://github.com/1nconsistent"
								target="_blank"
								rel="noreferrer"
								className="ms-2 btn-outline-dark btn"
							>
								Inconsistent#3553
							</a>
						</p>
						<div className=" gap-2 d-flex flex-row" style={{ alignItems: "center", justifyContent: "center" }}></div>
					</div>
				</div>
			</div>
		</section>
	);
}
