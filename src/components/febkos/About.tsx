import { Card, PillLink, TypingAnimation } from "@febkosq8/arc";
import useActiveSectionTitle from "@feb/components/febkos/useActiveSectionTitle";
import { FaRegAddressCard } from "react-icons/fa";

const aboutCardClass =
	"flex h-full w-full min-h-56 flex-col [&_.arc-card-header]:border-0! [&_.arc-card-header]:p-0! [&_.arc-card-header]:text-sm! [&_.arc-card-header]:font-semibold [&_.arc-card-header]:uppercase [&_.arc-card-header]:text-primary [&_.arc-card-content]:mt-5! [&_.arc-card-content]:flex! [&_.arc-card-content]:flex-col [&_.arc-card-content]:gap-1 [&_.arc-card-content]:p-0! [&_.arc-card-content]:text-base! [&_.arc-card-content]:leading-6 [&_.arc-card-footer]:mt-auto! [&_.arc-card-footer]:border-0! [&_.arc-card-footer]:p-0!";
const aboutHeading = ["Security-minded builder,\ncurious by default"];
export default function About() {
	const sectionRef = useActiveSectionTitle(() => {
		document.title = "Febkosq8 - About";
	});

	return (
		<div ref={sectionRef} className="home flex min-h-fit-screen justify-center p-5" id="about" data-title-section>
			<div className="w-full max-w-6xl py-10">
				<div className="flex flex-col gap-5 border-b border-border pb-8">
					<div>
						<p className="text-sm font-semibold text-primary uppercase lg:text-base">
							<a
								href="#about"
								className="flex items-center gap-2 underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-hidden"
							>
								About me <FaRegAddressCard />
							</a>
						</p>
						<h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold text-foreground lg:text-5xl">
							<TypingAnimation
								strings={aboutHeading}
								placeholder={aboutHeading[0]}
								perTick={{ amount: 2, unit: "character" }}
								trailingDot
							/>
						</h2>
					</div>
					<p className="max-w-3xl text-base leading-7 text-foreground/80 sm:text-lg lg:text-xl lg:leading-8">
						Most of what I learn starts with something I want to build.
						<br />
						Online, I go by Febkosq8.
					</p>
				</div>

				<div className="mt-8 grid w-full auto-rows-fr gap-3 md:grid-cols-2 lg:grid-cols-3">
					<Card className={aboutCardClass}>
						<Card.Header>Work</Card.Header>
						<Card.Content>
							<p className="font-semibold">Security Engineer</p>
							<p className="text-foreground/75">Part of the AppSec team for Amazon Stores.</p>
						</Card.Content>
						<Card.Footer>
							<PillLink
								href="https://www.aboutamazon.com"
								target="_blank"
								rel="noreferrer"
								size="sm"
								variant="outline"
								className="rounded-full"
							>
								Amazon
							</PillLink>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Graduate studies</Card.Header>
						<Card.Content>
							<p className="font-semibold">Master of Science</p>
							<p className="text-foreground/75">Advanced Computer Science</p>
						</Card.Content>
						<Card.Footer>
							<PillLink
								href="https://le.ac.uk"
								target="_blank"
								rel="noreferrer"
								size="sm"
								variant="outline"
								className="rounded-full"
							>
								University of Leicester
							</PillLink>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Undergraduate studies</Card.Header>
						<Card.Content>
							<p className="font-semibold">Bachelor of Technology</p>
							<p className="text-foreground/75">Computer Science and Engineering with a Cybersecurity Specialization</p>
						</Card.Content>
						<Card.Footer>
							<PillLink
								href="https://www.kluniversity.in"
								target="_blank"
								rel="noreferrer"
								size="sm"
								variant="outline"
								className="rounded-full"
							>
								KL University
							</PillLink>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Leadership</Card.Header>
						<Card.Content>
							<p className="font-semibold">University Innovation Fellow</p>
							<p className="text-foreground/75">A member of the Fall 2019 cohort.</p>
						</Card.Content>
						<Card.Footer>
							<PillLink
								href="https://universityinnovation.org/wiki/Fellow:Febin_Koshy_Philip"
								target="_blank"
								rel="noreferrer"
								size="sm"
								variant="outline"
								className="rounded-full"
							>
								UIF Wiki
							</PillLink>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Creative</Card.Header>
						<Card.Content>
							<p className="font-semibold">Gameplay montage creator</p>
							<p className="text-foreground/75">Creating gaming montages from daily gameplay</p>
						</Card.Content>
						<Card.Footer>
							<PillLink
								href="https://www.youtube.com/@Febkosq8DoesStuff"
								target="_blank"
								rel="noreferrer"
								size="sm"
								variant="outline"
								className="rounded-full"
							>
								@Febkosq8DoesStuff
							</PillLink>
						</Card.Footer>
					</Card>
					<Card className={aboutCardClass}>
						<Card.Header>Off-hours</Card.Header>
						<Card.Content>
							<p className="font-semibold">Gaming and homelabbing</p>
							<p className="text-foreground/75">Building, experimenting, and learning beyond the day job.</p>
						</Card.Content>
						<Card.Footer>
							<PillLink
								href="https://steamcommunity.com/id/febkosq8"
								target="_blank"
								rel="noreferrer"
								size="sm"
								variant="outline"
								className="rounded-full"
							>
								Steam
							</PillLink>
						</Card.Footer>
					</Card>
				</div>
			</div>
		</div>
	);
}
