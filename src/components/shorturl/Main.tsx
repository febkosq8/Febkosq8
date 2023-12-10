import Input from "@feb/components/ui/Input";
import APIHandler from "@feb/handlers/APIHandler";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@feb/components/ui/Button";
import { AxiosError } from "axios";
export default function Main() {
	const { redirectUrl } = useParams();
	const [shortValues, setShortValues] = useState({
		shortName: "",
		fullURL: "",
	});
	const [shortResponse, setShortResponse] = useState({ valid: false, data: "" });
	const {
		data: redirectData,
		isSuccess: isFetchedShortUrlCheckSuccess,
		error: redirectDataError,
		isError: isFetchedLogStatsError,
	} = useQuery({
		queryKey: ["ShortUrlCheck", redirectUrl],
		queryFn: () => APIHandler.getShortURL(redirectUrl!),
		retry: 0,
		enabled: !!redirectUrl,
	});
	useEffect(() => {
		if (isFetchedShortUrlCheckSuccess) {
			try {
				new URL(redirectData.url);
				window.location.href = redirectData.url;
			} catch (e) {
				setShortResponse({ valid: true, data: redirectData });
			}
		}
		if (isFetchedLogStatsError) {
			setShortResponse({
				valid: false,
				data: (redirectDataError as AxiosError<{ error: string }>)?.response?.data.error ?? "Error",
			});
		}
	}, [redirectData, isFetchedShortUrlCheckSuccess, redirectDataError, isFetchedLogStatsError]);

	const urlShortener = useMutation({
		mutationFn: APIHandler.addShortURL,
		onSuccess: (data) => {
			setShortResponse({ valid: true, data: data?.message ?? "Success" });
		},
		onError: (data) => {
			setShortResponse({
				valid: false,
				data: (data as AxiosError<{ error: string }>)?.response?.data?.error ?? "Error",
			});
		},
	});
	return (
		<div
			className="home p-5 flex flex-col items-center justify-center gap-2 min-h-[theme(spacing.fit-screen)]"
			id="main"
		>
			{!!shortResponse.data.length ? (
				<p className={`border ${shortResponse.valid ? "border-green-500" : "border-red-500"}  p-5 w-full`}>
					{shortResponse.data}
				</p>
			) : (
				<p className="border border-white p-5 w-full">
					Add `/ShortName` to this URL to go to your existing ShortURL entry
				</p>
			)}
			<form
				className="flex flex-col justify-start items-start gap-2"
				onSubmit={(e) => {
					e.preventDefault();
					urlShortener.mutate(shortValues);
				}}
			>
				<label className="text-xl font-bold">Short Name</label>
				<Input
					className="w-[35rem]"
					required
					as="input"
					type="text"
					value={shortValues.shortName ?? ""}
					onChange={(e) => {
						setShortValues((curr) => {
							curr.shortName = e.target.value;
							return structuredClone(curr);
						});
					}}
					placeholder={"Short Name"}
				/>
				<label className="text-xl font-bold">Full URL</label>
				<Input
					className="w-full"
					required
					as="input"
					type="text"
					value={shortValues.fullURL ?? ""}
					onChange={(e) => {
						setShortValues((curr) => {
							curr.fullURL = e.target.value;
							return structuredClone(curr);
						});
					}}
					placeholder={"Full URL"}
				/>
				<Button type="submit">Shorten URL</Button>
			</form>
		</div>
	);
}
