const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const returnedData = {
      numberOfStudent: '',
      studentInField: [],
    };
    fs.readFile(`./${path}`, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const content = data.split('\n');
        const columnName = content[0].split(',');
        const records = {};
        const fields = [];
        let length = 0;
        content.map((rawRow, index) => {
          if (index !== 0 && index !== content.length - 1 && rawRow !== '') {
            const row = rawRow.split(',');
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
        returnedData.numberOfStudent = `Number of students: ${length}`;
        fields.map((field) => {
          const studentsName = [];
          records[field].map((student) => {
            studentsName.push(student.firstname);
            return null;
          });
          returnedData.studentInField.push(`Number of students in ${field}: ${records[field].length}. List: ${studentsName.join(', ')}`);
          return null;
        });
        resolve(returnedData);
      }
      return null;
    });
  });
}

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents(process.argv[2].toString()).then((data) => {
    res.send(`This is the list of our students\n${data.numberOfStudent}\n${data.studentInField.join('\n')}`);
  }).catch(() => {
    res.status = 404;
    res.send('Cannot load the database');
  });
});

app.listen(1245, () => {
  console.log('Server listening');
});

module.exports = app;
