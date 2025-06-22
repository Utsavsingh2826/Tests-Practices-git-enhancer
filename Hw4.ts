//Q1


class Student {
    name: string;
    studentId: number;
    grade: string;
    address: string;

    constructor(name: string, studentId: number, grade: string, address: string) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }

    displayInfo(): void {
        console.log(`Student Info: Name - ${this.name}, ID - ${this.studentId}, Grade - ${this.grade}, Address - ${this.address}`);
    }
}

const student1 = new Student("Alice", 101, "A", "123 Main St");
student1.displayInfo();
