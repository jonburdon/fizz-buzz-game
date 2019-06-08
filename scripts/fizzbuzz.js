fizzBuzzGame = function(fb) {
    if (isNaN(fb)) {
        return "Please enter a number."
    }
    else if (fb < 0) {
        return "Number should be 0 or higher."
    }
    
    else if (fb % 3 === 0) {
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