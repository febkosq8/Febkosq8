import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDotsFromLine } from "@fortawesome/free-solid-svg-icons";
export default function Services() {
	return (
		<section align="left" className="section px-2 w-100" id="services">
			<h1 className="display-1 fw-bold" align="center">
				Services <FontAwesomeIcon icon={faPersonDotsFromLine} color="black" />
			</h1>

			<div>
				<div className="pb-3">
					<h4 className="blockquote">Regular Usage </h4>
					<div className="d-flex flex-row flex-shrink w-100 gap-3">
						<a href="mailto:febkosq8@yahoo.com">
							<img
								src="https://img.shields.io/badge/Yahoo!-6001D2?style=for-the-badge&logo=Yahoo!&logoColor=white"
								alt="Yahoo!"
								title="Yahoo!"
							/>
						</a>
						<img
							src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white"
							alt="Cloudflare"
							title="Cloudflare"
						/>
						<img
							src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"
							alt="Heroku"
							title="Heroku"
						/>

						<img
							src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
							alt="MongoDB"
							title="MongoDB"
						/>
						<a href="mailto:febkos@gmail.com">
							<img
								src="https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white"
								alt="Google"
								title="Google"
							/>
						</a>
						<img
							src="https://img.shields.io/badge/Samsung-%231428A0.svg?style=for-the-badge&logo=samsung&logoColor=white"
							alt="Samsung"
							title="Samsung"
						/>
						<img
							src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white"
							alt="Play Store"
							title="Play Store"
						/>
						<a href="https://github.com/febkosq8">
							<img
								src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
								alt="GitHub"
								title="GitHub"
							/>
						</a>
					</div>
				</div>
				<div className="pb-3">
					<h4 className="blockquote">Irregular Usage</h4>
					<div className="d-flex flex-row flex-shrink w-100 gap-3">
						<img
							src="https://img.shields.io/badge/adobe-%23FF0000.svg?style=for-the-badge&logo=adobe&logoColor=white"
							alt="Adobe"
							title="Adobe"
						/>
						<img
							src="https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white"
							alt="Microsoft Office"
							title="Microsoft Office"
						/>
						<img
							src="https://img.shields.io/badge/OneDrive-0078D4.svg?style=for-the-badge&logo=microsoftonedrive&logoColor=white"
							alt="OneDrive"
							title="OneDrive"
						/>
						<img
							src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"
							alt="Canva"
							title="Canva"
						/>
						<img
							src="https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white"
							alt="Blogger"
							title="Blogger"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
