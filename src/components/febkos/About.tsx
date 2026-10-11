import Button from "@feb/components/ui/Button";
import Card from "@feb/components/ui/Card";
import { FaRegAddressCard } from "react-icons/fa";

const aboutCardClass =
	"flex w-full min-h-40 flex-col justify-between [&_.card-header]:border-0! [&_.card-header]:p-0! [&_.card-header]:text-sm! [&_.card-header]:font-semibold [&_.card-header]:uppercase [&_.card-header]:text-primary [&_.card-content]:mt-5! [&_.card-content]:p-0! [&_.card-content]:text-lg! [&_.card-content]:leading-7 [&_.card-footer]:mt-5! [&_.card-footer]:border-0! [&_.card-footer]:p-0!";

export default function About() {
	return (
		<div className="home flex min-h-fit-screen justify-center p-5" id="about">
			<div className="w-full max-w-6xl py-10">
				<div className="flex flex-col gap-5 border-b border-border pb-8">
					<div>
						<p className="flex items-center gap-2 text-sm font-semibold text-primary uppercase lg:text-base">
							About me <FaRegAddressCard />
						</p>
						<h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold lg:text-5xl">
							Security-minded builder,
							<br />
							curious by default.
						</h2>
					</div>
					<p className="text-base leading-7 text-foreground/70 sm:text-lg lg:text-xl lg:leading-8">
						Most of what I learn starts with something I want to build.
						<br />
						Online, I go by Febkosq8.
					</p>
				</div>

				<div className="mt-8 grid w-full gap-3 md:grid-cols-2 lg:grid-cols-3">
					<Card className={aboutCardClass}>
						<Card.Header>Work</Card.Header>
						<Card.Content>Security Engineer</Card.Content>
						<Card.Footer>
							<Button asChild size="sm" variant="outline" className="rounded-full">
								<a href="https://www.sita.aero" target="_blank" rel="noreferrer">
									SITA
								</a>
							</Button>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Graduate studies</Card.Header>
						<Card.Content>
							<span className="font-semibold">Master of Science in</span>
							<br />
							<span className="font-normal text-foreground/75 italic">Advanced Computer Science</span>
						</Card.Content>
						<Card.Footer>
							<Button asChild size="sm" variant="outline" className="rounded-full">
								<a href="https://le.ac.uk" target="_blank" rel="noreferrer">
									University of Leicester
								</a>
							</Button>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Undergraduate studies</Card.Header>
						<Card.Content>
							<span className="font-semibold">Bachelor of Technology in</span>
							<br />
							<span className="font-normal text-foreground/75 italic">
								Computer Science and Engineering with Cybersecurity Specialization
							</span>
						</Card.Content>
						<Card.Footer>
							<Button asChild size="sm" variant="outline" className="rounded-full">
								<a href="https://www.kluniversity.in" target="_blank" rel="noreferrer">
									KL University
								</a>
							</Button>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Leadership</Card.Header>
						<Card.Content>University Innovation Fellow, Fall 2019</Card.Content>
						<Card.Footer>
							<Button asChild size="sm" variant="outline" className="rounded-full">
								<a
									href="https://universityinnovation.org/wiki/Fellow:Febin_Koshy_Philip"
									target="_blank"
									rel="noreferrer"
								>
									UIF Wiki
								</a>
							</Button>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Creative</Card.Header>
						<Card.Content>Gameplay montage creator</Card.Content>
						<Card.Footer>
							<Button asChild size="sm" variant="outline" className="rounded-full">
								<a href="https://www.youtube.com/@Febkosq8DoesStuff" target="_blank" rel="noreferrer">
									@Febkosq8DoesStuff
								</a>
							</Button>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Off-hours</Card.Header>
						<Card.Content>Gaming, homelabbing, and learning new things.</Card.Content>
						<Card.Footer>
							<Button asChild size="sm" variant="outline" className="rounded-full">
								<a href="https://steamcommunity.com/id/febkosq8" target="_blank" rel="noreferrer">
									Steam
								</a>
							</Button>
						</Card.Footer>
					</Card>
				</div>
			</div>
		</div>
	);
}
