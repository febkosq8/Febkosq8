import { cx } from "@emotion/css";
import { forwardRef } from "react";

const Pill = ({ children, active, className, ...props }, ref) => {
	return (
		<a
			className={cx(
				`p-3  text-xl  font-bold ${
					active ? "bg-blue-600 text-white" : "text-stone-400"
				} hover:bg-blue-900 hover:text-white`,
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
