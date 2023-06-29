export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(arg) {
    if (typeof(arg) != "string"){
      throw new TypeError('Name must be a string');
    }
    this._name = arg;
  }

  get name() {
    return this._name;
  }

  set length(arg) {
    if (typeof(arg) != "number"){
      throw new TypeError('Length must be a number');
    }
    this._length = arg;
  }

  get length() {
    return this._length;
  }

  set students(arg) {
    if (!Array.isArray(arg)) {
      throw new TypeError("student must be array!")
    } 
    for (val of arg) {
      if (typeof(val) != "string"){
        throw new TypeError('Students must be a string');
      }
    }
    this._students = arg;
  }

  get students() {
    return this._students;
  }
}
