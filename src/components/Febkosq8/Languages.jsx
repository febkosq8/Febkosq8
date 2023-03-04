import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTerminal } from "@fortawesome/free-solid-svg-icons";
export default function Languages() {
	return (
		<section align="left" className="section px-2" id="languages">
			<h1 className="display-1 fw-bold" align="center">
				Languages & Frameworks
				<FontAwesomeIcon icon={faTerminal} className="ms-5" color="black" />
			</h1>
			<div>
				<div className="pb-3">
					<h4 className="blockquote">Highly Experienced </h4>
					<div className="d-flex flex-row flex-shrink w-100 gap-3">
						<img
							src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
							alt="C"
							title="C"
						/>
						<img
							src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
							alt="C++"
							title="C++"
						/>
						<img
							src="https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white"
							alt="Arduino"
							title="Arduino"
						/>
						<img
							src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"
							alt="Markdown"
							title="Markdown"
						/>
					</div>
				</div>
				<div className="pb-3">
					<h4 className="blockquote">Knowledgeable </h4>
					<div className="d-flex flex-row flex-shrink w-100 gap-3">
						<img
							src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"
							alt="Java"
							title="Java"
						/>
						<img
							src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
							alt="JavaScript"
							title="JavaScript"
						/>
						<img
							src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
							alt="Node.js"
							title="Node.js"
						/>
						<img
							src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
							alt="React"
							title="React"
						/>
						<img
							src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
							alt="Bootstrap"
							title="Bootstrap"
						/>
						<img
							src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
							alt="HTML"
							title="HTML"
						/>
						<img
							src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
							alt="CSS3"
							title="CSS3"
						/>
						<img
							src="https://img.shields.io/badge/Recharts-yellowgreen?style=for-the-badge"
							alt="Recharts"
							title="Recharts"
						/>
					</div>
				</div>
				<div className="pb-3">
					<h4 className="blockquote">Informed </h4>
					<div className="d-flex flex-row flex-shrink w-100 gap-3">
						<img
							src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
							alt="Python"
							title="Python"
						/>
						<img
							src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
							alt="SQLite"
							title="SQLite"
						/>
						<img
							src="https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white"
							alt="Bulma"
							title="Bulma"
						/>
						<img
							src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
							alt="JWT/JSON Web Token"
							title="JWT/JSON Web Token"
						/>
						<img
							src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
							alt="NPM"
							title="NPM"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
