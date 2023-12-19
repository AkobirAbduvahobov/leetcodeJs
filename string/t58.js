/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) 
{
    
    
    var counter = 0;
    var i = 0;
    var a = 5;
    while( true )
    {
        if( s[s.length-1 - i] !== ' ' )
        {
            a = 4;
        }
        if( a == 4 ) 
        {
            ++counter;
            if( i == s.length ) return  counter-1;
            if( s[s.length-1 - i] === ' ' )
            {
                return counter-1;
            }
        }
        ++i;
    }
    return counter-1;
};

var test1 = "Salom dunyosa qale endi    ";
var res = lengthOfLastWord(test1);
console.log(res);