import "./ShortURL.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import APIHandler from "../../handlers/APIHandler";
const ShortURL = () => {
	document.title = "Febkosq8 | ShortURL";
	const { redirectUrl } = useParams();
	const [fullURL, setFullURL] = useState("");
	const [shortName, setShortName] = useState("");
	const [output, setOutput] = useState("");
	const {
		data: redirectData,
		isSuccess: isFetchedShortUrlCheckSuccess,
		error: redirectDataError,
		isError: isFetchedLogStatsError,
	} = useQuery({
		queryKey: ["ShortUrlCheck", redirectUrl],
		queryFn: () => APIHandler.getShortURL(redirectUrl),
		retry: 0,
		enabled: !!redirectUrl,
	});
	useEffect(() => {
		if (isFetchedShortUrlCheckSuccess) {
			try {
				new URL(redirectData.url);
				window.location.href = redirectData.url;
			} catch (e) {
				setOutput(redirectData);
			}
		}
		if (isFetchedLogStatsError) {
			setOutput(redirectDataError?.response?.data.error ?? "Error");
		}
	}, [redirectData, isFetchedShortUrlCheckSuccess, redirectDataError, isFetchedLogStatsError]);

	const urlShortener = useMutation({
		mutationFn: (shortName, fullURL) => APIHandler.addShortURL(shortName, fullURL),
		onSuccess: (data) => {
			setOutput(data?.message ?? "Success");
		},
		onError: (data) => {
			setOutput(data?.response?.data?.error ?? "Error");
		},
	});
	return (
		<div className="App pt-4">
			<div className="header">
				<nav id="navbar-ShortURL" className="navbar fixed-top bg-light py-2">
					<a className="navbar-brand px-2" href="/ShortURL">
						ShortURL
					</a>
				</nav>
			</div>
			<div
				className="body-container"
				data-bs-spy="scroll"
				data-bs-target="#navbar-ShortURL"
				data-bs-root-margin="0px 0px -40%"
				data-bs-smooth-scroll="true"
				tabIndex="0"
			>
				<section align="left" className="section px-2" id="mainPage">
					<h3 className="py-5">{`Go to \`/{shortName}\` to redirect to the full URL`}</h3>
					<div className="w-25">
						<div className="form-floating mb-3">
							<input
								type="text"
								className={`form-control`}
								id="shortNameInput"
								placeholder="Short Name"
								value={shortName}
								onChange={(e) => setShortName((curr) => e.target.value)}
							/>
							<label htmlFor="shortNameInput">Short Name</label>
						</div>
						<div className="form-floating">
							<input
								type="text"
								className={`form-control`}
								id="fullURLInput"
								placeholder="Full URL"
								value={fullURL}
								onChange={(e) => setFullURL((curr) => e.target.value)}
							/>
							<label htmlFor="fullURLInput">Full URL</label>
						</div>
						<button className="btn btn-primary mt-3 w-100" onClick={() => urlShortener.mutate({ shortName, fullURL })}>
							Submit
						</button>
					</div>
					<h3 className="py-5">{output}</h3>
				</section>
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default ShortURL;
