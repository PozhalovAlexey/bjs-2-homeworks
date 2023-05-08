function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        console.log(`Студент ${this.name} отчислен!`);
        return
    }
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0
    }
    const sum = this.marks.reduce((a, b) => a + b, 0);
    return sum / this.marks.length

}

Student.prototype.exclude = function (reason) {
    this.excluded = reason
    delete this.subject;
    delete this.marks;
}
const student1 = new Student('Zhanna', 'female', 23)
const student2 = new Student('Alex', 'male', 33)
const student3 = new Student('Masha', 'female', 27)
