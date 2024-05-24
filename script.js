function fibonacci(num) {
// your code here
	
	if (num === 0) return 0;
    if (num === 1) return 1;

    let prev = 0;
	let curr = 1;
	let next = 0;
	
    for (let i = 2; i <= num; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
module.exports = fibonacci;