import { clsx } from "clsx";
interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}
const Card = (props: CardProps) => {
	const { className, ...rest } = props;
	return <div className={clsx("card rounded-lg border p-4 shadow-xs", className)} {...rest} />;
};

const Header = (props: CardProps) => {
	const { className, ...rest } = props;
	return <h2 className={clsx("card-header typography-heading-2 flex flex-col", className)} {...rest} />;
};
const Content = (props: CardProps) => {
	const { className, ...rest } = props;
	return (
		<div
			className={clsx("card-content typography-heading-4 justify-between py-2 whitespace-pre-wrap", className)}
			{...rest}
		/>
	);
};
const Footer = (props: CardProps) => {
	const { className, ...rest } = props;
	return (
		<div className="flex items-center justify-start border-t pt-2">
			<h2 className={clsx("card-footer text-2xl", className)} {...rest} />
		</div>
	);
};
Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
export default Card;
