// simple-array-sum

// function simpleArraySum(ar) {
//     return ar.reduce((a, b) => a + b, 0);
// }

// console.log(simpleArraySum([2, 5, 3]));

// compare-the-triplets

// function compareTriplets(a, b) {
//     let result = [0, 0];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] < b[i]) {
//             result[1]++;
//         } else if (a[i] > b[i]) {
//             result[0]++;
//         }
//     }
//     return result;
// }

// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

// a-very-big-sum

// function aVeryBigSum(ar) {
//     return ar.reduce((a, b) => a + b, 0);
// }

// console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

// diagonal-difference

// function diagonalDifference(arr) {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum1 += arr[i][arr[i].length - 1 - i];
//         sum2 += arr[i][i];
//     }

//     return Math.abs(sum1 - sum2);
// }

// console.log(
//     diagonalDifference([
//         [11, 2, 4],
//         [4, 5, 6],
//         [10, 8, -12],
//     ])
// );

// plus-minus

// function plusMinus(arr) {
//     let arrLength = arr.length;
//     let lower = 0;
//     let higher = 0;
//     let equal = 0;

//     arr.forEach((el) => {
//         if (el < 0) {
//             lower++;
//         } else if (el > 0) {
//             higher++;
//         } else if (el == 0) {
//             equal++;
//         }
//     });

//     console.log(higher / arrLength);
//     console.log(lower / arrLength);
//     console.log(equal / arrLength);
// }

// plusMinus([-4, 3, -9, 0, 4, 1]);

//staircase

// function staircase(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(" ".repeat(n - i) + "#".repeat(i));
//     }
// }

// staircase(6);

// birthday-cake-candles

// function birthdayCakeCandles(candles) {
//     let counts = {};
//     candles.forEach((el) => {
//         counts[el] = (counts[el] || 0) + 1;
//     });
//     return Math.max(...Object.values(counts));
// }

// console.log(birthdayCakeCandles([3, 2, 1, 3]));

// apple-and-orange

// function countApplesAndOranges(houseStart, houseEnd, appleTree, orangeTree, apples, oranges) {
//     let applesResult = 0;
//     let orangesResult = 0;
//     apples.forEach((el) => {
//         let aDist = appleTree + el;
//         if (aDist >= houseStart && aDist <= houseEnd) {
//             applesResult++;
//         }
//     });
//     oranges.forEach((el) => {
//         let oDist = orangeTree + el;
//         if (oDist >= houseStart && oDist <= houseEnd) {
//             orangesResult++;
//         }
//     });
//     console.log(applesResult);
//     console.log(orangesResult);
// }

// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

// kangaroo

// function kangaroo(x1, v1, x2, v2) {
//     if (v1 <= v2) {
//         return "NO";
//     } else if ((x1 - x2) % (v2 - v1) != 0) {
//         return "NO";
//     } else {
//         return "YES";
//     }
// }

// console.log(kangaroo(3, 4, 4, 3)); // dunno

// between-two-sets

// function getTotalX(a, b) {
//     let result = 0;

//     for (let i = Math.min(...a); i <= Math.max(...b); i++) {
//         if (a.every((el) => i % el == 0) && b.every((el) => el % i == 0)) {
//             result++;
//         }
//     }

//     return result;
// }

// console.log(getTotalX([2, 4], [16, 32, 96]));\

// breaking-best-and-worst-records

// function breakingRecords(scores) {
//     let best = scores[0];
//     let worst = scores[0];
//     let result = [0, 0];

//     scores.forEach((el) => {
//         if (best < el) {
//             best = el;
//             result[0]++;
//         }
//         if (worst > el) {
//             worst = el;
//             result[1]++;
//         }
//     });

//     return result;
// }

// console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

// the-birthday-bar

// function birthday(array, day, month) {
//     let result = 0;

//     for (let i = 0; i < array.length; i++) {
//         let subArray = array.slice(i, i + month);
//         console.log(subArray);
//         let sum = subArray.reduce((a, b) => a + b, 0);
//         if (sum == day) {
//             result++;
//         }
//     }

//     return result;
// }

// console.log(birthday([1, 2, 1, 3, 2], 3, 2));

