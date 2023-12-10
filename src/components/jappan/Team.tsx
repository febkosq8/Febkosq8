import febProfile from "@feb/assets/jappan/febkosq8Profile.gif";
import inconProfile from "@feb/assets/jappan/inconsistentProfile.jpg";
import rinProfile from "@feb/assets/jappan/rinzaiProfile.jpeg";
import { Button } from "@feb/components/ui/Button";
import Card from "@feb/components/ui/Card";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Team() {
	return (
		<div className="home p-5 flex flex-col items-center justify-center min-h-[theme(spacing.fit-screen)]" id="team">
			<h2 className="typography-heading-2 flex mb-10 gap-2 items-center" id="aboutMeTitle">
				Team <FontAwesomeIcon icon={faPeopleGroup} />
			</h2>
			<div className="flex flex-row gap-2">
				<Card className="items-center justify-center">
					<Card.Header>
						<p className="text-center">Lead Developer</p>
					</Card.Header>
					<Card.Content className={"flex flex-col items-center gap-2"}>
						<img className="rounded-full w-[175px]" src={febProfile} alt="Avatar" />
						<a href="http://www.febkosq8.me" target="_blank" rel="noreferrer">
							<Button>febkosq8</Button>
						</a>
					</Card.Content>
				</Card>
				<Card className="items-center justify-center">
					<Card.Header>
						<p className="text-center">Senior Developer</p>
					</Card.Header>
					<Card.Content className={"flex flex-col items-center gap-2"}>
						<img className="rounded-full w-[175px]" src={rinProfile} alt="Avatar" />
						<a href="https://github.com/r1nzai" target="_blank" rel="noreferrer">
							<Button>rinzai</Button>
						</a>
					</Card.Content>
				</Card>
				<Card className="items-center justify-center">
					<Card.Header>
						<p className="text-center">QA Tester</p>
					</Card.Header>
					<Card.Content className={"flex flex-col items-center gap-2"}>
						<img className="rounded-full w-[175px]" src={inconProfile} alt="Avatar" />
						<a href="https://github.com/r1nzai" target="_blank" rel="noreferrer">
							<Button>akhilpv2334768</Button>
						</a>
					</Card.Content>
				</Card>
			</div>
		</div>
	);
}
