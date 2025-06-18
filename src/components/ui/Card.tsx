import { cx } from "@rinzai/zen";
import { clsx } from "clsx";
interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}
const Card = (props: CardProps) => {
	const { className, ...rest } = props;
	return <div className={clsx("card rounded-lg border p-4 shadow-xs", className)} {...rest} />;
};

const Header = (props: CardProps) => {
	const { className, ...rest } = props;
	return (
		<h2 className={clsx("card-header flex w-full typography-heading-3 flex-col px-2 pb-2", className)} {...rest} />
	);
};
const Content = (props: CardProps) => {
	const { className, ...rest } = props;
	return (
		<p
			className={clsx(
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
		<div className={cx("mt-auto mb-0 flex w-full items-end justify-start border-t px-2 py-2", className)} {...rest} />
	);
};
Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
export default Card;
