import LinkPill from "@feb/components/ui/LinkPill";
import { Menu } from "@feb/components/ui/Menu";
import ThemeSwitcher from "@feb/components/ui/ThemeSwitcher";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Header() {
	const [currHref, setCurrHref] = useState(window.location.hash);
	useEffect(() => {
		window.addEventListener("hashchange", () => {
			setCurrHref(window.location.hash);
		});
	}, []);

	const navigationItems = [
		{ href: "#about", label: "About" },
		{ href: "#skillset", label: "Skillset" },
		{ href: "#projects", label: "Projects" },
		{ href: "#socials", label: "Socials" },
	];

	return (
		<div className="sticky top-0 z-50 flex w-full items-center justify-between border border-b-2 bg-background px-8 py-1 text-lg lg:text-2xl">
			<a href="/" className="font-bold">
				Febkosq8
			</a>
			<div className="flex items-center gap-2">
				{/* Desktop Navigation - Hidden on small screens */}
				<div className="hidden items-center gap-2 md:flex">
					{navigationItems.map((item) => (
						<LinkPill key={item.label} active={currHref === item.href} href={item.href}>
							{item.label}
						</LinkPill>
					))}
				</div>

				{/* Mobile Navigation - Dropdown menu for small screens */}
				<div className="md:hidden">
					<Menu buttonText={<FontAwesomeIcon icon={faBars} />}>
						{navigationItems.map((item) => (
							<Menu.Item key={item.label} asChild>
								<a
									href={item.href}
									className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-primary ${
										currHref === item.href ? "font-bold text-primary" : "text-foreground"
									}`}
								>
									{item.label}
								</a>
							</Menu.Item>
						))}
					</Menu>
				</div>

				<ThemeSwitcher />
			</div>
		</div>
	);
}
