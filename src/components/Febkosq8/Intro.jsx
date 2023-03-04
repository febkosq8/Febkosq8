import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
export default function Intro() {
	return (
		<section className="section px-2" id="intro">
			<div className="Intro">
				<h1 className="display-1 fw-bold" align="center" id="introTitle">
					Hello
					<div className="hands">
						<FontAwesomeIcon icon={faHandPeace} color="yellow" />
					</div>
					I'm Febin Koshy Philip
				</h1>
			</div>
		</section>
	);
}
