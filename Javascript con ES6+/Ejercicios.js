const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
  ]
  
  const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]

  const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]
/* - JavaScript I
  * Pedro Perez
- HTML y CSS I
  * Pedro Perez
  * Maria Gomez */
  const printStudentPerCourse = (students, courses, enrollments) => {
    courses.map(course => {
        console.log(course.title);
        enrollments.map(enrollment => {
            if(course._id===enrollment.course_id) {
                students.filter(student => {
                    if(student._id === enrollment.student_id) console.log(' - ',student.name);
                })
                // console.log(enrollment.student_id);
            }
        })
    });
  }

  
  /* Imprimir los estudiantes y los cursos a los que están matriculados con el siguiente formato:
- Pedro Perez
  * JavaScript I
  * HTML y CSS I
- Maria Gomez
  * HTML y CSS I */

const printCoursePerStudent = (students, courses, enrollments) => {
    students.map(student => {
        console.log(student.name);
        enrollments.map(enrollment => {
            if(student._id === enrollment.student_id) {
                courses.filter(course =>{
                    if(course._id === enrollment.course_id) return console.log(' - ', course.title);
                });
            }
        });
    });
}
console.log('----- Student per Course -----');
printStudentPerCourse(students, courses, enrollments);
console.log('----- Course per Student -----');
printCoursePerStudent(students, courses, enrollments);