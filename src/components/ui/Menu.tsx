import Pill from "@feb/components/ui/Pill";
import * as DropdownBaseMenu from "@radix-ui/react-dropdown-menu";
import { cx } from "@rinzai/zen";
import { ReactNode } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

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
					"inline-flex w-fit items-center justify-center gap-1 rounded-md p-2 text-xl font-bold text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-hidden",
					active ? "bg-primary text-primary-foreground" : "",
					className,
				)}
			>
				{buttonText}
				<FaChevronDown aria-hidden="true" />
			</DropdownBaseMenu.Trigger>
			<DropdownBaseMenu.Portal>
				<DropdownBaseMenu.Content
					loop={true}
					sideOffset={14}
					className="ring-opacity-5 w-fit origin-top-right divide-y divide-border rounded-md border border-border bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/10 focus:outline-hidden"
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
					<FaChevronRight className="ml-1" aria-hidden="true" />
				</Pill>
			</DropdownBaseMenu.SubTrigger>
			<DropdownBaseMenu.Portal>
				<DropdownBaseMenu.SubContent
					loop={true}
					sideOffset={14}
					arrowPadding={2}
					className="ring-opacity-5 w-fit origin-top-right divide-y divide-border rounded-md border border-border bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/10 focus:outline-hidden"
				>
					{children}
					<DropdownBaseMenu.Arrow className="size-2 fill-popover" />
				</DropdownBaseMenu.SubContent>
			</DropdownBaseMenu.Portal>
		</DropdownBaseMenu.Sub>
	);
};

Object.assign(Menu, {
	Item: DropdownBaseMenu.Item,
});

export { Menu, MenuSub };
