let numberOfStudents = 15;
let numberOfMentors = 8;
let group = numberOfStudents + numberOfMentors;
let percentOfStudents = Math.round(numberOfStudents / group * 100);
let percentOfMentors = Math.round(numberOfMentors / group * 100);
console.log(`Percentage students: ${percentOfStudents}%`);
console.log(`Percentage mentors: ${percentOfMentors}%`);