const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${path}`, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const content = data.split("\n");
        const columnName = content[0].split(",");
        const records = {};
        const fields = [];
        let length = 0;
        content.map((rawRow, index) => {
          if (index !== 0 && index !== content.length - 1 && rawRow !== "") {
            const row = rawRow.split(",");
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
        console.log(`Number of students: ${length}`);
        fields.map((field) => {
          const studentsName = [];
          records[field].map((student) => {
            studentsName.push(student.firstname);
            return null;
          });
          console.log(
            `Number of students in ${field}: ${
              records[field].length
            }. List: ${studentsName.join(", ")}`
          );
          return null;
        });
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
