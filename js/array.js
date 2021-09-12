"use strict";
const salary = 7500;
const friendSalaries = [7500, 12300, 17200, 9400, 8300];
const friends = ['Sakib', 'Rakib', 'Nakib', 'Dakib'];
friendSalaries[0] = 10500;
friendSalaries.push(13100);
// friendSalaries[4] = '9800'; //wrong acording to type script
// friendSalaries.push('7300');// wrong acording to type script
friends.push('Akib');
friends[2] = 'Bakib';
// friends.push(45800) // wrong acording to type script
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
