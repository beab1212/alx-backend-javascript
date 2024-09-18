const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(`./${path}`, 'utf-8').split('\n');
    // column names
    const columnName = content[0].split(',');
    const records = {};
    const fields = [];
    let length = 0;
    content.map((rawRow, index) => {
      const row = rawRow.split(',');
      if (index !== 0 && index !== content.length - 1) {
        const newRow = {};
        length += 1;
        columnName.map((column, index) => {
          newRow[column] = row[index];
          return null;
        });
        if (!fields.includes(newRow.field)) {
          fields.push(newRow.field);
        }
        if (newRow.field in records) {
          records[newRow.field].push(newRow);
        } else {
          records[newRow.field] = [newRow];
        }
      }
      return null;
    });
    console.log(`Number of students: ${length}\n`);
    fields.map((field) => {
      const studentsName = [];
      records[field].map((student) => {
        studentsName.push(student.firstname);
        return null;
      });
      console.log(`Number of students in ${field} ${records[field].length} List: ${studentsName.join(', ')}\n`);
      return null;
    });
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
