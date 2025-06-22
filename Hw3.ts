
//Q3
class Course {
    courseName: string;
    courseCode: string;
    instructor: string;

    constructor(courseName: string, courseCode: string, instructor: string) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }

    displayCourse(): void {
        console.log(`Course: ${this.courseName}, Code: ${this.courseCode}, Instructor: ${this.instructor}`);
    }
}

// Example
const course1 = new Course("Math", "M101", "Dr. Smith");
course1.displayCourse();
