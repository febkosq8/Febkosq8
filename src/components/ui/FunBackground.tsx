import GradientWashBackground from "@feb/components/ui/GradientWashBackground";
import IconBomb from "@feb/components/ui/IconBomb";

interface FunBackgroundProps {
	iconCount?: number;
	popClickThreshold?: number;
}

export default function FunBackground({ iconCount = 10, popClickThreshold = 4 }: FunBackgroundProps) {
	return (
		<div className="fun-background">
			<GradientWashBackground />
			<IconBomb count={iconCount} popClickThreshold={popClickThreshold} />
		</div>
	);
}
