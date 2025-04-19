import { clsx } from "clsx";
interface LinkPillProps extends React.ComponentPropsWithoutRef<"a"> {
	href: string;
	active?: boolean;
}

const LinkPill = ({ href, active, className, children }: LinkPillProps) => {
	return (
		<a
			href={href}
			className={clsx(
				`focus-visible:ring-opacity-75 inline-flex w-full items-center justify-center rounded-md p-3 text-xl font-bold whitespace-nowrap text-foreground transition hover:bg-accent hover:text-primary focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring`,
				active ? "text-primary" : "text-foreground",
				className,
			)}
		>
			{children}
		</a>
	);
};

export default LinkPill;
