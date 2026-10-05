console.log("Array Machine Coding Problems");

// ============================================================
// PROBLEM 01: Reverse and Array
// ============================================================

// Problem Statement:
// Given an array, reverse the elements of the array.
//
// Example:
// Input:  [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// ------------------------------------------------------------
// SOLUTION: Two Pointer Approach
// ------------------------------------------------------------

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left ++;
        right --;
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([1]));
console.log(reverseArray([]));

// Time Complexity: O(n)
//
// Explanation:
// We traverse approximately n/2 elements.
// Ignoring constants, O(n/2) becomes O(n).

// Space Complexity: O(1)
//
// Explanation:
// We use only two pointer variables (left and right).
// No additional array is created.
// Therefore, the algorithm uses constant auxiliary space.

// This is an IN-PLACE algorithm.







// ============================================================
// PROBLEM 02: Find Maximum and Minimum in an Array
// ============================================================

// Problem Statement:
// Given an array of numbers, find the maximum and minimum
// values without using Math.max() or Math.min().
//
// Example:
// Input:  [10, 5, 25, 8, 15]
// Output:
// Maximum: 25
// Minimum: 5

function findMaxAndMin(arr) {
    if(arr.length === 0) {
        return {
            max: undefined,
            min: undefined,
        }
    }

    let max = arr[0], min = arr[0];

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }
    return {
        max,
        min
    }
}

console.log(findMaxAndMin([10, 5, 25, 8, 15]));
// Output: { max: 25, min: 5 }

console.log(findMaxAndMin([100, 50, 25, 75]));
// Output: { max: 100, min: 25 }

console.log(findMaxAndMin([-10, -5, -25, -8]));
// Output: { max: -5, min: -25 }

console.log(findMaxAndMin([10]));
// Output: { max: 10, min: 10 }

console.log(findMaxAndMin([]));

// ------------------------------------------------------------
// COMPLEXITY
// ------------------------------------------------------------

// Time Complexity: O(n)
//
// Explanation:
// We traverse the array once.
// Therefore, if the array contains n elements,
// we perform approximately n comparisons.
//
// Time Complexity = O(n)

// Space Complexity: O(1)
//
// Explanation:
// We only use two variables: max and min.
// No additional data structure is created.
//
// Space Complexity = O(1)

// This is an IN-PLACE / CONSTANT-SPACE approach.








// ============================================================
// PROBLEM 03: Find the Second Largest Element
// ============================================================

// Problem Statement:
// Given an array of numbers, find the second largest element
// without using built-in sorting methods.

