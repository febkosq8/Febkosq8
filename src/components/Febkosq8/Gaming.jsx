import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGamepad } from "@fortawesome/free-solid-svg-icons";
export default function Gaming() {
	return (
		<section align="left" className="section px-2" id="gaming">
			<h1 className="display-1 fw-bold" align="center">
				Gaming <FontAwesomeIcon icon={faGamepad} color="black" />
			</h1>
			<div>
				<div className="d-flex flex-row flex-shrink w-100 gap-3">
					<a href="https://steamcommunity.com/id/febkosq8">
						<img
							src="https://img.shields.io/badge/steam-%23000000.svg?style=for-the-badge&logo=steam&logoColor=white"
							alt="Steam"
							title="Steam"
						/>
					</a>
					<img
						src="https://img.shields.io/badge/epicgames-%23313131.svg?style=for-the-badge&logo=epicgames&logoColor=white"
						alt="Epic Games"
						title="Epic Games"
					/>
					<img
						src="https://img.shields.io/badge/Ubisoft-%23F5F5F5.svg?style=for-the-badge&logo=Ubisoft&logoColor=black"
						alt="Ubisoft"
						title="Ubisoft"
					/>
					<img
						src="https://img.shields.io/badge/xbox-%23107C10.svg?style=for-the-badge&logo=xbox&logoColor=white"
						alt="Xbox"
						title="Xbox "
					/>
					<img
						src="https://img.shields.io/badge/riotgames-D32936.svg?style=for-the-badge&logo=riotgames&logoColor=white"
						alt="Riot Games"
						title="Riot Games"
					/>
					<img
						src="https://img.shields.io/badge/battle.net-%2300AEFF.svg?style=for-the-badge&logo=battle.net&logoColor=white"
						alt="Battle.net"
						title="Battle.net"
					/>
					<img
						src="https://img.shields.io/badge/ea-%23000000.svg?style=for-the-badge&logo=ea&logoColor=white"
						alt="EA"
						title="EA"
					/>
					<img
						src="https://img.shields.io/badge/nVIDIA-%2376B900.svg?style=for-the-badge&logo=nVIDIA&logoColor=white"
						alt="nVIDIA"
						title="nVIDIA"
					/>
				</div>
			</div>
		</section>
	);
}
