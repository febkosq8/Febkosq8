import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Float } from "@headlessui-float/react";
import { Menu as MenuBase, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Menu = ({ active, buttonText, children }) => {
	return (
		<MenuBase as="div">
			<div className="relative min-w-fit">
				<Float floatingAs={Fragment} offset={4} autoUpdate flip placement="bottom">
					<MenuBase.Button
						className={`rounded-md p-3 text-xl  font-bold ${
							active ? "bg-primary" : ""
						} transition inline-flex w-full items-center justify-center text-foreground hover:bg-accent hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-opacity-75`}
					>
						{buttonText}
						<FontAwesomeIcon icon={faChevronDown} className="-mr-1 ml-2 h-4 w-4" aria-hidden="true" />
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
	);
};
Object.assign(Menu, { Item: MenuBase.Item });
export default Menu;
