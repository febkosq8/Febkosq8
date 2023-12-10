import Header from "@feb/components/shorturl/Header";
import Main from "@feb/components/shorturl/Main";
export default function ShortURL() {
	document.title = "Febkosq8 | ShortURL";
	return (
		<div className="jappan flex flex-col justify-center items-center">
			<Header />
			<Main />
		</div>
	);
}
