function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((sum, current, index, array) => sum + current /
        array.length, 0);
}
const stu = new Student('Ranjan', 'Paul');
stu.inputNewGrade(100);
stu.inputNewGrade(120);
stu.inputNewGrade(98);
stu.inputNewGrade(99);
const stuNew = new Student('Monisha', 'Paul');
stuNew.inputNewGrade(88);
stuNew.inputNewGrade(89);
stuNew.inputNewGrade(90);
stuNew.inputNewGrade(99);
const students = [stu, stuNew];
const result = students.reduce((average, stu, index, array) => average +
    stu.computeAverageGrade() / array.length, 0);
console.log(result);