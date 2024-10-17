// Function to log rows that contain at least one negative number using concurrency
function logNegativeRows(arr: number[][]): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("Checking for negative numbers...");

    if (arr.length === 0) {
      reject("Array is empty, no rows to check");
      return;
    }

    // Create an array of promises, one for each row
    const rowCheckPromises = arr.map((row, rowIndex) => {
      return new Promise<void>((rowResolve) => {
        // Simulate asynchronous operation to check if the row contains a negative number
        setTimeout(() => {
          const hasNegative = row.some((num) => num < 0);
          if (hasNegative) {
            console.log(`Row ${rowIndex} has a negative number: ${row}`);
          }
          rowResolve();
        }, 0); // You can adjust the delay if necessary
      });
    });

    // Wait for all the row checks to complete
    Promise.all(rowCheckPromises)
      .then(() => {
        resolve();
      })
      .catch((error) => reject(error));
  });
}

// Example usage:
const array2D_3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

// Call the function to log negative rows
logNegativeRows(array2D_3)
  .then(() => console.log("Completed checking for negative rows"))
  .catch((error) => console.error("Error:", error));
