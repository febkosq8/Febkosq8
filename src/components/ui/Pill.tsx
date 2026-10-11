import { cx } from "@rinzai/zen";
import { forwardRef, ReactNode } from "react";
import { Link } from "react-router";

interface PillProps {
	as?: React.ElementType;
	children: ReactNode;
	active?: boolean;
	className?: string;
	href?: string;
	[key: string]: any;
}

const Pill = forwardRef<any, PillProps>(({ as, children, active, className, href, ...props }, ref) => {
	const Tag = as || Link;
	return (
		<Tag
			to={href}
			className={cx(
				`px-3 py-2 text-xl font-bold ${
					active ? "bg-primary text-primary-foreground" : "text-muted-foreground"
				} hover:bg-accent hover:text-accent-foreground`,
				className,
			)}
			ref={ref}
			{...props}
			viewTransition
		>
			{children}
		</Tag>
	);
});

export default Pill;
