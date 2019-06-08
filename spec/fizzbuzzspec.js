describe("Fizz Buzz Game", function() {

    beforeEach(function() {
        game = new fizzBuzzGame();
    });

    describe("Checks fb input", function() {
        it("should exist", function() {
            expect(fizzBuzzGame).toBeDefined();
        });
    });
    
        describe("Checks fb input", function() {
        it("should return Fizz", function() {
            var result = fizzBuzzGame(3)
            expect(result).toBe("Fizz");
        });
    });

       describe("Checks fb input", function() {
        it("should return Fizz", function() {
            var result = fizzBuzzGame(5)
            expect(result).toBe("Buzz");
        });
    });

});


