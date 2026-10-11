import { cx } from "@rinzai/zen";
interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
	hoverable?: boolean;
}
const Card = (props: CardProps) => {
	const { className, hoverable = true, ...rest } = props;
	return (
		<div
			className={cx(
				"group card rounded-lg border border-foreground/20 p-4 shadow-xs",
				hoverable && "transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-primary",
				className,
			)}
			{...rest}
		/>
	);
};

const Header = (props: CardProps) => {
	const { className, ...rest } = props;
	return (
		<h2
			className={cx("card-header flex w-full typography-heading-3 flex-col border-foreground/20 px-2 pb-2", className)}
			{...rest}
		/>
	);
};
const Content = (props: CardProps) => {
	const { className, ...rest } = props;
	return (
		<div
			className={cx(
				"card-content typography-paragraph mt-0! w-full justify-between px-2 pt-2 whitespace-pre-wrap",
				className,
			)}
			{...rest}
		/>
	);
};
const Footer = (props: CardProps) => {
	const { className, ...rest } = props;
	return (
		<div
			className={cx(
				"card-footer mt-auto mb-0 flex w-full items-end justify-start border-t border-foreground/20 px-2 py-2",
				className,
			)}
			{...rest}
		/>
	);
};
Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
export default Card;
