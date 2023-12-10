import Card from "@feb/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FunCommand1 from "@feb/assets/jappan/FunCommand1.png";
import FunCommand2 from "@feb/assets/jappan/FunCommand2.png";
import Level1 from "@feb/assets/jappan/Level1.png";
import Level2 from "@feb/assets/jappan/Level2.png";
import Mod1 from "@feb/assets/jappan/Mod1.png";
import Mod2 from "@feb/assets/jappan/Mod2.png";
import Mod3 from "@feb/assets/jappan/Mod3.png";
import MusicPlay1 from "@feb/assets/jappan/MusicPlay1.png";
import MusicPlay2 from "@feb/assets/jappan/MusicPlay2.png";
import {
	faChampagneGlasses,
	faGavel,
	faLayerGroup,
	faMusic,
	faPersonArrowUpFromLine,
} from "@fortawesome/free-solid-svg-icons";
const featureItems = [
	{
		title: "Music Playback",
		icon: <FontAwesomeIcon className="ms-2" icon={faMusic} />,
		img: [
			{
				img: MusicPlay1,
				title: "Set your playlist with a easy to remember name",
			},
			{
				img: MusicPlay2,
				title: "Play your playlist using its name in any server",
			},
		],
	},
	{
		title: "Fun Commands",
		icon: <FontAwesomeIcon className="ms-2" icon={faChampagneGlasses} />,
		img: [
			{
				img: FunCommand1,
				title: "Clones a user and makes them say something that you want",
			},
			{
				img: FunCommand2,
				title: "Choose to play from a refined selection of audio clips",
			},
		],
	},
	{
		title: "Leveling System",
		icon: <FontAwesomeIcon className="ms-2" icon={faPersonArrowUpFromLine} />,
		img: [
			{
				img: Level1,
				title: "Know who all are active in a server",
			},
			{
				img: Level2,
				title: "Leveling up as you interact",
			},
		],
	},
	{
		title: "Moderation Tools",
		icon: <FontAwesomeIcon className="ms-2" icon={faGavel} />,
		img: [
			{
				img: Mod1,
				title: "Audit Events",
			},
			{
				img: Mod2,
				title: "Clear Messages",
			},
			{
				img: Mod3,
				title: "Member I-O Announcements",
			},
		],
	},
];
export default function Features() {
	return (
		<div className="home p-5 flex flex-col items-center justify-center min-h-[theme(spacing.fit-screen)]" id="features">
			<h2 className="typography-heading-2 flex mb-10" id="aboutMeTitle">
				Features <FontAwesomeIcon icon={faLayerGroup} className="h-10 w-10 ml-2" />
			</h2>
			<div className="flex flex-col w-full gap-2">
				{featureItems.map((category, index) => {
					return (
						<Card className="flex flex-col w-full" key={`${index}_FeatureCard`}>
							<Card.Header>
								<div className="flex gap-2">
									<div>{category.icon}</div>
									<div>{category.title}</div>
								</div>
							</Card.Header>
							<Card.Content>
								<div className="flex flex-col gap-5 justify-between">
									{category.img.map((image, index) => {
										return (
											<div
												className={`flex flex-row gap-2 items-center justify-between py-2 ${
													category.img.length !== index + 1 ? "border-b" : ""
												}`}
												key={`${index}_FeatureCardImage`}
											>
												<>
													{image.title}
													<img className="w-2/6" src={image.img} />
												</>
											</div>
										);
									})}
								</div>
							</Card.Content>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
