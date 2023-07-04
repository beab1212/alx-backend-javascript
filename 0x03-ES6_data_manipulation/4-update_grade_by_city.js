export default function updateStudentGradeByCity(studs, city, newGrades) {
  return studs.filter((value) => {
    return value.location === city;
  }).map((value) => {
    let grade = newGrades.filter((val) => val.studentId === value.id);
    if (grade.length !== 0) {
      value['grade'] = grade[0].grade;
      return value;
    } else {
      value['grade'] = 'N/A';
      return value;
    }
  });
}
