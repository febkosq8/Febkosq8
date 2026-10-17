import { cx } from "@rinzai/zen";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
	variant?: "primary" | "outline";
	size?: "sm" | "md";
}

const variants = {
	primary: "bg-primary text-primary-foreground hover:bg-primary/90",
	outline: "border border-foreground/40 bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
};

const sizes = {
	sm: "h-9 rounded-md px-3",
	md: "h-10 px-4 py-2",
};

export default function ButtonLink({
	className,
	size = "md",
	variant = "primary",
	...props
}: ButtonLinkProps) {
	return (
		<a
			className={cx(
				"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				variants[variant],
				sizes[size],
				className,
			)}
			{...props}
		/>
	);
}
