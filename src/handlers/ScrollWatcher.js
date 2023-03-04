function scrollWatcher(watchElement) {
	let options = {
		root: document.querySelector(".body-container"),
		rootMargin: "0px",
		threshold: 0.9,
	};
	const navItemList = document.querySelector(watchElement)?.children[1]?.children;
	const observer = new IntersectionObserver((entries, observer) => {
		const navItemArray = Array.from(navItemList);
		entries.forEach((entry) => {
			const entryId = `#${entry.target.id}`;
			navItemArray?.forEach((child) => {
				child?.children?.[0]?.classList?.remove?.("active");
				if (entry.isIntersecting && child?.children?.[0]?.hash === entryId) {
					child?.children?.[0]?.classList?.add?.("active");
				}
			});
		});
		setTimeout(() => {
			if (!navItemArray.some((child) => child?.children?.[0]?.classList?.contains?.("active"))) {
				navItemArray?.[0]?.children?.[0]?.classList?.add?.("active");
			}
		}, 1000);
	}, options);
	Array.from(navItemList).forEach((child) => {
		const entry = child.children[0].hash;
		const element = document.querySelector(entry);
		observer.observe(element);
	});
	return observer;
}
export default scrollWatcher;