function findSecondLargest(arr) {
    if(arr.length < 2) {
        return undefined;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    if(secondLargest === -Infinity) return undefined;
    return secondLargest;
}

console.log(findSecondLargest([10, 5, 25, 8, 15]));
// Output: 15

console.log(findSecondLargest([10, 20, 30, 40]));
// Output: 30

console.log(findSecondLargest([100, 50, 75, 25]));
// Output: 75

console.log(findSecondLargest([-10, -5, -25, -8]));
// Output: -8

console.log(findSecondLargest([10, 10, 5, 8]));
// Output: 8

console.log(findSecondLargest([10]));
// Output: undefined

console.log(findSecondLargest([10, 10]));
// Output: undefined

// Time Complexity: O(n)
//
// Explanation:
// We traverse the array only once.
// Therefore, for n elements, we perform O(n) operations.
//
// Time Complexity = O(n)

// Space Complexity: O(1)
//
// Explanation:
// We only use two variables:
// largest and secondLargest.
//
// No additional array or data structure is created.
//
// Space Complexity = O(1)

// This is a SINGLE-PASS and CONSTANT-SPACE solution.
// ============================================================

// ============================================================
// PROBLEM 04: Remove Duplicates from an Array
// ============================================================

// Problem Statement:
// Given an array, remove duplicate elements and return
// an array containing only unique elements.
//
// Example:
// Input:  [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function removeDuplicatesUsingSet(arr) {
    return [... new Set(arr)];
}
console.log(removeDuplicatesUsingSet([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]

console.log(removeDuplicatesUsingSet([1, 1, 1, 2, 2, 3]));
// Output: [1, 2, 3]

console.log(removeDuplicatesUsingSet([5, 4, 3, 2, 1]));
// Output: [5, 4, 3, 2, 1]

console.log(removeDuplicatesUsingSet([]));
// Output: []

console.log(removeDuplicatesUsingSet([10]));
// Output: [10]

// Without using Set
function removeDuplicates1(arr) {
    let seen = {};
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(!seen[arr[i]]) {
            seen[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}

function removeDuplicates(arr) {
    const seen = new Set();
    let result = [];

    for(let item of arr) {
        if(!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
// Output: [1, 2, 3]

console.log(removeDuplicates([5, 4, 3, 2, 1]));
// Output: [5, 4, 3, 2, 1]

console.log(removeDuplicates([]));
// Output: []

console.log(removeDuplicates([10]));
// Output: [10]

// ------------------------------------------------------------
// COMPLEXITY
// ------------------------------------------------------------

// Time Complexity: O(n)
//
// Explanation:
// We traverse the array only once.
// Object lookup is O(1) on average.
//
// Therefore:
// Time Complexity = O(n)

// Space Complexity: O(n)
//
// Explanation:
// In the worst case, all elements are unique.
// The 'seen' object and 'result' array can store n elements.
//
// Therefore:
// Space Complexity = O(n)

// ============================================================









// ============================================================
// PROBLEM 05: Find Duplicate Elements in an Array
// ============================================================

// Problem Statement:
// Given an array, find all elements that appear more than once.
//
// Example:
// Input:  [1, 2, 3, 2, 4, 5, 1, 3]
// Output: [1, 2, 3]

function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = [];
    for(let num of arr) {
        seen[num] = seen[num] ? seen[num] + 1 : 1;
    }

    for(let num in seen) {
        if(seen[num] > 1) {
            duplicates.push(num);
        }
    }
    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 3]));
// Output: [1, 2, 3]

console.log(findDuplicates([1, 1, 2, 2, 3, 3]));
// Output: [1, 2, 3]

console.log(findDuplicates([1, 2, 3, 4, 5]));
// Output: []

console.log(findDuplicates([5, 5, 5, 5]));
// Output: [5]

console.log(findDuplicates([]));
// Output: []

console.log(findDuplicates([10]));
// Output: []

// ------------------------------------------------------------
// COMPLEXITY
// ------------------------------------------------------------

// Time Complexity: O(n)
//
// First loop  → O(n)
// Second loop → O(k), where k = number of unique elements
//
// Since k <= n:
// O(n + k) → O(n)

// Space Complexity: O(n)
//
// The frequency object can contain up to n unique elements.
//
// Therefore:
// O(n)

// ============================================================







// ============================================================
// PROBLEM 06: Find Missing Number
// ============================================================

// Problem Statement:
// Given an array containing n distinct numbers from 0 to n,
// find the missing number.
//
// Example:
// Input:  [3, 0, 1]
// Output: 2
//
// Expected numbers:
// [0, 1, 2, 3]
// Missing number = 2

function findMissingNumber(arr) {
    const n = arr.length;
    let expected = n * (n + 1) / 2;
    let actual = arr.reduce((num, sum) => sum + num, 0);

    return expected - actual;
}

console.log(findMissingNumber([3, 0, 1]));
// Output: 2

console.log(findMissingNumber([0, 1]));
// Output: 2

console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// Output: 8

console.log(findMissingNumber([0]));
// Output: 1

console.log(findMissingNumber([1]));
// Output: 0

console.log(findMissingNumber([]));
// Output: 0

// ------------------------------------------------------------
// COMPLEXITY
// ------------------------------------------------------------

// Time Complexity: O(n)
//
// Explanation:
// We traverse the array once to calculate the actual sum.
//
// Therefore:
// Time Complexity = O(n)

// Space Complexity: O(1)
//
// Explanation:
// We only use a few variables:
// n, expectedSum, and actualSum.
//
// No additional array, Set, or object is created.
//
// Therefore:
// Space Complexity = O(1)

// ============================================================







// ============================================================
// PROBLEM 07: Find Frequency of Elements
// APPROACH: Frequency Count using Object + Ternary
// ============================================================

// Problem Statement:
// Given an array, find the frequency of each element.
//
// Example:
// Input:  [1, 2, 2, 3, 1, 4, 2]
//
// Output:
// 1 -> 2
// 2 -> 3
// 3 -> 1
// 4 -> 1

function findFrequency(arr) {
    const seen = {};

    for(let item of arr) {
        seen[item] = seen[item] ? seen[item] + 1 : 1;
    }
    return seen;
}

console.log(findFrequency([1, 2, 2, 3, 1, 4, 2]));
// Output:
// {
//     1: 2,
//     2: 3,
//     3: 1,
//     4: 1
// }

console.log(findFrequency(["apple", "banana", "apple", "orange"]));
// Output:
// {
//     apple: 2,
//     banana: 1,
//     orange: 1
// }

console.log(findFrequency([1, 1, 1, 1]));
// Output:
// {
//     1: 4
// }

console.log(findFrequency([]));
// Output:
// {}

// ------------------------------------------------------------
// COMPLEXITY
// ------------------------------------------------------------

// Time Complexity: O(n)
//
// Explanation:
// We traverse the array once.
// Each object lookup/update is O(1) on average.
//
// Therefore:
// Time Complexity = O(n)

// Space Complexity: O(n)
//
// Explanation:
// In the worst case, every element is unique.
// The frequency object will contain n entries.
//
// Therefore:
// Space Complexity = O(n)

// ============================================================









// ============================================================
// PROBLEM 08: Move All Zeros to the End
// APPROACH: Two Pointer
// ============================================================

// Problem Statement:
// Given an array, move all zeros to the end while maintaining
// the relative order of the non-zero elements.
//
// Example:
// Input:  [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function moveZerosToEnd(arr) {
    let j = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
        }
    }
    return arr;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
// Output: [1, 3, 12, 0, 0]

console.log(moveZerosToEnd([1, 0, 2, 0, 3]));
// Output: [1, 2, 3, 0, 0]

console.log(moveZerosToEnd([0, 0, 1, 2]));
// Output: [1, 2, 0, 0]

console.log(moveZerosToEnd([1, 2, 3]));
// Output: [1, 2, 3]

console.log(moveZerosToEnd([0, 0, 0]));
// Output: [0, 0, 0]

console.log(moveZerosToEnd([]));
// Output: []

// ------------------------------------------------------------
// COMPLEXITY
// ------------------------------------------------------------

// Time Complexity: O(n)
//
// Explanation:
// We traverse the array only once.
// Therefore, the time complexity is O(n).

// Space Complexity: O(1)
//
// Explanation:
// We use only one extra variable: nonZeroIndex.
// No additional array is created.
//
// Therefore, the space complexity is O(1).

// This is an IN-PLACE solution.
// ============================================================






// ============================================================
// PROBLEM: Move All Negative Numbers to One Side
// ============================================================

function moveNegatives(arr) {
    let j = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
}


console.log(moveNegatives([1, -2, 3, -4, 5, -6]));
// [-2, -4, -6, 1, 5, 3]

console.log(moveNegatives([-1, 2, -3, 4]));
// [-1, -3, 2, 4]

console.log(moveNegatives([1, 2, 3, 4]));
// [1, 2, 3, 4]

console.log(moveNegatives([-1, -2, -3]));
// [-1, -2, -3]


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
// We traverse the array only once.

// Space Complexity: O(1)
// We modify the array in-place.
// ============================================================








// ============================================================
// PROBLEM 10: Intersection of Two Arrays
// ============================================================

// Example:
// arr1 = [1, 2, 3, 4]
// arr2 = [3, 4, 5, 6]
//
// Output:
// [3, 4]

function findIntersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let result = new Set();

    for(let i = 0; i < arr2.length; i++) {
        if(set1.has(arr2[i])) {
            result.add(arr2[i]);
        }
    }
    return [...result];
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// [3, 4]

console.log(findIntersection([1, 2, 2, 3], [2, 2, 4]));
// [2]

console.log(findIntersection([1, 2, 3], [4, 5, 6]));
// []

console.log(findIntersection([], [1, 2, 3]));
// []


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n + m)
//
// n = length of arr1
// m = length of arr2
//
// Creating the Set: O(n)
// Traversing arr2: O(m)
//
// Total: O(n + m)

// Space Complexity: O(n + m)
//
// Set stores elements from arr1.
// Result Set stores common elements.
//
// ============================================================









// ============================================================
// PROBLEM 11: Union of Two Arrays
// ============================================================

// Example:
// arr1 = [1, 2, 3, 4]
// arr2 = [3, 4, 5, 6]
//
// Output:
// [1, 2, 3, 4, 5, 6]

function findUnion(arr1, arr2) {
    return new Set([...arr1, ...arr2]);
}

console.log(findUnion([1, 2, 3, 4], [3, 4, 5, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(findUnion([1, 2, 2, 3], [2, 3, 4, 4]));
// [1, 2, 3, 4]

console.log(findUnion([], [1, 2, 3]));
// [1, 2, 3]

console.log(findUnion([], []));
// []


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n + m)
//
// n = length of arr1
// m = length of arr2
//
// We process all elements from both arrays.

// Space Complexity: O(n + m)
//
// Set stores the unique elements from both arrays.
//
// ============================================================










// ============================================================
// PROBLEM 12: Two Sum
// ============================================================

// Problem:
// Find two numbers whose sum equals the target.
//
// Example:
// Input:
// arr = [2, 7, 11, 15]
// target = 9
//
// Output:
// [0, 1]
//
// Because:
// 2 + 7 = 9


function twoSum(arr, target) {
    let map = new Map();
    for(let i = 0; i < arr.length; i++) {
        let compliment = target - arr[i];
        if(map.has(compliment)) {
            return [map.get(compliment), i];
        }
        map.set(arr[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]

console.log(twoSum([3, 2, 4], 6));
// [1, 2]

console.log(twoSum([3, 3], 6));
// [0, 1]

console.log(twoSum([1, 2, 3, 4], 10));
// []


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
// We traverse the array only once.
//
// Space Complexity: O(n)
// The Map can store up to n elements.

// ============================================================









// ============================================================
// PROBLEM 13: Find Pair With Given Sum
// ============================================================

// Example:
// Input:
// arr = [2, 7, 11, 15]
// target = 9
//
// Output:
// [2, 7]
//
// Because:
// 2 + 7 = 9

function findPairWithSum(arr, target) {
    const seen = new Set();

    for(let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if(seen.has(complement)) {
            return [complement, arr[i]];
        }
        seen.add(arr[i]);
    }
    return [];
}

console.log(findPairWithSum([2, 7, 11, 15], 9));
// [2, 7]

console.log(findPairWithSum([3, 2, 4], 6));
// [2, 4]

console.log(findPairWithSum([1, 5, 8, 10], 15));
// [5, 10]

console.log(findPairWithSum([1, 2, 3], 10));
// []


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
// We traverse the array only once.
//
// Space Complexity: O(n)
// The Set can store up to n elements.

// ============================================================








// ============================================================
// PROBLEM 14: Merge Two Sorted Arrays
// ============================================================

// Example:
// arr1 = [1, 3, 5]
// arr2 = [2, 4, 6]
//
// Output:
// [1, 2, 3, 4, 5, 6]

console.log("Merge 2 sorted arrays: ");
function mergeSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}


console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([2, 4, 6], [1, 3, 5]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([], [1, 2, 3]));
// [1, 2, 3]

console.log(mergeSortedArrays([1, 3], []));
// [1, 3]

console.log(mergeSortedArrays([1, 2, 2], [2, 3, 4]));
// [1, 2, 2, 2, 3, 4]


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n + m)
//
// n = length of arr1
// m = length of arr2
//
// Each element is processed once.
//
// Space Complexity: O(n + m)
//
// Result array stores all elements.
//
// ============================================================






// ============================================================
// PROBLEM: Reverse a String
// ============================================================

// Example:
// Input:  "hello"
// Output: "olleh"

// Split method
function reverseString1(str) {
    return str.split("").reverse().join("");
}

// Two Pointer Approach
function reverseString(str) {
    let char = str.split("");
    let left = 0;
    let right = char.length - 1;
    while(left < right) {
        [char[left], char[right]] = [char[right], char[left]];
        left ++;
        right --;
    }
    return char.join("");
}



console.log(reverseString("hello"));
// "olleh"

console.log(reverseString("JavaScript"));
// "tpircSavaJ"

console.log(reverseString("12345"));
// "54321"

console.log(reverseString("a"));
// "a"

console.log(reverseString(""));
// ""


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// split()     → O(n)
// Two-pointer → O(n)
// join()      → O(n)
//
// Overall → O(n)
//
// Space Complexity: O(n)
//
// We create an array of characters.
// Therefore → O(n)

// ============================================================







// ============================================================
// PROBLEM: Check if a String is a Palindrome
// ============================================================

// Example:
// Input:  "madam"
// Output: true


function isPalindrome(str) {
    let char = str.split("");

    let left = 0;
    let right = char.length - 1;

    while(left < right) {
        [char[left], char[right]] = [char[right], char[left]];
        left ++;
        right --;
    }
    return str === char.join("");
}

console.log(isPalindrome("madam"));
// true

console.log(isPalindrome("racecar"));
// true

console.log(isPalindrome("hello"));
// false

console.log(isPalindrome("a"));
// true

console.log(isPalindrome(""));
// true

console.log(isPalindrome("abba"));
// true


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// We compare characters from both ends.
// At most n / 2 comparisons are required.
//
// Space Complexity: O(1)
//
// No extra array or string is created.
// ============================================================






// ============================================================
// PROBLEM: Find Character Frequency
// ============================================================

// Example:
// Input:  "hello"
//
// Output:
// {
//     h: 1,
//     e: 1,
//     l: 2,
//     o: 1
// }

function findCharacterFrequency(str) {
    const count = {};

    for(let char of str) {
        count[char] = count[char] ? count[char] + 1 : 1;
    }
    return count;
}

console.log(findCharacterFrequency("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

console.log(findCharacterFrequency("javascript"));
// { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

console.log(findCharacterFrequency("aabbcc"));
// { a: 2, b: 2, c: 2 }

console.log(findCharacterFrequency("a"));
// { a: 1 }

console.log(findCharacterFrequency(""));
// {}


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// We visit every character once.
//
// Space Complexity: O(n)
//
// In the worst case, every character can be unique.
//







// ============================================================
// PROBLEM: Find Duplicate Characters
// ============================================================

// Example:
// Input:  "programming"
// Output: ["r", "g", "m"]


function findDuplicateCharacters(str) {
    let count = {};
    let duplicates = [];

    for(let char of str) {
        count[char] = count[char] ? count[char] + 1 : 1;
    }
    for(let char in count) {
        if(count[char] > 1) {
            duplicates.push(char);
        }
    }
    return duplicates;
}

console.log(findDuplicateCharacters("programming"));
// ["r", "g", "m"]

console.log(findDuplicateCharacters("hello"));
// ["l"]

console.log(findDuplicateCharacters("aabbcc"));
// ["a", "b", "c"]

console.log(findDuplicateCharacters("abcdef"));
// []

console.log(findDuplicateCharacters("a"));
// []

// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// First loop → O(n)
// Second loop → O(k), where k is number of unique characters
//
// Overall → O(n)
//
// Space Complexity: O(n)
//
// Frequency object + duplicates array
//
// ============================================================







// ============================================================
// PROBLEM: First Non-Repeating Character
// ============================================================

// Example:
// Input:  "swiss"
// Output: "w"


function firstNonRepeatingCharacter(str) {
    let count = {};
    for(let char of str) {
        count[char] = count[char] ? count[char] + 1 : 1;
    }
    for(let char in count) {
        if(count[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingCharacter("swiss"));
// "w"

console.log(firstNonRepeatingCharacter("hello"));
// "h"

console.log(firstNonRepeatingCharacter("aabbc"));
// "c"

console.log(firstNonRepeatingCharacter("aabbcc"));
// null

console.log(firstNonRepeatingCharacter("a"));
// "a"

console.log(firstNonRepeatingCharacter(""));
// null


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// First loop  → O(n)
// Second loop → O(n)
//
// Overall → O(n)
//
// Space Complexity: O(n)
//
// Frequency object can store up to n unique characters.
//
// ============================================================







// ============================================================
// PROBLEM: First Repeating Character
// ============================================================

// Example:
// Input:  "swiss"
// Output: "s"

function firstRepeatingCharacter(str) {
    let count = {};

    for(let char of str) {
        count[char] = count[char] ? count[char] + 1 : 1;
    }
    for(let char in count) {
        if(count[char] > 1) {
            return char;
        }
    }
    return null;
}

console.log(firstRepeatingCharacter("swiss"));
// "s"

console.log(firstRepeatingCharacter("hello"));
// "l"

console.log(firstRepeatingCharacter("programming"));
// "r"

console.log(firstRepeatingCharacter("abcdef"));
// null

console.log(firstRepeatingCharacter("a"));
// null

console.log(firstRepeatingCharacter(""));
// null


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// First loop  → O(n)
// Second loop → O(n)
//
// Overall → O(n)
//
// Space Complexity: O(n)
//
// Frequency object can store up to n unique characters.
//
// ============================================================





// ============================================================
// PROBLEM: Check Anagram
// ============================================================

// Example:
// Input:
// str1 = "listen"
// str2 = "silent"
//
// Output:
// true


function isAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;
    let count = {};

    for(let char of str1) {
        count[char] = count[char] ? count[char] + 1 : 1;
    }
    for(let char of str2) {
        if(!count[char]) {
            return false;
        }
        count[char]--;
    }
    return true;
}

console.log(isAnagram("listen", "silent"));
// true

console.log(isAnagram("triangle", "integral"));
// true

console.log(isAnagram("hello", "world"));
// false

console.log(isAnagram("aabb", "bbaa"));
// true

console.log(isAnagram("aabb", "abcc"));
// false

console.log(isAnagram("abc", "abcd"));
// false


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// We traverse both strings once.
//
// Space Complexity: O(n)
//
// Frequency object stores character counts.
//
// ============================================================










// ============================================================
// PROBLEM: Remove Duplicate Characters
// ============================================================

// Example:
// Input:  "programming"
// Output: "progamin"


function removeDuplicateCharacters(str) {
    let seen = new Set();
    let result = "";

    for(let char of str) {
        if(!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}

console.log(removeDuplicateCharacters("programming"));
// "progamin"

console.log(removeDuplicateCharacters("hello"));
// "helo"

console.log(removeDuplicateCharacters("aabbcc"));
// "abc"

console.log(removeDuplicateCharacters("abcdef"));
// "abcdef"

console.log(removeDuplicateCharacters(""));
// ""


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// We traverse the string once.
//
// Space Complexity: O(n)
//
// Set can store up to n unique characters.
//
// ============================================================







// ============================================================
// PROBLEM: Find Highest Frequency Character
// ============================================================

// Example:
// Input:  "programming"
// Output: "r"
// (r, g and m all occur 2 times; r appears first)

function highestFrequencyCharacter(str) {
    let count = {};
    let maxFrequency = 0;
    let maxFrequencyChar = null;

    for(let char of str) {
        count[char] = count[char] ? count[char] + 1 : 1;
    }

    for(let char in count) {
        if(count[char] > maxFrequency) {
            maxFrequency = count[char];
            maxFrequencyChar = char;
        }
    }
    return maxFrequencyChar;
}

console.log(highestFrequencyCharacter("programming"));
// "r"

console.log(highestFrequencyCharacter("hello"));
// "l"

console.log(highestFrequencyCharacter("aabbcc"));
// "a"

console.log(highestFrequencyCharacter("javascript"));
// "a"

console.log(highestFrequencyCharacter("a"));
// "a"

console.log(highestFrequencyCharacter(""));
// null

// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// First loop  → O(n)
// Second loop → O(n)
//
// Overall → O(n)
//
// Space Complexity: O(n)
//
// Frequency object stores character counts.
//
// ============================================================











// ============================================================
// PROBLEM: Count Vowels and Consonants
// ============================================================

// Example:
// Input:  "Hello World"
// Output:
// Vowels: 3
// Consonants: 7


function countVowelsAndConsonants(str) {
    let vowels = 0;
    let consonants = 0;

    str = str.toLowerCase();

    for(let char of str) {
        if('aeiou'.includes(char)) {
            vowels ++;
        } else if (char >= 'a' && char <= 'z') {
            consonants ++;
        }
    }
    return {
        vowels, consonants
    }
}

console.log(countVowelsAndConsonants("Hello World"));
// { vowels: 3, consonants: 7 }

console.log(countVowelsAndConsonants("JavaScript"));
// { vowels: 3, consonants: 7 }

console.log(countVowelsAndConsonants("aeiou"));
// { vowels: 5, consonants: 0 }

console.log(countVowelsAndConsonants("xyz"));
// { vowels: 0, consonants: 3 }

console.log(countVowelsAndConsonants("Hello123!"));
// { vowels: 2, consonants: 3 }

console.log(countVowelsAndConsonants(""));
// { vowels: 0, consonants: 0 }


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// We visit every character once.
//
// Space Complexity: O(1)
//
// Only two counters are used.
// ============================================================







// ============================================================
// PROBLEM: Reverse Words in a String
// ============================================================

// Example:
// Input:
// "Hello World JavaScript"
//
// Output:
// "JavaScript World Hello"


function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello World JavaScript"));
// "JavaScript World Hello"

console.log(reverseWords("I love JavaScript"));
// "JavaScript love I"

console.log(reverseWords("Angular React"));
// "React Angular"

console.log(reverseWords("Hello"));
// "Hello"

console.log(reverseWords(""));
// ""


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// split()   → O(n)
// reverse() → O(n)
// join()    → O(n)
//
// Overall → O(n)
//
// Space Complexity: O(n)
//
// We create an array containing the words.
//
// ============================================================











// ============================================================
// PROBLEM: Find the Longest Word
// ============================================================

// Example:
// Input:
// "I am learning JavaScript"
//
// Output:
// "JavaScript"


function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = words[0];
    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("I am learning JavaScript"));
// "JavaScript"

console.log(findLongestWord("I love programming"));
// "programming"

console.log(findLongestWord("Hello World"));
// "Hello"

console.log(findLongestWord("JavaScript"));
// "JavaScript"

console.log(findLongestWord(""));
// ""


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// n = number of characters in the string.
// We process the sentence to split it and then check each word.
//
// Space Complexity: O(n)
//
// split() creates an array of words.
//
// ============================================================









// ============================================================
// PROBLEM: Capitalize Each Word
// ============================================================

// Example:
// Input:
// "hello world javascript"
//
// Output:
// "Hello World Javascript"

function capitalizeWords(str) {
    return str.trim()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world javascript"));
// "Hello World Javascript"

console.log(capitalizeWords("i love angular"));
// "I Love Angular"

console.log(capitalizeWords("react typescript"));
// "React Typescript"

console.log(capitalizeWords("hello"));
// "Hello"

console.log(capitalizeWords(""));
// ""


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// We process every character in the string.
//
// Space Complexity: O(n)
//
// We create an array of words and a result array.
//
// ============================================================






// ============================================================
// PROBLEM: Valid Parentheses
// ============================================================

// Example:
// Input:  "{[()]}"
// Output: true

console.log("Valid Paranthesis");

function isValidParentheses(str) {
    let stack = [];
    let matchingBracket = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    for(let char of str) {
        if(char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else {
            const lastElement = stack.pop();
            if(lastElement !== matchingBracket[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValidParentheses("()"));
// true

console.log(isValidParentheses("()[]{}"));
// true

console.log(isValidParentheses("{[]}"));
// true

console.log(isValidParentheses("([{}])"));
// true

console.log(isValidParentheses("(]"));
// false

console.log(isValidParentheses("([)]"));
// false

console.log(isValidParentheses("((("));
// false

console.log(isValidParentheses(""));
// true


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// We visit every character once.
//
// Space Complexity: O(n)
//
// In the worst case, all characters can be opening brackets
// and will be stored in the stack.
//
// ============================================================





// TO DO: Longest Substring without repeating characters



//  TO DO: Group Anagrams





// ============================================================
// PROBLEM: Factorial of a Number
// ============================================================

// Example:
// Input: 5
// Output: 120
//
// 5! = 5 × 4 × 3 × 2 × 1 = 120


function factorial(n) {
    if(n == 0 || n == 1) return 1;
    let result = 1;

    for(let i = n; i >= 1; i--) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5));
// 120

console.log(factorial(4));
// 24

console.log(factorial(1));
// 1

console.log(factorial(0));
// 1


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// We loop from 2 to n.
//
// Space Complexity: O(1)
//
// Only one variable is used.
// ============================================================





// ============================================================
// FIND NTH FIBONACCI NUMBER
// ============================================================

function fibonacciNumber(n) {
    if(n <= 0) return 0;
    if(n == 1) return 1;

    let previous = 0;
    let current = 1;

    for(let i = 2; i <= n; i++) {
        let next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

console.log(fibonacciNumber(0)); // 0
console.log(fibonacciNumber(1)); // 1
console.log(fibonacciNumber(6)); // 8
console.log(fibonacciNumber(10)); // 55





// ============================================================
// PROBLEM: Flatten a Nested Array
// ============================================================

// Example:
// Input:
// [1, [2, [3, 4]], 5]
//
// Output:
// [1, 2, 3, 4, 5]

// Using built in flat method
function flattenArray1(arr) {
    return arr.flat(Infinity);
}

// Without built in method
function flattenArray(arr) {
    const result = [];

    for(let value of arr) {
        if(Array.isArray(value)) {
            const flattened = flattenArray(value);
            result.push(...flattened);
        } else {
            result.push(value);
        }
    }
    return result;
}

console.log(flattenArray([1, [2, 3], 4]));
// [1, 2, 3, 4]

console.log(flattenArray([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
// [1, 2, 3, 4, 5, 6]

console.log(flattenArray([1, [2, [3, [4, 5]]]]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([]));
// []


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// n = total number of elements in the nested array.
//
// Every element is visited once.
//
// Space Complexity: O(n)
//
// Result array stores all flattened elements.
// Recursive call stack can also go up to the nesting depth.
//
// ============================================================







// TO DO: Group Object by property






// ============================================================
// PROBLEM: Compress String
// ============================================================

// Example:
// Input:  "aaabbc"
// Output: "a3b2c1"

console.log("Compress String");

function compressString(str) {
    let result = '';
    let count = 1;

    for(let i = 1; i <= str.length; i++) {
        if(str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }
    return result;
}

console.log(compressString("aaabbc"));
// "a3b2c1"

console.log(compressString("aaabbbcccc"));
// "a3b3c4"

console.log(compressString("abcd"));
// "a1b1c1d1"

console.log(compressString("aaaa"));
// "a4"

console.log(compressString("a"));
// "a1"

console.log(compressString(""));
// ""


// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity: O(n)
//
// We traverse the string once.
//
// Space Complexity: O(n)
//
// The result string can contain up to O(n) characters.
//
// ============================================================



// // ============================================================
// PROBLEM: Implement Debounce
// ============================================================

// Debounce:
// Execute the function only after the user stops calling it
// for the specified delay.


function debounce(callback, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    }
}

function search(value) {
    console.log("API Call: " + value);
}

const debouncedSearch = debounce(search, 1000);

debouncedSearch("s");
debouncedSearch("se");
debouncedSearch("sea");
debouncedSearch("sear");
debouncedSearch("searc");
debouncedSearch("search");


// TO DO: Implement throttle function

