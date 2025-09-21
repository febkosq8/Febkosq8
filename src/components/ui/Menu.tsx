import Pill from "@feb/components/ui/Pill";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as DropdownBaseMenu from "@radix-ui/react-dropdown-menu";
import { cx } from "@rinzai/zen";
import { ReactNode } from "react";

interface MenuProps {
	className?: string;
	active?: boolean;
	buttonText: string | ReactNode;
	children: ReactNode;
}

interface MenuComponent extends React.FC<MenuProps> {
	Item: typeof DropdownBaseMenu.Item;
}

const MenuComponent: React.FC<MenuProps> = ({ className, active, buttonText, children }) => {
	return (
		<DropdownBaseMenu.Root>
			<DropdownBaseMenu.Trigger
				className={cx(
					`focus-visible:ring-opacity-75 focus-visible:ring-gray inline-flex w-fit items-center justify-center gap-1 rounded-md px-2 py-1 text-xl font-bold text-stone-400 hover:bg-blue-800 hover:text-white focus:outline-hidden focus-visible:ring-1`,
					active ? "bg-blue-600 text-white" : "",
					className,
				)}
			>
				{buttonText}
				<FontAwesomeIcon icon={faChevronDown} aria-hidden="true" />
			</DropdownBaseMenu.Trigger>
			<DropdownBaseMenu.Portal>
				<DropdownBaseMenu.Content
					loop={true}
					sideOffset={10}
					className="ring-opacity-5 w-fit origin-top-right divide-y divide-gray-100 rounded-md border-2 border-gray-600 bg-neutral-900 shadow-lg ring-1 ring-black focus:outline-hidden"
				>
					{children}
				</DropdownBaseMenu.Content>
			</DropdownBaseMenu.Portal>
		</DropdownBaseMenu.Root>
	);
};

const Menu: MenuComponent = Object.assign(MenuComponent, {
	Item: DropdownBaseMenu.Item,
});

interface MenuSubProps {
	active?: boolean;
	buttonText: string;
	children: ReactNode;
}

const MenuSub = ({ active, buttonText, children }: MenuSubProps) => {
	return (
		<DropdownBaseMenu.Sub>
			<DropdownBaseMenu.SubTrigger asChild>
				<Pill as={"div"} active={active} className="flex w-full items-center justify-between whitespace-nowrap">
					{buttonText}
					<FontAwesomeIcon icon={faChevronRight} className="ml-1" aria-hidden="true" />
				</Pill>
			</DropdownBaseMenu.SubTrigger>
			<DropdownBaseMenu.Portal>
				<DropdownBaseMenu.SubContent
					loop={true}
					sideOffset={2}
					arrowPadding={2}
					className="ring-opacity-5 w-fit origin-top-right divide-y divide-gray-100 rounded-md border-2 border-gray-600 bg-neutral-900 shadow-lg ring-1 ring-black focus:outline-hidden"
				>
					{children}
					<DropdownBaseMenu.Arrow className="size-2 fill-black dark:fill-stone-200" />
				</DropdownBaseMenu.SubContent>
			</DropdownBaseMenu.Portal>
		</DropdownBaseMenu.Sub>
	);
};

Object.assign(Menu, {
	Item: DropdownBaseMenu.Item,
});

export { Menu, MenuSub };
