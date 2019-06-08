fizzBuzzGame = function(fb) {
    if (fb % 3 === 0) {
        if (fb % 5 === 0) {
            return "FizzBuzz";
        }
        else {
            return "Fizz";
        }
    }
    else if (fb % 5 === 0){
        return "Buzz";
    }
    else {
        return fb;
    }
};