export const scrollToElement = (selector: string, offset = 0): void => {
	const element = document.querySelector(selector);
	if (element) {
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.scrollY - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}
};
