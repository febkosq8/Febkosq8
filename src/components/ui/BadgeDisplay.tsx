import { SkillItem } from "@feb/components/febkos/Skillset";
import { cx } from "@rinzai/zen";
interface BadgeDisplayProps extends React.ComponentPropsWithoutRef<"div"> {
	badgeList: SkillItem[];
	baseClassName?: string;
	topic?: string;
}
const BadgeDisplay = ({
	baseClassName = "grid grid-flow-row grid-cols-2 gap-2 lg:grid-cols-4",
	className,
	badgeList,
	topic,
}: BadgeDisplayProps) => {
	return (
		<div className={cx(`BadgeDisplay${topic ? `_${topic}` : "_Generic"}`, baseClassName)}>
			{badgeList.map((item) => (
				<div
					className={cx(`SkillBadge`, className)}
					key={`${item.name}_Badge`}
					style={{ backgroundColor: `${item.bgColor}` }}
					title={item.name}
				>
					<img className="h-auto w-auto" src={item.badge} alt={item.name} width={100} height={50} />
				</div>
			))}
		</div>
	);
};

export default BadgeDisplay;
