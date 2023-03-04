import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGear } from "@fortawesome/free-solid-svg-icons";
export default function Platforms() {
	return (
		<section
			align="left"
			className="section px-2 w-100 d-flex flex-column justify-content-center align-items-center"
			id="platforms"
		>
			<h1 className="display-1 fw-bold" align="center">
				Platforms <FontAwesomeIcon icon={faGear} color="black" />
			</h1>
			<div>
				<div className="pb-3">
					<h4 className="blockquote">Regular Usage </h4>
					<div className="d-flex flex-row flex-shrink w-100 gap-3">
						<img
							src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
							alt="Visual Studio Code"
							title="Visual Studio Code"
						/>
						<a href="https://www.reddit.com/user/febkosq8">
							<img
								src="https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white"
								alt="Redditt"
								title="Reddit"
							/>
						</a>
						<img
							src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white"
							alt="PayPal"
							title="PayPal"
						/>
						<img
							src="https://img.shields.io/badge/Paytm-1C2C94?style=for-the-badge&logo=paytm&logoColor=05BAF3"
							alt="Paytm"
							title="Paytm"
						/>
						<img
							src="https://img.shields.io/badge/GooglePay-%233780F1.svg?style=for-the-badge&logo=Google-Pay&logoColor=white"
							alt="Google Pay"
							title="Google Pay"
						/>
						<img
							src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"
							alt="Android"
							title="Android"
						/>
						<img
							src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"
							alt="Windows"
							title="Windows"
						/>
						<img
							src="https://img.shields.io/badge/-Wear%20OS-4285F4?style=for-the-badge&logo=wear-os&logoColor=white"
							alt="Wear OS"
							title="Wear OS"
						/>
						<a href="https://discord.gg/rhk7STH5py">
							<img
								src="https://img.shields.io/badge/Discord-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white"
								alt="Discord"
								title="Discord"
							/>
						</a>
						<img
							src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
							alt="WhatsApp"
							title="WhatsApp"
						/>
					</div>
				</div>
				<div className="pb-3">
					<h4 className="blockquote">Irregular Usage</h4>
					<div className="d-flex flex-row flex-shrink w-100 gap-3">
						<img
							src="https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white"
							alt="Windows Terminal"
							title="Windows Terminal"
						/>
						<img
							src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE"
							alt="Insomnia"
							title="Insomnia"
						/>
						<a href="https://open.spotify.com/user/8e6dvq3253iikn4qxe697rmfo">
							<img
								src="https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white"
								alt="Spotify"
								title="Spotify"
							/>
						</a>
						<a href="https://twitter.com/febkosq8">
							<img
								src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white"
								alt="Twitter"
								title="Twitter"
							/>
						</a>
						<a href="https://en.wikipedia.org/wiki/User:Febkosq8">
							<img
								src="https://img.shields.io/badge/Wikipedia-%23000000.svg?style=for-the-badge&logo=wikipedia&logoColor=white"
								alt="Wikipedia"
								title="Wikipedia"
							/>
						</a>
						<a href="https://www.linkedin.com/in/febkosq8/">
							<img
								src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
								alt="LinkedIn"
								title="LinkedIn"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
