/**
 * Click Outside
 * @param {Node} node
 */
export default (node, _options = {}) => {
	const options = { include: [], onClickOutside: () => {}, ..._options };

	function detect({ target }) {
		if (!node.contains(target) || options.include.some((i) => target.isSameNode(i))) {
			options.onClickOutside();
		}
	}
	document.addEventListener('click', detect, { passive: true, capture: true });
	return {
		update(test) {
			console.log(test);
		},
		destroy() {
			document.removeEventListener('click', detect);
		}
	};
};
