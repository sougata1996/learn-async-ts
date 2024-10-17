var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Function to sum all integers in a 2D array using concurrency and async/await
function concurrentSum2DArray(arr) {
    return __awaiter(this, void 0, void 0, function () {
        var rowSumPromises, rowSums, totalSum;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Concurrent Sum called...");
                    if (arr.length === 0) {
                        throw new Error("Cannot sum an empty array");
                    }
                    rowSumPromises = arr.map(function (row) { return __awaiter(_this, void 0, void 0, function () {
                        var rowSum;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: 
                                // Simulate an asynchronous operation to sum the row
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 0); })];
                                case 1:
                                    // Simulate an asynchronous operation to sum the row
                                    _a.sent(); // Simulate async delay
                                    rowSum = row.reduce(function (acc, num) { return acc + num; }, 0);
                                    console.log("Row sum: ".concat(rowSum));
                                    return [2 /*return*/, rowSum];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(rowSumPromises)];
                case 1:
                    rowSums = _a.sent();
                    totalSum = rowSums.reduce(function (acc, sum) { return acc + sum; }, 0);
                    return [2 /*return*/, totalSum];
            }
        });
    });
}
// Example usage:
var array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// Call the concurrent sum function
concurrentSum2DArray(array2D_1)
    .then(function (result) { return console.log("Total sum of array2D_1:", result); })
    .catch(function (error) { return console.error("Error:", error); });
// // Function to sum all integers in a 2D array using concurrency
// function concurrentSum2DArray(arr: number[][]): Promise<number> {
//   return new Promise((resolve, reject) => {
//     console.log("Concurrent Sum called...");
//     if (arr.length === 0) {
//       reject("Cannot sum an empty array");
//       return;
//     }
//     // Create an array of promises where each promise sums one row
//     const rowSumPromises = arr.map((row) => {
//       return new Promise<number>((rowResolve) => {
//         // Simulate an asynchronous operation to sum the row
//         setTimeout(() => {
//           const rowSum = row.reduce((acc, num) => acc + num, 0);
//           console.log(`Row sum: ${rowSum}`);
//           rowResolve(rowSum);
//         }, 0); // You can adjust the delay if needed
//       });
//     });
//     // Wait for all row sums to complete
//     Promise.all(rowSumPromises)
//       .then((rowSums) => {
//         // Sum all the row sums to get the final result
//         const totalSum = rowSums.reduce((acc, sum) => acc + sum, 0);
//         resolve(totalSum);
//       })
//       .catch((error) => reject(error));
//   });
// }
// // Example usage:
// const array2D_1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // Call the concurrent sum function
// concurrentSum2DArray(array2D_1)
//   .then((result) => console.log("Total sum of array2D_1:", result))
//   .catch((error) => console.error("Error:", error));
