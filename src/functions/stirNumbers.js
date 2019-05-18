export default function stirNumbers(number) {
    let arrayNumbers = [];
	let stirredNumbers = [];
    for (let i = 0; i < number; i++) {
        arrayNumbers.push(i);
    }
	
	while (arrayNumbers.length !== 0) {
		let randIndex = Math.floor(Math.random() * arrayNumbers.length);
		stirredNumbers.push(arrayNumbers[randIndex]);
		arrayNumbers.splice(randIndex, 1);
    }
	return stirredNumbers;
}

