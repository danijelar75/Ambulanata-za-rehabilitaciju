import { t as require_jsx_runtime } from "../index.js";
//#region app/BackToTop.tsx
var import_jsx_runtime = require_jsx_runtime();
function BackToTop() {
	const handleClick = (event) => {
		event.preventDefault();
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			window.scrollTo(0, 0);
			return;
		}
		const start = window.scrollY;
		const duration = 1100;
		const startTime = performance.now();
		const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);
		const scrollStep = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			window.scrollTo(0, start * (1 - easeOutCubic(progress)));
			if (progress < 1) requestAnimationFrame(scrollStep);
		};
		requestAnimationFrame(scrollStep);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: "back-to-top",
		href: "#top",
		"aria-label": "Povratak na početak stranice",
		title: "Povratak na početak",
		onClick: handleClick,
		children: "↑"
	});
}
//#endregion
export { BackToTop };
