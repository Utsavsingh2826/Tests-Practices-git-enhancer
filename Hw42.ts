//Q2
class School {
    static totalStudents: number = 0;
    studentList: Student[] = [];

    addStudent(student: Student): void {
        School.totalStudents++;
        this.studentList.push(student);
    }

    static getTotalStudents(): number {
        return School.totalStudents;
    }
}


const school = new School();
school.addStudent(student1);
console.log("Total Students:", School.getTotalStudents());
