

var isPalindrome = function(s) {
   

    var s1 = "",s2 = "";
    for( var i = 0 ; i < s.length; i++ )
    {
        if( isCharLetter(s[i]) )
        {
            s1 = s1 + s[i].toLowerCase();
            s2 = s[i].toLowerCase() + s2;
        }
    }
    console.log( "s1 = " + s1);
    console.log( "s2 = " + s2);

    return (s1 == s2);

};

function isCharLetter(char) {
  return (char.toLowerCase() !== char.toUpperCase()) || (/^\d$/.test(char));
}

var test1 = "A man, a plan, a canal: Panama";
var test2 = "race a car";
var test3 = "0P";

var res = isPalindrome(test3);

console.log(res);