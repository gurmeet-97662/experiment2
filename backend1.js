// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function calculateSalary() {
//   rl.question('Enter the employee name: ', (name) => {
//     rl.question('Enter the number of hours worked: ', (hoursWorked) => {
//       rl.question('Enter the hourly rate: ', (hourlyRate) => {
//         // Parse the input values to numbers
//         const hours = parseFloat(hoursWorked);
//         const rate = parseFloat(hourlyRate);

//         const salary = hours * rate;

//         console.log(`${name}'s salary is: $${salary.toFixed(2)}`);

//         rl.close();
//       });
//     });
//   });
// }

// calculateSalary();

function print_current_page()
{
window.print();
}