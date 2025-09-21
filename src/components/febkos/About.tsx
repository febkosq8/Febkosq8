import { Button } from "@feb/components/ui/Button";
import Card from "@feb/components/ui/Card";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function About() {
	return (
		<div className="home flex min-h-(--spacing-fit-screen) flex-col items-center justify-center p-5" id="about">
			<h2 className="typography-heading-2 mb-10 flex" id="aboutMeTitle">
				About Me <FontAwesomeIcon icon={faAddressCard} className="ml-2 h-10 w-10" />
			</h2>
			<div className="flex flex-col gap-3 lg:grid lg:grid-cols-12 lg:grid-rows-8">
				<Card className="flex flex-col justify-between lg:col-span-8 lg:row-span-2">
					<Card.Header>Me</Card.Header>
					<Card.Content>
						{
							"I go by Febkosq8 pretty much everywhere.\nWhen I am bored, I like developing apps for solving random issues.\n"
						}
					</Card.Content>
					<Card.Footer>
						<a href="#projects" rel="noreferrer">
							<Button>Projects</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="flex flex-col justify-between lg:col-span-4 lg:row-span-2">
					<Card.Header>Post Grad</Card.Header>
					<Card.Content>Master of Science in Advanced Computer Science</Card.Content>
					<Card.Footer>
						<a href="https://le.ac.uk" target="_blank" rel="noreferrer">
							<Button>University of Leicester</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="flex flex-col justify-between lg:col-span-4 lg:row-span-2">
					<Card.Header>Work</Card.Header>
					<Card.Content>Associate Security Analyst</Card.Content>
					<Card.Footer>
						<a href="https://www.sita.aero" target="_blank" rel="noreferrer">
							<Button>SITA</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="flex flex-col justify-between lg:col-span-4 lg:row-span-2">
					<Card.Header>Youtube</Card.Header>
					<Card.Content>Uploading gameplay montages</Card.Content>
					<Card.Footer>
						<a href="https://www.youtube.com/@Febkosq8DoesStuff" target="_blank" rel="noreferrer">
							<Button>@Febkosq8DoesStuff</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="flex flex-col justify-between lg:col-span-4 lg:row-span-2">
					<Card.Header>Under Grad</Card.Header>
					<Card.Content>{"Bachelor of Technology in\nComputer Science and Engineering"}</Card.Content>
					<Card.Footer>
						<a href="https://www.kluniversity.in" target="_blank" rel="noreferrer">
							<Button>KL University</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="flex flex-col justify-between lg:col-span-8 lg:row-span-2">
					<Card.Header>Achievements</Card.Header>
					<Card.Content>University Innovation Fellow - Fall 2019 Batch</Card.Content>
					<Card.Footer>
						<a href="https://universityinnovation.org/wiki/Fellow:Febin_Koshy_Philip" target="_blank" rel="noreferrer">
							<Button>UIF Wiki</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="flex flex-col justify-between lg:col-span-4 lg:row-span-2">
					<Card.Header>Games</Card.Header>
					<Card.Content>I spend a good amount of my time playing Games</Card.Content>
					<Card.Footer>
						<a href="https://steamcommunity.com/id/febkosq8" target="_blank" rel="noreferrer">
							<Button>Steam</Button>
						</a>
					</Card.Footer>
				</Card>
			</div>
		</div>
	);
}
