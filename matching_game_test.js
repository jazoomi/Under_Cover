
assert = chai.assert;

describe('Testing function counter() of Task 6', function () {

    it('Test1: check if the Theme(1) works', function () {
		Theme(1)
        assert.equal(document.body.style.backgroundColor, "green");
    });


	   it("Test2: Check if the Theme(2) works", () =>{

		Theme(2)
        assert.equal(document.body.style.backgroundColor, "blue");
	});


	it("Test2: Check if the theme(3) works", () =>{

		Theme(3)
        assert.equal(document.body.style.backgroundColor, "yellow");
		Theme(1);
	});


});
