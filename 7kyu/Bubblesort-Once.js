const bubblesortOnce = (a) => {
	// TODO
	const newArr = [...a]
	newArr.map((el, i) => {
		if (el > newArr[i + 1]) {
			newArr[i] = newArr[i + 1];
			newArr[i + 1] = el;
		}
	});
	return newArr
};

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));
