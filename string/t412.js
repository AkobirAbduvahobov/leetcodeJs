/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const strings = [];
    for( var i = 1 ; i <= n ; i++ )
    {
        if( i % 15 == 0 )
        {
            strings.push("FizzBuzz");
        }
        else if( i % 5 == 0 )
        {
            strings.push("Buzz");
        }
        else if( i % 3 == 0 )
        {
            strings.push("Fizz");
        }
        else 
        {
            strings.push(i.toString());
        }

    }
    return strings;
};