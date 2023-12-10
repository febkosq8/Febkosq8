import { clsx } from "clsx";

const Input = ({ className, ...rest }) => {
	return (
		<input
			{...rest}
			autoComplete="off"
			className={clsx(
				className,
				"h-10",
				"placeholder:gray-800 rounded border border-blue-800 bg-slate-300 pl-5 text-black",
				"focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600",
				"disabled:cursor-not-allowed disabled:border-gray-500",
				"dark:bg-zinc-900 dark:text-stone-400 dark:disabled:text-slate-400 whitespace-pre-wrap"
			)}
		/>
	);
};

export default Input;
