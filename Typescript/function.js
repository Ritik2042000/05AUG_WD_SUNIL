var func = function (name, id) {
    return "name is ".concat(name, " and id is ").concat(id);
};
var testfnc = func("test", 32);
console.log(testfnc);
var palindrom = function (sentence) {
    var ispalin = sentence.split("").reverse().join("");
    return ispalin === sentence;
};
var test2 = console.log(palindrom("abcba"));
// avreage the number
var avgNum = function (arr) {
    var total = arr.reduce(function (accum, inti) { return accum + inti; }, 0);
    return total / arr.length;
};
var test3 = console.log(avgNum([14, 13, 16, 15]));
// find maxValue of array
var findMax = function (arr) {
    return Math.max.apply(Math, arr);
};
var test4 = console.log(findMax([524, 1236, 4520, 58971]));
// using foreach method
var findMax2 = function (arr) {
    var max = arr[0]; // Initialize the max with the first element
    arr.forEach(function (data) {
        if (data > max) {
            max = data; // Update max if the current element is greater
        }
    });
    return max; // Return the max value
};
var test5 = console.log(findMax2([524, 1236, 4520, 58971]));
