//test cases 1012ab22f
assert = chai.assert;

describe('Testing function counter() of Task 6', function () {

    it('Test 1: counter() returns 1 after 19 calls', function () {
        assert.equal(theme(), 1);
    });


	it("Test2 : counter() returns 0 after 20 calls", () =>{

		assert.equal(counter(), 0);
	});




	   it("Test3 : counter() returns BOOM! after 21 calls", () =>{

		assert.equal(counter(), "BOOM!");
	});


});

