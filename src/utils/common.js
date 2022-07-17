export const removeItemFromList = (list = [], comparerObj, key) => {
	return list.filter((item) => item[key] !== comparerObj[key]);
};
