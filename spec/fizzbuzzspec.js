describe("Fizz Buzz Game", function() {

    beforeEach(function() {
        game = new fizzBuzzGame();
    });

    describe("Checks fb input", function() {
        it("should exist", function() {
            expect(fizzBuzzGame).toBeDefined();
        });
    });

});