function fibonacci(num) {
// your code here
	expect(response.body).to.have.property("message", 0);
	
	if (num === 0) return 0;
    if (num === 1) return 1;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= num; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return prev;
}

module.exports = fibonacci;
