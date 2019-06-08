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
        it("should return buzz", function() {
            var result = fizzBuzzGame(5)
            expect(result).toBe("Buzz");
        });
    });
    
           describe("Checks fb input", function() {
        it("should return FizzBuzz", function() {
            var result = fizzBuzzGame(15)
            expect(result).toBe("FizzBuzz");
        });
    });
    
               describe("Checks fb input", function() {
        it("should return 1", function() {
            var result = fizzBuzzGame(1)
            expect(result).toBe(1);
        });
    });

});


