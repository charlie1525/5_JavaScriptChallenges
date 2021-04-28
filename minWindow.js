function MinWindowSubstring(strArr) {
	let str = strArr[0];
	let minWin = strArr[1].split('');

	//start with the smallest possible substrings, then go up
	for (let i = minWin.length, len = str.length; i <= len; i++ ) {
		for (j = 0; j <= len - i; j++) {
			let mySlice = str.substr(j, i);
			if (isContained(mySlice)) {
				return mySlice;
			}
		}
	}
	return 'Not in the string';

	function isContained(str) {
		let arr = str.split('');
		for (let i = 0, len = minWin.length; i < len; i++) {
			let index = arr.findIndex(val => {
				return val === minWin[i]
			});
			if (index === -1) {
				return false;
			} else {
				arr.splice(index, 1);
			}
		}
		return true;
	}
}

let window = ["ahffaksfajeeubsne", "jefaa"];
let answer = MinWindowSubstring(window);
console.log(answer);