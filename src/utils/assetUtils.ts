export const getImageUrl = (folder: string, name: string): string => {
	return new URL(`/src/assets/images/${folder}/${name}`, import.meta.url).href;
};