// divisible-sum-pairs

// function divisibleSumPairs(arrLength, divisor, array) {
//     let result = 0;

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if ((array[i] + array[j]) % divisor == 0 && i < j) {
//                 console.log(array[i], array[j]);
//                 result++;
//             }
//         }
//     }

//     return result;
// }

// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));

// day-of-the-programmer

// function dayOfProgrammer(year) {
//     if (year > 1918) {
//         if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//             return `12.09.${year}`;
//         } else {
//             return `13.09.${year}`;
//         }
//     } else if (year < 1918) {
//         if (year % 4 == 0) {
//             return `12.09.${year}`;
//         } else {
//             return `13.09.${year}`;
//         }
//     } else {
//         return `26.09.${year}`;
//     }
// }

// console.log(dayOfProgrammer(1800));

// bon-appetit

// function bonAppetit(bill, k, b) {
//     let sum = bill.reduce((a, b) => a + b, 0) - bill[k];

//     if (sum / 2 == b) {
//         console.log("Bon Appetit");
//     } else {
//         console.log(Math.abs(sum / 2 - b));
//     }
// }

// bonAppetit([3, 10, 2, 9], 1, 12);

// sock-merchant

// function sockMerchant(n, array) {
//     let result = 0;

//     let pairs = [array[0]];

//     for (let i = 1; i < array.length; i++) {
//         if (pairs.includes(array[i])) {
//             pairs = pairs.filter((el) => el != array[i]);
//             result++;
//         } else {
//             pairs.push(array[i]);
//         }
//     }

//     return result;
// }

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// drawing-book

// function pageCount(num, page) {
//     let bookArr = [[1]];

//     for (let i = 2; i < num; i += 2) {
//         bookArr.push([i, i + 1]);
//     }
//     if (num % 2 == 0) {
//         bookArr.push([num]);
//     }

//     let foundPage = bookArr.find((el) => el.find((el2) => el2 == page));

//     let a = bookArr.indexOf(foundPage);
//     let b = bookArr.reverse().indexOf(foundPage);

//     return Math.min(a, b);
// }

// console.log(pageCount(6, 2));

// utopian-tree

// function utopianTree(num) {
//     let height = 1;
//     for (let i = 0; i < num; i++) {
//         if (height % 2 == 0) {
//             height++;
//         } else {
//             height *= 2;
//         }
//     }

//     return height;
// }

// console.log(utopianTree(5));

// picking-numbers

// function pickingNumbers(arr) {
//     let result = 0;
//     let temp = [];

//     for (let i = 0; i < arr.length; i++) {
//         temp.push([arr[i]]);
//         for (let j = 0; j < arr.length; j++) {
//             if (i != j) {
//                 if (temp[i].every((el) => Math.abs(el - arr[j]) == 1 || Math.abs(el - arr[j]) == 0)) {
//                     temp[i].push(arr[j]);
//                 }
//             }
//         }
//     }

//     console.log(temp);

//     temp.forEach((el) => {
//         if (el.length > result) {
//             result = el.length;
//         }
//     });

//     return result;
// }

// console.log(pickingNumbers([3, 4, 6, 5, 3, 3, 1]));

// angry-professor

// function angryProfessor(num, arr) {
//     let inTimeNum = 0;

//     arr.forEach((el) => {
//         if (el <= 0) {
//             inTimeNum++;
//         }
//     });

//     if (inTimeNum < num) {
//         return "YES";
//     } else {
//         return "NO";
//     }
// }

// console.log(angryProfessor(3, [0, -1, 2, 1]));

// strange-advertising

// function viralAdvertising(days) {
//     let result = 0;
//     let num = 5;

//     for (let i = 0; i < days; i++) {
//         num = Math.floor(num / 2);

//         result += num;
//         num *= 3;
//     }

//     return result;
// }

// console.log(viralAdvertising(3));

// save-the-prisoner

// function saveThePrisoner(p, s, num) {
//     let result = 0;

//     if (num + s > p) {
//         result = (num - 1 + s) % p == 0 ? p : (num - 1 + s) % p;
//     } else {
//         result = num - 1 + s;
//     }

//     return result;
// }

// console.log(saveThePrisoner(3, 7, 3));

// circular-array-rotation

// function circularArrayRotation(arr, num, queries) {
//     let result = [];

//     let temp = [];

//     arr.forEach((el) => temp.push(0));

//     arr.forEach((el, i) => {
//         if (i + num >= arr.length) {
//             temp[(i + num) % arr.length] = el;
//         } else {
//             temp[i + num] = el;
//         }
//     });

//     queries.forEach((index) => {
//         result.push(temp[index]);
//     });

//     return result;
// }

// console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));

// permutation-equation

// function permutationEquation(arr) {
//     let result = [];
//     arr.forEach(() => result.push(0));

//     arr.forEach((el, i) => {
//         result[arr[arr[el - 1] - 1] - 1] = el;
//     });

//     return result;
// }

// console.log(permutationEquation([4, 3, 5, 1, 2]));

// the-love-letter-mystery

// function theLoveLetterMystery(str) {
//     let result = 0;

//     for (let i = 0; i < Math.ceil(str.length / 2); i++) {
//         if (str[i] != str[str.length - 1 - i]) {
//             let first = str.charCodeAt(i);
//             let second = str.charCodeAt(str.length - 1 - i);

//             result += Math.abs(first - second);
//         }
//     }

//     return result;
// }

// console.log(theLoveLetterMystery("cba"));

// quicksort1

// function quickSort(arr) {
//     let pivot = arr[0];

//     let result = [[], [], []];

//     arr.forEach((el) => {
//         if (el < pivot) {
//             result[0].push(el);
//         } else if (el > pivot) {
//             result[2].push(el);
//         } else {
//             result[1].push(el);
//         }
//     });

//     return result.flat();
// }

// function matrixRotation(matrix, r) {}

// matrixRotation(
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ],
//     2
// ); unfinished

