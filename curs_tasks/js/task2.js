function findLargestElement(arr) {
    // Only change code below this line
    let max=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max<arr[i]){
            max=arr[i];
        }
    }
    return max;
    // Only change code above this line
}

// Tests
test(findLargestElement([0]), 0, 'arrayWithOneElement');
test(findLargestElement([]), undefined, 'emptyArray');
test(findLargestElement([1, 1, 1, 1]), 1, 'arrayWithSameElements');
test(findLargestElement([1, 2, 3, 4]), 4, 'arrayWithLargestElementInTheEnd');
test(findLargestElement([1, 4, 3, 2]), 4, 'arrayWithLargestElementInTheMiddle');
test(findLargestElement([-1, -4, -3, -2]), -1, 'arrayWithNegativeElements');



function test(actual, expected, testName = '') {
    if (actual !== expected) {
        const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
        console.error(errorMessage);
    } else {
        console.log(`Test ${testName} passed!`);
    }

}