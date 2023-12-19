import { Button } from "@feb/components/ui/Button";
import Input from "@feb/components/ui/Input";
import Header from "@feb/components/admin/Header";
import { useQuery } from "@tanstack/react-query";
import { getProviders, signIn } from "next-auth/react";
export default function AuthLogin() {
	document.title = "Febkosq8 | Sign In";
	const { isFetching: isFetchingProviders, data: providers } = useQuery({
		queryKey: ["providers"],
		queryFn: getProviders,
		enabled: true,
	});
	return isFetchingProviders ? (
		<p children={"Loading"} />
	) : (
		<div className="flex h-[stretch] w-full flex-col items-center justify-center">
			<Header />
			<div className="flex flex-col gap-2 divide-y-2 divide-blue-600 rounded-md border border-blue-600 p-3 w-1/6">
				{Object.values(providers || {})
					.filter((provider) => provider.id !== "002_Credentials")
					.map((provider) => (
						<div className={"relative grid grid-flow-row place-items-start gap-3 p-5 w-full"} key={provider.name}>
							<Button onClick={() => signIn(provider.id)} className="w-full">
								Sign in with {provider.name}
							</Button>
						</div>
					))}
				{Object.values(providers || {}).filter((provider) => provider.id === "002_Credentials").length > 0 && (
					<form
						className={"relative grid grid-flow-row place-items-start gap-3 p-5"}
						onSubmit={(e) => {
							e.preventDefault();
							signIn("002_Credentials", {
								username: (e.target as HTMLFormElement).username.value,
								password: (e.target as HTMLFormElement).password.value,
							});
						}}
					>
						<label className="col-span-auto w-full text-2xl font-bold text-slate-900 dark:text-stone-400">
							Username
							<Input className={"w-full"} required name="username" type="text" />
						</label>
						<label className="col-span-auto w-full text-2xl font-bold text-slate-900 dark:text-stone-400">
							Password
							<Input className="w-full" required name="password" type="password" />
						</label>
						<Button className="w-full" type="submit">
							Sign in with Credentials
						</Button>
					</form>
				)}
			</div>
		</div>
	);
}
