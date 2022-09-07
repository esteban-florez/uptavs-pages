const getFirstEmptyBox = boxes => boxes.find(box => box.value.length === 0);

const boxes = document.querySelectorAll('form input');
const boxesArr = Array.from(boxes.values());

function lockBoxes() {
	const firstEmptyBox = getFirstEmptyBox(boxesArr) ?? boxesArr[3];
	boxesArr.forEach(box => {
		if(box === firstEmptyBox) {
			box.style.pointerEvents = 'all';
			return;
		}
		box.style.pointerEvents = 'none';
	})
}

function moveCursor(e) {
	const boxNum = boxesArr.indexOf(this);
	
	if(e.inputType === 'insertText') {
		boxesArr[boxNum + 1]?.focus();
	} else {
		boxesArr[boxNum - 1]?.focus();
	}

	lockBoxes();
}

boxesArr.forEach(box => {
	box.addEventListener('input', moveCursor)
});

lockBoxes();