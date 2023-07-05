interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperiance?: number;
  location: string;
  [index: string]: any;
}

interface Dirctors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunc {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

class studentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
}








// const teacher3: Teacher = {
//   firstName: "John",
//   fullTimeEmployee: false,
//   lastName: "deo",
//   location: "London",
//   contact: false,
// }

// console.log(teacher3);

console.log(printTeacher("John", "Deo"));
