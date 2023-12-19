import { clsx } from "clsx";
interface PillProps extends React.ComponentPropsWithoutRef<"a"> {
	active?: boolean;
}

const Pill = ({ children, active, className, ...props }: PillProps) => {
	return (
		<a
			className={clsx(
				`inline-flex p-4 text-xl  font-bold transition w-full items-center justify-center text-foreground hover:text-secondary hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-opacity-75 whitespace-nowrap`,
				active ? "text-primary" : "text-foreground",
				className
			)}
			{...props}
		>
			{children}
		</a>
	);
};

export default Pill;
