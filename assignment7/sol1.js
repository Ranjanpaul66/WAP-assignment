const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        return this.grades.reduce((sum, cur, index, arr) => sum + curr / arr.length, 0);
    }
}
const stu = Object.create(student);
stu.firstName = 'Ranjan';
stu.lastName = 'Paul';
stu.inputNewGrade(100);
stu.inputNewGrade(120);
stu.inputNewGrade(98);
stu.inputNewGrade(99);
const stuNew = Object.create(student);
stuNew.firstName = 'Monisha';
stuNew.lastName = 'Paul';
stuNew.inputNewGrade(88);
stuNew.inputNewGrade(89);
stuNew.inputNewGrade(90);
stuNew.inputNewGrade(99);
const students = [stu, stuNew];
const result = students.reduce((average, stu, index, array) => average + stu.
computeAverageGrade() / array.length, 0);
console.log(result);
