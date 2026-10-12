import { cx } from "@rinzai/zen";
interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
	hoverable?: boolean;
	hoverLift?: boolean;
	hoverBorder?: boolean;
	hoverGradient?: boolean;
}
const Card = (props: CardProps) => {
	const {
		className,
		hoverable = true,
		hoverLift = true,
		hoverBorder = true,
		hoverGradient = true,
		onPointerMove,
		...rest
	} = props;
	const hasHoverLift = hoverable && hoverLift;
	const hasHoverBorder = hoverable && hoverBorder;
	const hasHoverGradient = hoverable && hoverGradient;
	const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
		onPointerMove?.(event);
		if (!hasHoverGradient) return;

		const bounds = event.currentTarget.getBoundingClientRect();
		event.currentTarget.style.setProperty("--card-pointer-x", `${event.clientX - bounds.left}px`);
		event.currentTarget.style.setProperty("--card-pointer-y", `${event.clientY - bounds.top}px`);
	};
	return (
		<div
			className={cx(
				"group card relative rounded-lg border border-foreground/40 bg-card/90 p-4 shadow-xs",
				hasHoverGradient && "card-cursor-border",
				(hasHoverLift || hasHoverBorder) && "transition-[border-color,transform] duration-300 ease-out",
				hasHoverLift && "hover:-translate-y-1",
				hasHoverBorder && "hover:border-primary",
				className,
			)}
			onPointerMove={hasHoverGradient ? handlePointerMove : onPointerMove}
			{...rest}
		/>
	);
};

const Header = (props: CardProps) => {
	const { className, ...rest } = props;
	return (
		<h2
			className={cx("card-header flex w-full typography-heading-3 flex-col border-foreground/40 px-2 pb-2", className)}
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
				"card-footer mt-auto mb-0 flex w-full items-end justify-start border-t border-foreground/40 px-2 py-2",
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
