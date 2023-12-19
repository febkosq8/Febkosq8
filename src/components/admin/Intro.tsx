import { useSession } from "next-auth/react";
export default function Intro() {
	const { data: session } = useSession();
	return (
		<div
			className="intro p-5 flex flex-col items-center justify-center whitespace-pre-wrap text-center text-5xl min-h-[theme(spacing.fit-screen)]"
			id="intro"
		>
			<p>Hello</p>
			{session ? <>Welcome back, {session?.user?.name}!</> : <>Please sign in to proceed</>}
		</div>
	);
}
