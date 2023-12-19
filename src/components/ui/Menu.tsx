import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Float } from "@headlessui-float/react";
import { Menu as MenuBase, Transition } from "@headlessui/react";
import { clsx } from "clsx";
import { Fragment, ReactNode } from "react";

const Menu = ({
	active,
	href,
	buttonContent,
	children,
	className,
}: {
	active?: boolean;
	href?: string;
	buttonContent: ReactNode;
	children?: ReactNode;
	className?: string;
}) => {
	return (
		<a href={href}>
			<MenuBase as="div">
				<div className="relative min-w-fit">
					<Float floatingAs={Fragment} offset={4} autoUpdate flip placement="bottom">
						<MenuBase.Button
							className={clsx(
								`inline-flex rounded-md p-3 text-xl  font-bold transition w-full items-center justify-center text-foreground hover:text-secondary hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-opacity-75 whitespace-nowrap`,
								active ? "text-primary" : "text-foreground",
								className
							)}
						>
							{buttonContent}
							{!!children && <FontAwesomeIcon icon={faChevronDown} className="-mr-1 ml-2 h-4 w-4" aria-hidden="true" />}
						</MenuBase.Button>
						<Transition
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<MenuBase.Items className="w-fit origin-top-right divide-y divide-border rounded-md bg-background shadow-lg border border-ring focus:outline-none fill-foreground">
								{children}
							</MenuBase.Items>
						</Transition>
					</Float>
				</div>
			</MenuBase>
		</a>
	);
};
Menu.Item = MenuBase.Item;
export default Menu;
