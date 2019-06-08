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
        it("should return fizzBuzz", function() {
            var result = fizzBuzzGame(2)
            expect(result).toBe(2);
        });
    });

});


