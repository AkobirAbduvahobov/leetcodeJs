/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sanoq = 0;
    
    if( s.length != t.length ) return false;

    for( var i = 0 ; i < s.length; i++ )
    {
        for( var j = 0; j < t.length; j++ )
        {
            if( s[i] === t[j] )
            {
                sanoq = sanoq + 1;
                t = remove(t,j);
                break;
            }
        }
        if( t.length == 0 ) return true;
        if( s.length - 1 === i ) return false;
    }

    return false;

};

var remove = function( s = "", n = 0 )
{
    return s.substr(0, n) + s.substr(n+1);
}