export const getImageUrl = (folder: string, name: string): string => {
	return new URL(`../assets/images/${folder}/${name}`, import.meta.url).href;
};
