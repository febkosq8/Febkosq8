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
			<div className="grid grid-cols-12 grid-rows-8 gap-3">
				<Card className="col-span-8 row-span-2 flex flex-col justify-between">
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
				<Card className="col-span-4 row-span-2 flex flex-col justify-between">
					<Card.Header>Post Grad</Card.Header>
					<Card.Content>Master of Science in Advanced Computer Science</Card.Content>
					<Card.Footer>
						<a href="https://le.ac.uk" target="_blank" rel="noreferrer">
							<Button>University of Leicester</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="col-span-4 row-span-2 flex flex-col justify-between">
					<Card.Header>Work</Card.Header>
					<Card.Content>Associate Security Analyst</Card.Content>
					<Card.Footer>
						<a href="https://www.sita.aero" target="_blank" rel="noreferrer">
							<Button>SITA</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="col-span-4 row-span-2 flex flex-col justify-between">
					<Card.Header>Youtube</Card.Header>
					<Card.Content>Uploading gameplay montages</Card.Content>
					<Card.Footer>
						<a href="https://www.youtube.com/@Febkosq8DoesStuff" target="_blank" rel="noreferrer">
							<Button>@Febkosq8DoesStuff</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="col-span-4 row-span-2 flex flex-col justify-between">
					<Card.Header>Under Grad</Card.Header>
					<Card.Content>{"Bachelor of Technology in\nComputer Science and Engineering"}</Card.Content>
					<Card.Footer>
						<a href="https://www.kluniversity.in" target="_blank" rel="noreferrer">
							<Button>KL University</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="col-span-8 row-span-2 flex flex-col justify-between">
					<Card.Header>Achievements</Card.Header>
					<Card.Content>University Innovation Fellow - Fall 2019 Batch</Card.Content>
					<Card.Footer>
						<a href="https://universityinnovation.org/wiki/Fellow:Febin_Koshy_Philip" target="_blank" rel="noreferrer">
							<Button>UIF Wiki</Button>
						</a>
					</Card.Footer>
				</Card>
				<Card className="col-span-4 row-span-2 flex flex-col justify-between">
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
