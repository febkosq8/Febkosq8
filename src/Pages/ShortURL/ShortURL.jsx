import "./ShortURL.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import APIHandler from "../../handlers/APIHandler";
const ShortURL = () => {
	document.title = "Febkosq8 | ShortURL";
	const { redirectUrl } = useParams();
	const [fullURL, setFullURL] = useState("");
	const [shortName, setShortName] = useState("");
	useQuery(["shortUrlCheck", redirectUrl], () => APIHandler.getShortURL(redirectUrl), {
		enabled: !!redirectUrl,
		onSuccess: (data) => {
			try {
				new URL(data);
				window.location.href = data;
			} catch (e) {
				setWarning(data);
			}
		},
	});
	const urlShortener = useMutation((shortName, fullURL) => APIHandler.shortURL(shortName, fullURL), {
		onSuccess: (data) => {
			setWarning(data);
		},
		onError: (data) => {
			setWarning(data?.response?.data);
		},
	});
	const [warning, setWarning] = useState("");
	return (
		<div className="App pt-4">
			<div className="header">
				<nav id="navbar-ShortURL" className="navbar fixed-top bg-light py-2">
					<a className="navbar-brand px-2" href="/">
						Febkosq8 | ShortURL
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
					<h3>{warning}</h3>
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
				</section>
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default ShortURL;
