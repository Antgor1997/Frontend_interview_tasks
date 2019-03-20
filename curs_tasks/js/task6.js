/**
 * Given two strings, first and second. Find all letters (ignoring case)
 * which are present only in one string but not the other.
 */
function getUniqueLetters(first, second) {
    // Only change code below this line
    first=first.toLowerCase();
    second=second.toLowerCase();
    first=first.replace(/ /g,"");
    second=second.replace(/ /g,"");
    let result="";
    for (let i=0; i<first.length; i++){
        if (second.search(first.charAt(i))==-1){
            if (result.search(first.charAt(i))==-1){
                result=result+first.charAt(i);
            }
        }
    }
    for (let j=0; j<first.length; j++){
        if (first.search(second.charAt(j))==-1){
            if (result.search(second.charAt(j))==-1){
                result=result+second.charAt(j);
            }
        }
    }
    return result;
    // Only change code above this line
}


// Tests
test(getUniqueLetters('aBcdef', 'CdEfgh'), 'abgh');
test(getUniqueLetters('aAAaabBb', 'ab'), '');
test(getUniqueLetters('Happy New Year', 'nyh'), 'apewr');

function test(actual, expected, testName = '') {
    if (actual !== expected) {
        const errorMessage = `Test ${testName} failed: "${actual}" is not equal to expected "${expected}"`;
        console.error(errorMessage);
    } else {
        console.log(`Test ${testName} passed!`);
    }
}