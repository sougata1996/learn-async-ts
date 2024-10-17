// Function to log rows that contain at least one negative number using concurrency
function logNegativeRows(arr) {
    return new Promise(function (resolve, reject) {
        console.log("Checking for negative numbers...");
        if (arr.length === 0) {
            reject("Array is empty, no rows to check");
            return;
        }
        // Create an array of promises, one for each row
        var rowCheckPromises = arr.map(function (row, rowIndex) {
            return new Promise(function (rowResolve) {
                // Simulate asynchronous operation to check if the row contains a negative number
                setTimeout(function () {
                    var hasNegative = row.some(function (num) { return num < 0; });
                    if (hasNegative) {
                        console.log("Row ".concat(rowIndex, " has a negative number: ").concat(row));
                    }
                    rowResolve();
                }, 0); // You can adjust the delay if necessary
            });
        });
        // Wait for all the row checks to complete
        Promise.all(rowCheckPromises)
            .then(function () {
            resolve();
        })
            .catch(function (error) { return reject(error); });
    });
}
// Example usage:
var array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9],
];
// Call the function to log negative rows
logNegativeRows(array2D_3)
    .then(function () { return console.log("Completed checking for negative rows"); })
    .catch(function (error) { return console.error("Error:", error); });
