// let check = document.querySelectorAll('#language-toggle');

// check.addEventListener('click', language);

// function language() {
// 	let id = check.checked;
// 	if (id) {
// 		location.href = '../../html/index-en.html';
// 	} else {
// 		location.href = '../../../index.html';
// 	}
// }

// export default language;

// function language() {
// 	let check = document.querySelector('#language-toggle');

// 	check.addEventListener('click', () => {
// 		let id = check.checked;
// 		if (id) {
// 			location.href = '../../html/index-en.html';
// 		} else {
// 			location.href = '../../../index.html';
// 		}
// 	});
// }

// export default language;

const checkbox = document.getElementById('language-toggle');
checkbox.addEventListener('change', language);

function language() {
	let isChecked = checkbox.checked;
	console.log(isChecked);

	if (isChecked) {
		location.href = '/assets/html/index-en.html#Home';
	} else {
		location.href = '/assets/html/index.html#Home';
	}
}

export default language;
