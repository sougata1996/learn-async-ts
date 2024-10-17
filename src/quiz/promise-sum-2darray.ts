// Function to sum all integers in a 2D array using concurrency and async/await
async function concurrentSum2DArray(arr: number[][]): Promise<number> {
  console.log("Concurrent Sum called...");

  if (arr.length === 0) {
    throw new Error("Cannot sum an empty array");
  }

  // Use async/await to sum each row concurrently
  const rowSumPromises = arr.map(async (row) => {
    // Simulate an asynchronous operation to sum the row
    await new Promise((resolve) => setTimeout(resolve, 0)); // Simulate async delay
    const rowSum = row.reduce((acc, num) => acc + num, 0);
    console.log(`Row sum: ${rowSum}`);
    return rowSum;
  });

  // Wait for all row sums to complete and sum the results
  const rowSums = await Promise.all(rowSumPromises);
  const totalSum = rowSums.reduce((acc, sum) => acc + sum, 0);
  return totalSum;
}

// Example usage:
const array2D_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Call the concurrent sum function
concurrentSum2DArray(array2D_1)
  .then((result) => console.log("Total sum of array2D_1:", result))
  .catch((error) => console.error("Error:", error));

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