// function repeatedString(str, n) {
//     let repeatNum = Math.floor(n / str.length);
//     let excess = n % str.length;

//     let result = 0;

//     str.split("").forEach((el) => {
//         if (el == "a") result++;
//     });

//     result *= repeatNum;

//     str.slice(0, excess)
//         .split("")
//         .forEach((el) => {
//             if (el == "a") result++;
//         });

//     return result;
// }

// console.log(repeatedString("a", 100));

// function jumpingOnClouds(arr) {
//     let result = 0;

//     let i = 0;

//     while (i < arr.length - 1) {
//         if (arr[i + 2] == 1) {
//             i += 1;
//         } else {
//             i += 2;
//         }
//         result++;
//     }

//     return result;
// }

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));

// function acmTeam(arr) {
//     let counts = {};
//     let max = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let num = 0;
//             for (let k = 0; k < arr[i].length; k++) {
//                 if (arr[i][k] | arr[j][k]) {
//                     num++;
//                 }
//             }
//             if (num > max) {
//                 max = num;
//             }
//             counts[`(${i},${j})`] = num;
//         }
//     }

//     // console.log(counts);

//     let numOfMax = 0;

//     for (const key in counts) {
//         if (counts[key] == max) {
//             numOfMax++;
//         }
//     }

//     return [max, numOfMax];
// }

// console.log(acmTeam([]));

// function beautifulTriplets(num, arr) {
//     let result = 0;

//     let pairs = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         for (let j = i; j >= 0; j--) {
//             if (arr[i] - arr[j] == num) {
//                 pairs.push([arr[i], arr[j]]);
//                 // result++;
//             }
//         }
//     }

//     console.log(pairs);

//     pairs.forEach((el) => {
//         if (pairs.some((el2) => el2[1] == el[0])) {
//             result++;
//         }
//     });

//     return result;
// }

// console.log(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]));

function appendAndDelete(str1, str2, num) {
    let result = 0;

    if (str1 == str2 && num < str1.length) {
        return num % 2 == 0 ? "Yes" : "No";
    }

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] != str2[i]) {
            str1 = str1.substring(i);
            str2 = str2.substring(i);

            result = str1.length + str2.length;
            break;
        }
    }

    console.log(str1);
    console.log(str2);

    return result <= num ? "Yes" : "No";
}

console.log(appendAndDelete("hac", "hac", 3));
