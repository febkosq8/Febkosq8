import ThemeSwitcher from "@feb/components/ui/ThemeSwitcher";
import Menu from "@feb/components/ui/Menu";
import Pill from "@feb/components/ui/Pill";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Header() {
	const { data: session } = useSession();
	console.log({ session });
	return (
		<div className="flex text-2xl items-center w-full justify-between px-16 h-16 bg-background border-b-2 sticky top-0">
			<a href="/" className="font-bold">
				Febkosq8 | Admin
			</a>
			<div className="flex items-center gap-4">
				<a href="#about">About</a>
				{session ? (
					<Menu buttonText={session?.user?.name}>
						<Menu.Item>
							<Pill href="/admin/profile" className="flex w-full whitespace-nowrap p-6 rounded-t-sm">
								User Profile
							</Pill>
						</Menu.Item>
						<Menu.Item>
							<Pill
								onClick={() => {
									signOut({ callbackUrl: "/admin" });
								}}
								className="flex w-full whitespace-nowrap p-6 rounded-b-sm"
							>
								Log out
							</Pill>
						</Menu.Item>
					</Menu>
				) : (
					<Pill onClick={signIn} className="flex w-full whitespace-nowrap p-6 rounded-t-sm">
						Sign in
					</Pill>
				)}
				<ThemeSwitcher />
			</div>
		</div>
	);
}
