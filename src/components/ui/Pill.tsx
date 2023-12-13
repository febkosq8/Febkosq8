import { cx } from "@emotion/css";
import { forwardRef } from "react";

const Pill = ({ children, active, className, ...props }, ref) => {
	return (
		<a
			className={cx(
				`p-3  text-xl  font-bold text-foreground hover:bg-accent transition`,
				active && "bg-primary",
				className
			)}
			ref={ref}
			{...props}
		>
			{children}
		</a>
	);
};

export default forwardRef(Pill);
