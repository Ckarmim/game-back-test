module.exports = {
	generateUID() {
		let firstPart = (Math.random() * 46656) | 0;
		let secondPart = (Math.random() * 46656) | 0;
		firstPart = ("000" + firstPart.toString(36)).slice(-3);
		secondPart = ("000" + secondPart.toString(36)).slice(-3);
		return firstPart + secondPart;
	},
	debounce(func, wait) {
		let timeout;
		return function (...args) {
			const context = this;
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(context, args), wait);
		};
	},
};
